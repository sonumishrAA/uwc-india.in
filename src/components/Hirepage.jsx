import React, { useState } from "react";
import { motion } from "framer-motion";

const workerPrices = {
    Masonry: 400,
    Labour: 300,
    Painter: 450,
    Electrician: 500,
    Plumber: 600,
};

const HireWorker = ({ workerType }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        workerType: workerType,
        workers: 1,
    });

    const pricePerWorker = workerPrices[workerType] || 500; // Default price if not found
    const totalPrice = formData.workers * pricePerWorker;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-lg rounded-2xl p-6 max-w-md w-full"
            >
                {step === 1 ? (
                    <div>
                        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
                            Hire a {workerType}
                        </h2>
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder="Your Address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
                            />
                            <select
                                name="workerType"
                                value={formData.workerType}
                                disabled
                                className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
                            >
                                <option>{workerType}</option>
                            </select>
                            <input
                                type="number"
                                name="workers"
                                min="1"
                                value={formData.workers}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
                            />
                        </div>
                        <p className="text-center text-lg mt-2 text-gray-600">
                            Price per {workerType}: ₹{pricePerWorker}
                        </p>
                        <button
                            onClick={() => setStep(2)}
                            className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                        >
                            Proceed to Payment
                        </button>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
                            Payment Summary
                        </h2>
                        <div className="space-y-3">
                            <p className="text-lg">
                                <strong>Name:</strong> {formData.name}
                            </p>
                            <p className="text-lg">
                                <strong>Phone:</strong> {formData.phone}
                            </p>
                            <p className="text-lg">
                                <strong>Address:</strong> {formData.address}
                            </p>
                            <p className="text-lg">
                                <strong>Worker Type:</strong> {formData.workerType}
                            </p>
                            <p className="text-lg">
                                <strong>Workers:</strong> {formData.workers}
                            </p>
                            <p className="text-xl font-bold text-gray-700">
                                Total Price: ₹{totalPrice}
                            </p>
                        </div>
                        <button
                            className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                        >
                            Pay Now
                        </button>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default HireWorker;
