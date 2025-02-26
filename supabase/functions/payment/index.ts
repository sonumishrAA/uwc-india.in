import { serve } from "https://deno.land/std@0.192.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { createHash } from "node:crypto";

// Validate required environment variables on startup
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_KEY");
const PHONEPE_SALT_KEY = Deno.env.get("PHONEPE_SALT_KEY");

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY || !PHONEPE_SALT_KEY) {
  console.error("Missing required environment variables");
  Deno.exit(1);
}

// Initialize the Supabase client with a service role key for admin operations.
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*", // Change "*" to your allowed domain(s) in production.
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, X-VERIFY",
      },
    });
  }

  // Only allow POST requests.
  if (req.method !== "POST") {
    console.error(`Method not allowed: ${req.method}`);
    return new Response("Method not allowed", { status: 405 });
  }

  // Read the raw request body as text.
  let bodyText: string;
  try {
    bodyText = await req.text();
  } catch (err) {
    console.error("Error reading request body", err);
    return new Response("Failed to read request body", { status: 400 });
  }

  // Parse the JSON payload.
  let body: Record<string, unknown>;
  try {
    body = JSON.parse(bodyText);
  } catch (err) {
    console.error("Error parsing JSON", err);
    return new Response("Invalid JSON", { status: 400 });
  }

  // Check for required properties.
  if (!body.response) {
    console.error("Missing 'response' property in request body");
    return new Response("Missing response property", { status: 400 });
  }

  // Retrieve and validate the X-VERIFY header.
  const xVerify = req.headers.get("X-VERIFY");
  if (!xVerify) {
    console.error("Missing X-VERIFY header");
    return new Response("Missing X-VERIFY header", { status: 400 });
  }
  const [receivedSignature, saltIndex] = xVerify.split("###");
  if (!receivedSignature || !saltIndex) {
    console.error("Malformed X-VERIFY header");
    return new Response("Malformed X-VERIFY header", { status: 400 });
  }

  // Generate the signature using SHA-256 over the raw body plus the PhonePe salt key.
  let generatedSignature: string;
  try {
    generatedSignature = createHash("sha256")
      .update(bodyText + PHONEPE_SALT_KEY)
      .digest("hex");
  } catch (err) {
    console.error("Error generating signature", err);
    return new Response("Internal error", { status: 500 });
  }

  // Verify the signature matches.
  if (generatedSignature !== receivedSignature) {
    console.error(
      "Signature mismatch. Received:",
      receivedSignature,
      "Generated:",
      generatedSignature
    );
    return new Response("Invalid signature", { status: 401 });
  }

  // Decode the base64-encoded response payload.
  let callbackResponse: { merchantTransactionId: string; code: string };
  try {
    const decodedResponse = atob(body.response as string);
    callbackResponse = JSON.parse(decodedResponse);
  } catch (err) {
    console.error("Error decoding or parsing response field", err);
    return new Response("Invalid response format", { status: 400 });
  }

  const { merchantTransactionId, code } = callbackResponse;
  if (!merchantTransactionId || !code) {
    console.error("Incomplete callback response", callbackResponse);
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

  return new Response("OK", { status: 200, headers: { "Access-Control-Allow-Origin": "*" } });
});
