import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-gray-50 to-blue-50 py-10 px-4 sm:px-8 lg:px-16">
      <motion.div
        className="max-w-6xl mx-auto bg-white shadow-2xl rounded-lg p-8 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Design */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-blue-300 to-green-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tr from-gray-300 to-purple-300 rounded-full blur-3xl opacity-20"></div>

        {/* Header */}
        <motion.h1
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-8 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Privacy Policy 🔒
        </motion.h1>

        <motion.p
          className="text-gray-700 text-lg text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          At{" "}
          <span className="font-semibold text-blue-500">
            Unity Workers & Constructions
          </span>
          , your trust matters to us. This Privacy Policy outlines how we
          protect your data while connecting 🛠️ workers and clients seamlessly.
        </motion.p>

        {/* Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <motion.div
            className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-blue-100 to-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              1. Information We Collect 📋
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Personal Information: Name, contact details, and address.</li>
              <li>Worker Details: Skills, experience, and availability.</li>
              <li>Usage Data: Device type, browser type, and IP address.</li>
            </ul>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-green-100 to-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              2. How We Use Your Information 🌟
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>🔗 To connect workers with clients efficiently.</li>
              <li>📃 To process service requests and manage contracts.</li>
              <li>📈 To enhance our platform for a seamless experience.</li>
              <li>🛡️ To ensure security, compliance, and fraud prevention.</li>
            </ul>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-purple-100 to-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              3. Sharing Your Information 🤝
            </h2>
            <p className="text-gray-700 leading-7">
              We may share your data with:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
              <li>Trusted service providers for operations.</li>
              <li>Clients and workers to fulfill requests.</li>
              <li>Legal authorities, if required by law.</li>
            </ul>
          </motion.div>

          {/* Section 4 */}
          <motion.div
            className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-gray-100 to-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-600 mb-4">
              4. Your Rights ✨
            </h2>
            <p className="text-gray-700 leading-7">You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
              <li>Access, update, or delete your personal information.</li>
              <li>Contact us for data-related inquiries.</li>
            </ul>
            <p className="text-gray-700 mt-4">Reach us via:</p>
            <ul className="mt-4 text-gray-700 space-y-2">
              <li>
                📧 Email:{" "}
                <a
                  href="mailto:support@uwcindia.in"
                  className="text-blue-500 underline"
                >
                  support@uwcindia.in
                </a>
              </li>
              <li>
                📞 Phone:{" "}
                <a href="tel:+919580599181" className="text-blue-500 underline">
                  +91 958-059-9181
                </a>
              </li>
              <li>📍 Address: 177 Mahaveer Market, Babaganj, Pratapgarh, UP</li>
            </ul>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-12 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          &copy; {new Date().getFullYear()} Unity Workers & Constructions. 🌐
          All rights reserved.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
