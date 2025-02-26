import { motion } from "framer-motion";

function ContractServices() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-3xl text-center">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-800">
            Contract Services
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Bringing value-driven solutions to your business.
          </p>
        </motion.div>
        <motion.div
          className="py-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-gray-500 text-lg italic">
            <p>This service is currently not available.</p>
            <p className="mt-2">
              We are diligently working on it and will go live soon!
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="/"
            className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Back to Home
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default ContractServices;
