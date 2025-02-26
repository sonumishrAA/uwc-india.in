import { serve } from "https://deno.land/std@0.192.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { createHash } from "node:crypto";

// Validate required environment variables on startup.
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_KEY") || Deno.env.get("SUPABASE_ANON_KEY");
const PHONEPE_SALT_KEY = Deno.env.get("PHONEPE_SALT_KEY");

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY || !PHONEPE_SALT_KEY) {
  console.error("Missing required environment variables.");
  Deno.exit(1);
}

// Initialize Supabase client using the service key (or anon key as fallback)
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

serve(async (req) => {
  try {
    // Allow only POST requests.
    if (req.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    // Read the raw request body as text.
    const bodyText = await req.text();

    // Parse the JSON payload.
    let body: Record<string, unknown>;
    try {
      body = JSON.parse(bodyText);
    } catch (err) {
      console.error("Error parsing JSON", err);
      return new Response("Invalid JSON", { status: 400 });
    }

    // Retrieve and validate the X-VERIFY header.
    const xVerify = req.headers.get("X-VERIFY");
    if (!xVerify) {
      return new Response("Missing X-VERIFY header", { status: 400 });
    }
    const parts = xVerify.split("###");
    if (parts.length !== 2) {
      return new Response("Malformed X-VERIFY header", { status: 400 });
    }
    const [receivedSignature, saltIndex] = parts;

    // Generate signature using SHA-256 over the raw body plus the PhonePe salt key.
    const generatedSignature = createHash("sha256")
      .update(bodyText + PHONEPE_SALT_KEY)
      .digest("hex");

    if (generatedSignature !== receivedSignature) {
      console.error("Signature mismatch", { receivedSignature, generatedSignature });
      return new Response("Invalid signature", { status: 401 });
    }

    // Validate the presence of the "response" property.
    if (!body.response) {
      return new Response("Missing response property", { status: 400 });
    }

    let callbackResponse: { merchantTransactionId: string; code: string };
    try {
      // atob decodes a base64-encoded string.
      callbackResponse = JSON.parse(atob(body.response as string));
    } catch (err) {
      console.error("Error decoding response", err);
      return new Response("Invalid response format", { status: 400 });
    }

    const { merchantTransactionId, code } = callbackResponse;
    if (!merchantTransactionId || !code) {
      return new Response("Incomplete response data", { status: 400 });
    }

    // Update the order status in Supabase.
    const { error } = await supabase
      .from("orders")
      .update({ status: code === "PAYMENT_SUCCESS" ? "success" : "failed" })
      .eq("order_id", merchantTransactionId);

    if (error) {
      console.error("Error updating order status", error);
      return new Response("Failed to update order", { status: 500 });
    }

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("Unhandled error", err);
    return new Response("Internal Server Error", { status: 500 });
  }
});
