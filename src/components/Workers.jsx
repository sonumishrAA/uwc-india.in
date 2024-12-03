import React from "react";
import { FaPhoneAlt, FaEnvelope, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";

const workersData = [
  {
    name: "Ravi Kumar",
    job: "Mason",
    phone: "+91 123-456-7890",
    email: "ravi.kumar@example.com",
  },
  {
    name: "Shyam Sundar",
    job: "Laborer",
    phone: "+91 987-654-3210",
    email: "shyam.sundar@example.com",
  },
  {
    name: "Vinod Yadav",
    job: "Painter",
    phone: "+91 555-666-7777",
    email: "vinod.yadav@example.com",
  },
  {
    name: "Amit Kumar",
    job: "Carpenter",
    phone: "+91 111-222-3333",
    email: "amit.kumar@example.com",
  },
];

const Workers = () => {
  return (
    <div className="workers-container py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Our Skilled Workers
        </h2>
        <p className="text-lg text-gray-600">
          Meet our dedicated team of professionals
        </p>
      </div>
      <div className="workers-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {workersData.map((worker, index) => (
          <motion.div
            key={index}
            className="worker-item bg-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaUserTie className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              {worker.name}
            </h3>
            <p className="text-gray-600">{worker.job}</p>
            <div className="contact-info mt-4">
              <p className="flex justify-center items-center text-gray-600">
                <FaPhoneAlt className="mr-2" /> {worker.phone}
              </p>
              <p className="flex justify-center items-center text-gray-600 mt-2">
                <FaEnvelope className="mr-2" /> {worker.email}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Workers;
