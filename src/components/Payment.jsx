import React from "react";
import { useLocation } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const { totalPrice } = location.state || { totalPrice: 0 };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Payment Page</h2>
      <p className="text-lg mb-4">
        The total amount you need to pay is: <strong>₹{totalPrice}</strong>
      </p>
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150" // Replace with your QR Code URL
          alt="QR Code"
          className="w-32 h-32 mb-4"
        />
        <p>Scan the QR code to pay</p>
        <a
          href="/"
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default PaymentPage;
