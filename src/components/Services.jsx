import React from "react";
import { FaHammer, FaPaintRoller, FaUserAlt, FaWrench } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="services-container py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <p className="text-lg text-gray-600">
          We provide skilled workers for all your construction needs
        </p>
      </div>
      <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        <motion.div
          className="service-item bg-white p-6 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaHammer className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Masonry</h3>
          <p className="text-gray-600">
            Skilled masons for all types of brick, stone, and concrete work.
          </p>
        </motion.div>

        <motion.div
          className="service-item bg-white p-6 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaUserAlt className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">
            Labor Services
          </h3>
          <p className="text-gray-600">
            Experienced workers for carrying out various labor-intensive tasks.
          </p>
        </motion.div>

        <motion.div
          className="service-item bg-white p-6 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaPaintRoller className="text-4xl text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Painting</h3>
          <p className="text-gray-600">
            Professional painters for interior and exterior painting work.
          </p>
        </motion.div>

        <motion.div
          className="service-item bg-white p-6 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaWrench className="text-4xl text-red-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Carpentry</h3>
          <p className="text-gray-600">
            Skilled carpenters for custom furniture and woodwork services.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
