// import React, { useState } from "react";
// import { db, collection, addDoc } from "../firebase";
// import { motion } from "framer-motion";

// const workerTypes = [
//   { label: "Plumber (प्लंबर)", value: "Plumber", price: 500 },
//   { label: "Painter (पेंटर)", value: "Painter", price: 400 },
//   { label: "Electrician (बिजली मिस्त्री)", value: "Electrician", price: 600 },
//   { label: "Helper (Helper)", value: "Helper", price: 300 },
//   { label: "Mason (मिस्त्री)", value: "Mason", price: 700 },
// ];

// const ClientDemandForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     landmark: "",
//     pincode: "",
//     workerType: [],
//     workerCount: {},
//   });

//   const [totalPrice, setTotalPrice] = useState(0);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (type === "checkbox") {
//       setFormData((prevData) => ({
//         ...prevData,
//         workerType: checked
//           ? [...prevData.workerType, value]
//           : prevData.workerType.filter((worker) => worker !== value),
//       }));
//     } else if (name === "workerCount") {
//       setFormData((prevData) => {
//         const updatedWorkerCount = {
//           ...prevData.workerCount,
//           [value]: parseInt(e.target.value),
//         };

//         // Recalculate total price
//         let newTotal = 0;
//         for (const worker in updatedWorkerCount) {
//           const workerPrice =
//             workerTypes.find((w) => w.value === worker)?.price || 0;
//           newTotal += (updatedWorkerCount[worker] || 0) * workerPrice;
//         }

//         setTotalPrice(newTotal);

//         return {
//           ...prevData,
//           workerCount: updatedWorkerCount,
//         };
//       });
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await addDoc(collection(db, "clientDemands"), {
//         ...formData,
//         totalPrice,
//       });
//       console.log("Data successfully added!");
//       alert("Proceeding to payment...");
//       window.location.href = "/payment"; // Redirect to payment page
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="p-6 max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-lg"
//     >
//       <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
//         Client Demand Form
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-8">
//         {/* Existing input fields */}
//         {/* ... */}

//         {/* Worker Type Selection */}
//         <motion.div whileHover={{ scale: 1.05 }}>
//           <label className="block text-gray-700 font-medium mb-2">
//             Select Worker Type(s)
//           </label>
//           <div className="grid grid-cols-2 gap-4 mt-4">
//             {workerTypes.map((worker) => (
//               <motion.div
//                 key={worker.value}
//                 whileHover={{ scale: 1.05 }}
//                 className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg shadow"
//               >
//                 <input
//                   type="checkbox"
//                   id={worker.value}
//                   name="workerType"
//                   value={worker.value}
//                   onChange={handleChange}
//                   className="h-5 w-5"
//                 />
//                 <label htmlFor={worker.value} className="text-gray-700">
//                   {worker.label} (₹{worker.price}/worker)
//                 </label>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Worker Count and Total Price */}
//         {formData.workerType.length > 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="bg-blue-50 p-4 rounded-lg shadow"
//           >
//             <label className="block text-gray-700 font-medium mb-2">
//               Specify Number of Workers
//             </label>
//             {formData.workerType.map((worker) => (
//               <motion.div
//                 key={worker}
//                 whileHover={{ scale: 1.05 }}
//                 className="flex items-center justify-between mt-4"
//               >
//                 <span className="text-gray-700">{worker}</span>
//                 <input
//                   type="number"
//                   name="workerCount"
//                   min="1"
//                   value={formData.workerCount[worker] || ""}
//                   onChange={handleChange}
//                   placeholder="Enter count"
//                   className="px-3 py-2 border rounded-lg shadow focus:ring-2 focus:ring-blue-500"
//                 />
//               </motion.div>
//             ))}

//             <div className="mt-6 text-xl font-bold text-gray-800">
//               Total Price: ₹{totalPrice}
//             </div>
//           </motion.div>
//         )}

//         {/* Submit Button */}
//         <motion.button
//           type="submit"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//           className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700"
//         >
//           Submit and Proceed to Payment
//         </motion.button>
//       </form>
//     </motion.div>
//   );
// };

// export default ClientDemandForm;
import React from "react";

const ClientDemandForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header Section */}
      <header className="bg-white-600 text-black w-full py-4 shadow-md">
        <h1 className="text-center text-2xl font-bold">Client Demand Form</h1>
        <p className="text-center text-sm mt-1">
          Let us know your requirements to serve you better!
        </p>
      </header>

      {/* Form Section */}
      <div className="bg-white rounded-lg shadow-lg mt-8 p-6 w-full max-w-3xl">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSckyRqJ5Mybii1cQ5LPn9COYXyAt0V11-PDuoCSYKzMJymOpw/viewform?embedded=true"
          width="100%"
          height="1740"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="rounded-md border border-gray-300"
          title="Client Demand Form"
        >
          Loading…
        </iframe>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-300 w-full py-3 mt-8 text-center">
        <p>© 2024 uwcindia. All Rights Reserved.</p>
        <p className="text-sm">
          Need help?{" "}
          <a href="mailto:support@uwcindia.in" className="text-blue-400">
            Contact us
          </a>
        </p>
      </footer>
    </div>
  );
};
export default ClientDemandForm;
