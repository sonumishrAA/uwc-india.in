import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PriceCalculation = () => {
  const workerPrices = {
    Plumber: 700,
    Painter: 600,
    Electrician: 600,
    Helper: 500,
    Mason: 700,
  };

  const [totalPrice, setTotalPrice] = useState(0);
  const [workerCount, setWorkerCount] = useState({
    Plumber: 0,
    Painter: 0,
    Electrician: 0,
    Helper: 0,
    Mason: 0,
  });

  const navigate = useNavigate();

  const handleWorkerCountChange = (e) => {
    const { name, value } = e.target;
    setWorkerCount({
      ...workerCount,
      [name]: parseInt(value) || 0, // Ensure input is converted to number
    });
  };

  const calculateTotalPrice = () => {
    let total = 0;
    for (let worker in workerCount) {
      total += workerPrices[worker] * workerCount[worker];
    }
    setTotalPrice(total);
    navigate("/payment", { state: { totalPrice: total } }); // Pass totalPrice to payment page
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Price Calculation</h2>
      {Object.keys(workerPrices).map((worker) => (
        <div key={worker} className="mb-4">
          <label className="block text-gray-700">{worker}</label>
          <input
            type="number"
            name={worker}
            value={workerCount[worker]}
            onChange={handleWorkerCountChange}
            min="0"
            className="mt-2 block w-full px-4 py-2 border rounded-lg"
          />
        </div>
      ))}
      <button
        onClick={calculateTotalPrice}
        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Calculate Price & Proceed to Payment
      </button>
    </div>
  );
};

export default PriceCalculation;
