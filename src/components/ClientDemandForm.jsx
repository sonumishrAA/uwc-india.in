import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation to payment page
// import { addDataToCollection } from "../firebase"; // Firebase function

const CDFForm = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState("");

  const [workers, setWorkers] = useState([{ type: "", count: 1 }]); // Array to hold multiple worker types and their counts
  const [totalPrice, setTotalPrice] = useState(0);

  const workerPrices = {
    worker1: 500,
    worker2: 700,
    worker3: 1000,
  };

  // Handle changes in the worker type or count
  const handleWorkerChange = (index, field, value) => {
    const updatedWorkers = [...workers];
    updatedWorkers[index][field] = value;

    if (field === "count") {
      updatedWorkers[index].totalPrice =
        workerPrices[updatedWorkers[index].type] * value;
    }

    setWorkers(updatedWorkers);
    calculateTotalPrice(updatedWorkers);
  };

  // Calculate total price for all workers
  const calculateTotalPrice = (workers) => {
    const total = workers.reduce(
      (sum, worker) => sum + (worker.totalPrice || 0),
      0
    );
    setTotalPrice(total);
  };

  // Add another worker input field
  const addWorker = () => {
    setWorkers([...workers, { type: "", count: 1 }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName,
      contactNo,
      address,
      landmark,
      pincode,
      workers,
      totalPrice,
    };

    // Add data to Firestore
    await addDataToCollection("client_demand", formData);

    // Navigate to the Payment Page with the selected data
    navigate("/payment", { state: { totalPrice, workers, formData } });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Client Demand Form
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow-lg"
      >
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-lg font-medium">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg mt-1"
            required
          />
        </div>

        {/* Contact Number */}
        <div>
          <label htmlFor="contactNo" className="block text-lg font-medium">
            Contact Number
          </label>
          <input
            id="contactNo"
            type="text"
            placeholder="Enter your contact number"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg mt-1"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-lg font-medium">
            Address
          </label>
          <input
            id="address"
            type="text"
            placeholder="Enter your full address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg mt-1"
            required
          />
        </div>

        {/* Landmark */}
        <div>
          <label htmlFor="landmark" className="block text-lg font-medium">
            Landmark
          </label>
          <input
            id="landmark"
            type="text"
            placeholder="Enter a nearby landmark"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg mt-1"
          />
        </div>

        {/* Pincode */}
        <div>
          <label htmlFor="pincode" className="block text-lg font-medium">
            Pincode
          </label>
          <input
            id="pincode"
            type="text"
            placeholder="Enter your pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg mt-1"
            required
          />
        </div>

        {/* Worker Type & Quantity */}
        {workers.map((worker, index) => (
          <div key={index} className="space-y-3">
            <div>
              <label
                htmlFor={`workerType-${index}`}
                className="block text-lg font-medium"
              >
                Worker Type
              </label>
              <select
                id={`workerType-${index}`}
                value={worker.type}
                onChange={(e) =>
                  handleWorkerChange(index, "type", e.target.value)
                }
                className="w-full p-3 border-2 border-gray-300 rounded-lg mt-1"
                required
              >
                <option value="">Select Worker Type</option>
                <option value="worker1">Worker Type 1</option>
                <option value="worker2">Worker Type 2</option>
                <option value="worker3">Worker Type 3</option>
              </select>
            </div>

            <div>
              <label
                htmlFor={`workerCount-${index}`}
                className="block text-lg font-medium"
              >
                Number of Workers
              </label>
              <input
                id={`workerCount-${index}`}
                type="number"
                min="1"
                value={worker.count}
                onChange={(e) =>
                  handleWorkerChange(index, "count", e.target.value)
                }
                className="w-full p-3 border-2 border-gray-300 rounded-lg mt-1"
                required
              />
            </div>

            <div>
              <p>
                Total for this worker: ₹
                {workerPrices[worker.type] * worker.count}
              </p>
            </div>
          </div>
        ))}

        {/* Button to add another worker */}
        <div className="text-center">
          <button
            type="button"
            onClick={addWorker}
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          >
            Add Another Worker
          </button>
        </div>

        {/* Display total price */}
        <div className="text-xl font-semibold">
          <p>Total Price: ₹{totalPrice}</p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CDFForm;
