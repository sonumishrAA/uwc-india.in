import React, { useState } from "react";
import { motion } from "framer-motion";

const HireService = ({ serviceType }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        description: "",
        serviceType: serviceType, // Default service type
    });

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
                <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
                    Book {serviceType}
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
                    <textarea
                        name="description"
                        placeholder="Describe your requirement"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200"
                        rows="4"
                    />
                    <select
                        name="serviceType"
                        value={formData.serviceType}
                        disabled
                        className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
                    >
                        <option>{serviceType}</option>
                    </select>
                </div>
                <button
                    className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                    Submit Request
                </button>
            </motion.div>
        </div>
    );
};

export default HireService;
