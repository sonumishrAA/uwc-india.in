import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PaymentStatus = () => {
  const { id } = useParams(); // Transaction ID from URL
  const navigate = useNavigate();
  const [status, setStatus] = useState("Checking payment status... ⏳");
  const [bgColor, setBgColor] = useState("bg-gray-100");

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const response = await fetch(`https://uwcindia.in/status/${id}`);
        const data = await response.json();

        if (data.success) {
          setStatus("✅ Payment Successful! 🎉");
          setBgColor("bg-green-100");
        } else {
          setStatus("❌ Payment Failed!");
          setBgColor("bg-red-100");
        }
      } catch (error) {
        console.error("Error checking payment status:", error);
        setStatus("⚠️ Error checking payment status.");
        setBgColor("bg-yellow-100");
      }
    };

    checkPaymentStatus();
  }, [id]);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${bgColor}`}
    >
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-96">
        <h1 className="text-2xl font-bold mt-4">{status}</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default PaymentStatus;
