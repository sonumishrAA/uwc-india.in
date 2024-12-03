import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header Section */}
      <header className="bg-blue-600 text-white w-full py-6">
        <h1 className="text-center text-3xl font-bold">Worker Registration</h1>
        <p className="text-center text-sm mt-1">
          Connecting skilled workers with opportunities
        </p>
      </header>

      {/* Form Access Section */}
      <div className="bg-white rounded-lg shadow-lg mt-8 p-8 w-full max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Complete Your Registration
        </h2>
        <p className="text-gray-600 mb-6">
          Click the button below to access the registration form. Your
          information helps us connect you with the right opportunities.
        </p>
        <a
          href="https://forms.gle/ZraQQBK7xy67fvHQ6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          Open Registration Form
        </a>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-300 w-full py-6 mt-8 text-center">
        <p className="text-sm">
          Powered by{" "}
          <span className="font-semibold text-white">
            Unity Workers & Construction
          </span>
        </p>
        <p className="text-xs mt-2">
          © 2024 Unity Workers & Construction. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Signup;
