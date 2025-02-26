import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedForm = () => {
    const [isHindi, setIsHindi] = useState(false);
    const [formData, setFormData] = useState({ name: "", phone: "", description: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg"
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-700">{isHindi ? "प्रपत्र भरें" : "Fill the Form"}</h2>
                <button
                    onClick={() => setIsHindi(!isHindi)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg transition transform hover:scale-105"
                >
                    {isHindi ? "English" : "हिन्दी"}
                </button>
            </div>

            <form className="space-y-4">
                <div>
                    <label className="block text-gray-600">{isHindi ? "नाम" : "Name"}</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-gray-600">{isHindi ? "फ़ोन नंबर" : "Phone Number"}</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-gray-600">{isHindi ? "पता" : "Address"}</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                        rows="3"
                    ></textarea>
                </div>
                <div>
                    <label className="block text-gray-600">{isHindi ? "विवरण" : "Description"}</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                        rows="3"
                    ></textarea>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-green-500 text-white py-2 rounded-lg shadow-md transition"
                >
                    {isHindi ? "प्रस्तुत करें" : "Submit"}
                </motion.button>
            </form>
        </motion.div>
    );
};

export default AnimatedForm;
