// import { createClient } from "@supabase/supabase-js";
// import axios from "axios";

// import React, { useState } from "react";
// import {
//   FaCheckCircle,
//   FaBrush,
//   FaPaintRoller,
//   FaPalette,
//   FaSprayCan,
//   FaBorderAll,
//   FaVectorSquare,
//   FaDraftingCompass,
//   FaMountain,
//   FaPencilRuler,
//   FaDoorClosed,
//   FaPaintBrush,
//   FaWindowRestore,
//   FaShapes,
//   FaTree,
//   FaWarehouse,
// } from "react-icons/fa";

// const PaintingServices = () => {
//   const [language, setLanguage] = useState("en");
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     phone: "",
//     email: "",
//     amount: "",
//   });

//   // Services array remains the same
//   const services = [
//     {
//       id: 1,
//       name: { en: "Wall POP Painting", hi: "दीवार POP चित्रकला" },
//       price: 1,
//       unit: "per sq ft",
//       icon: <FaBrush />,
//     },
//     {
//       id: 2,
//       name: { en: "Wall Putty", hi: "दीवार पुट्टी" },
//       price: 15,
//       unit: "per sq ft",
//       icon: <FaPaintRoller />,
//     },
//     {
//       id: 3,
//       name: { en: "White Cement Paint", hi: "सफेद सीमेंट पेंट" },
//       price: 5,
//       unit: "per sq ft",
//       icon: <FaPalette />,
//     },
//     {
//       id: 4,
//       name: { en: "Primer Painting", hi: "प्राइमर चित्रकला" },
//       price: 5,
//       unit: "per sq ft",
//       icon: <FaSprayCan />,
//     },

//     {
//       id: 5,
//       name: { en: "Wall Painting Drawing", hi: "दीवार चित्रकला ड्राइंग" },
//       price: 100,
//       unit: "per sq ft",
//       icon: <FaBorderAll />,
//     },
//     {
//       id: 6,
//       name: { en: "Writing Paint for Vehicle", hi: "वाहन के लिए लेखन पेंट" },
//       price: 45,
//       unit: "per sq ft",
//       icon: <FaVectorSquare />,
//     },
//     {
//       id: 7,
//       name: { en: "Chawk Mitti on Wall", hi: "दीवार पर चॉक मिट्टी" },
//       price: 15,
//       unit: "per sq ft",
//       icon: <FaDraftingCompass />,
//     },
//     {
//       id: 8,
//       name: { en: "Custom Artwork", hi: "कस्टम कला" },
//       price: 5000,
//       icon: <FaMountain />,
//     },
//     {
//       id: 9,
//       name: { en: "Spray Painting", hi: "स्प्रे चित्रकला" },
//       price: 2500,
//       icon: <FaPencilRuler />,
//     },
//     {
//       id: 10,
//       name: { en: "Textured Walls", hi: "पैटर्न वाली दीवारें" },
//       price: 3000,
//       icon: <FaDoorClosed />,
//     },
//     {
//       id: 11,
//       name: { en: "Geometric Patterns", hi: "ज्यामितीय पैटर्न" },
//       price: 3500,
//       icon: <FaPaintBrush />,
//     },
//     {
//       id: 12,
//       name: {
//         en: "Interior Design Painting",
//         hi: "इंटीरियर्स डिज़ाइन चित्रकला",
//       },
//       price: 4000,
//       icon: <FaWindowRestore />,
//     },
//     {
//       id: 13,
//       name: { en: "Outdoor Mural Painting", hi: "आउटडोर म्यूरल चित्रकला" },
//       price: 7000,
//       icon: <FaShapes />,
//     },
//     {
//       id: 14,
//       name: { en: "Stencil Designs", hi: "स्टेंसिल डिज़ाइन" },
//       price: 2500,
//       icon: <FaTree />,
//     },
//     {
//       id: 15,
//       name: { en: "Door Painting", hi: "दरवाज़े की चित्रकला" },
//       price: 1500,
//       icon: <FaWarehouse />,
//     },
//     {
//       id: 16,
//       name: { en: "Brush Painting", hi: "ब्रश चित्रकला" },
//       price: 2200,
//       icon: <FaBrush />,
//     },
//     {
//       id: 17,
//       name: { en: "Window Frame Painting", hi: "खिड़की की फ्रेम चित्रकला" },
//       price: 1200,
//       icon: <FaPaintRoller />,
//     },
//     {
//       id: 18,
//       name: { en: "3D Wall Painting", hi: "3डी दीवार चित्रकला" },
//       price: 6000,
//       icon: <FaPalette />,
//     },
//     {
//       id: 19,
//       name: { en: "Tree and Nature Murals", hi: "पेड़ और प्रकृति म्यूरल" },
//       price: 8000,
//       icon: <FaSprayCan />,
//     },
//     {
//       id: 20,
//       name: { en: "Warehouse Painting", hi: "गोदाम की चित्रकला" },
//       price: 10000,
//       icon: <FaBorderAll />,
//     },
//     {
//       id: 30,
//       name: { en: "Visiting Charge", hi: "विजिटिंग चार्ज" },
//       price: 99,
//       image: "https://via.placeholder.com/100",
//     },
//   ];

//   const toggleLanguage = () => {
//     setLanguage(language === "en" ? "hi" : "en");
//   };

//   const handleBooking = (service) => {
//     setSelectedService(service);
//     setShowPaymentModal(true);
//     setFormData((prev) => ({
//       ...prev,
//       amount: service.price,
//     }));
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();

//     const supabase = createClient(
//       import.meta.env.VITE_SUPABASE_URL,
//       import.meta.env.VITE_SUPABASE_ANON_KEY
//     );

//     try {
//       // Supabase से यूज़र ID प्राप्त करें
//       const { data: user, error: authError } = await supabase.auth.getUser();
//       if (authError) throw authError;

//       const user_id = user?.user?.id;

//       // Payment Order का डेटा तैयार करें
//       const orderData = {
//         name: formData.name,
//         mobileNumber: formData.phone,
//         amount: selectedService.price,
//       };

//       // Express.js API से Order Create करें
//       const response = await axios.post(
//         "http://localhost:8000/create-order",
//         orderData
//       );

//       console.log("Order Response:", response.data);

//       if (!response.data || !response.data.url) {
//         throw new Error("Invalid Payment URL");
//       }

//       // Supabase में Order डिटेल सेव करें
//       const { data, error } = await supabase.from("orders").insert([
//         {
//           user_id: user_id,
//           name: formData.name,
//           phone: formData.phone,
//           service: selectedService.name[language], // Ensure this matches the column name
//           amount: selectedService.price,
//           status: "pending",
//         },
//       ]);

//       if (error) console.error("Error inserting order:", error);

//       // Payment Page पर Redirect करें
//       window.location.href = response.data.url;
//     } catch (error) {
//       console.log("Error in payment:", error);
//       alert(language === "en" ? "Payment Failed" : "भुगतान विफल");
//     }
//   };

//   const PaymentPopup = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
//         <button
//           onClick={() => setShowPaymentModal(false)}
//           className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
//         >
//           ✕
//         </button>

//         <h2 className="text-2xl font-bold mb-4">
//           {language === "en" ? "Payment Details" : "भुगतान विवरण"}
//         </h2>

//         <form onSubmit={handlePayment} className="space-y-4">
//           <div className="space-y-2">
//             <input
//               type="text"
//               placeholder={language === "en" ? "Full Name" : "पूरा नाम"}
//               className="w-full p-2 border rounded"
//               value={formData.name}
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-2 border rounded"
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//               required
//             />
//             <input
//               type="tel"
//               placeholder={language === "en" ? "Phone Number" : "फ़ोन नंबर"}
//               className="w-full p-2 border rounded"
//               value={formData.phone}
//               onChange={(e) =>
//                 setFormData({ ...formData, phone: e.target.value })
//               }
//               pattern="[0-9]{10}"
//               required
//             />
//             <textarea
//               placeholder={language === "en" ? "Address" : "पता"}
//               className="w-full p-2 border rounded"
//               value={formData.address}
//               onChange={(e) =>
//                 setFormData({ ...formData, address: e.target.value })
//               }
//               required
//             />
//             <div className="flex items-center gap-2">
//               <FaCheckCircle className="text-green-500" />
//               <span className="font-medium">
//                 {selectedService?.name[language]} - ₹{selectedService?.price}
//               </span>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
//           >
//             {language === "en" ? "Pay Now" : "अभी भुगतान करें"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );

//   return (
//     <div className="max-w-4xl mx-auto p-6 text-center relative">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">
//         {language === "en" ? "Painting Services" : "चित्रकला सेवाएँ"}
//       </h1>
//       <button
//         onClick={toggleLanguage}
//         className="mb-6 bg-blue-500 text-white px-4 py-2 rounded-full"
//       >
//         {language === "en" ? "Switch to Hindi" : "स्विच टू इंग्लिश"}
//       </button>

//       <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {services.map((service) => (
//           <li
//             key={service.id}
//             className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 transition transform hover:scale-105 hover:shadow-lg"
//           >
//             <div className="text-4xl text-blue-500 mb-4">{service.icon}</div>
//             <div className="text-center">
//               <h3 className="text-xl font-semibold text-gray-700">
//                 {service.name[language]}
//               </h3>
//               <p className="text-gray-500">
//                 {language === "en" ? "Price" : "मूल्य"}: ₹{service.price}{" "}
//                 {service.unit ? `(${service.unit})` : ""}
//               </p>
//             </div>
//             <button
//               className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none"
//               onClick={() => handleBooking(service)}
//             >
//               {language === "en" ? "Book Now" : "अभी बुक करें"}
//             </button>
//           </li>
//         ))}
//       </ul>

//       {showPaymentModal && <PaymentPopup />}
//     </div>
//   );
// };

export default PaintingServices;
import { createClient } from "@supabase/supabase-js";
import axios from "axios";
import React, { useState } from "react";
import {
  FaCheckCircle,
  FaBrush,
  FaPaintRoller,
  FaPalette,
  FaSprayCan,
  FaBorderAll,
} from "react-icons/fa";

// Supabase Client Setup
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const PaintingServices = () => {
  const [language, setLanguage] = useState("en");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    amount: "",
  });

  const services = [
    {
      id: 1,
      name: { en: "Wall POP Painting", hi: "दीवार POP चित्रकला" },
      price: 1,
      unit: "per sq ft",
      icon: <FaBrush />,
    },
    {
      id: 2,
      name: { en: "Wall Putty", hi: "दीवार पुट्टी" },
      price: 15,
      unit: "per sq ft",
      icon: <FaPaintRoller />,
    },
    {
      id: 3,
      name: { en: "White Cement Paint", hi: "सफेद सीमेंट पेंट" },
      price: 5,
      unit: "per sq ft",
      icon: <FaPalette />,
    },
    {
      id: 4,
      name: { en: "Primer Painting", hi: "प्राइमर चित्रकला" },
      price: 5,
      unit: "per sq ft",
      icon: <FaSprayCan />,
    },

    {
      id: 5,
      name: { en: "Wall Painting Drawing", hi: "दीवार चित्रकला ड्राइंग" },
      price: 100,
      unit: "per sq ft",
      icon: <FaBorderAll />,
    },
    {
      id: 6,
      name: { en: "Writing Paint for Vehicle", hi: "वाहन के लिए लेखन पेंट" },
      price: 45,
      unit: "per sq ft",
      icon: <FaVectorSquare />,
    },
    {
      id: 7,
      name: { en: "Chawk Mitti on Wall", hi: "दीवार पर चॉक मिट्टी" },
      price: 15,
      unit: "per sq ft",
      icon: <FaDraftingCompass />,
    },
    {
      id: 8,
      name: { en: "Custom Artwork", hi: "कस्टम कला" },
      price: 5000,
      icon: <FaMountain />,
    },
    {
      id: 9,
      name: { en: "Spray Painting", hi: "स्प्रे चित्रकला" },
      price: 2500,
      icon: <FaPencilRuler />,
    },
    {
      id: 10,
      name: { en: "Textured Walls", hi: "पैटर्न वाली दीवारें" },
      price: 3000,
      icon: <FaDoorClosed />,
    },
    {
      id: 11,
      name: { en: "Geometric Patterns", hi: "ज्यामितीय पैटर्न" },
      price: 3500,
      icon: <FaPaintBrush />,
    },
    {
      id: 12,
      name: {
        en: "Interior Design Painting",
        hi: "इंटीरियर्स डिज़ाइन चित्रकला",
      },
      price: 4000,
      icon: <FaWindowRestore />,
    },
    {
      id: 13,
      name: { en: "Outdoor Mural Painting", hi: "आउटडोर म्यूरल चित्रकला" },
      price: 7000,
      icon: <FaShapes />,
    },
    {
      id: 14,
      name: { en: "Stencil Designs", hi: "स्टेंसिल डिज़ाइन" },
      price: 2500,
      icon: <FaTree />,
    },
    {
      id: 15,
      name: { en: "Door Painting", hi: "दरवाज़े की चित्रकला" },
      price: 1500,
      icon: <FaWarehouse />,
    },
    {
      id: 16,
      name: { en: "Brush Painting", hi: "ब्रश चित्रकला" },
      price: 2200,
      icon: <FaBrush />,
    },
    {
      id: 17,
      name: { en: "Window Frame Painting", hi: "खिड़की की फ्रेम चित्रकला" },
      price: 1200,
      icon: <FaPaintRoller />,
    },
    {
      id: 18,
      name: { en: "3D Wall Painting", hi: "3डी दीवार चित्रकला" },
      price: 6000,
      icon: <FaPalette />,
    },
    {
      id: 19,
      name: { en: "Tree and Nature Murals", hi: "पेड़ और प्रकृति म्यूरल" },
      price: 8000,
      icon: <FaSprayCan />,
    },
    {
      id: 20,
      name: { en: "Warehouse Painting", hi: "गोदाम की चित्रकला" },
      price: 10000,
      icon: <FaBorderAll />,
    },
    {
      id: 30,
      name: { en: "Visiting Charge", hi: "विजिटिंग चार्ज" },
      price: 99,
      image: "https://via.placeholder.com/100",
    },
  ];
  const toggleLanguage = () => setLanguage(language === "en" ? "hi" : "en");

  const handleBooking = (service) => {
    setSelectedService(service);
    setShowPaymentModal(true);
    setFormData((prev) => ({ ...prev, amount: service.price }));
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const { data: user, error: authError } = await supabase.auth.getUser();
      if (authError) throw new Error("Authentication Error");

      const user_id = user?.user?.id;
      if (!user_id) throw new Error("User not logged in");

      const orderData = {
        name: formData.name,
        mobileNumber: formData.phone,
        amount: selectedService.price,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/create-order`,
        orderData
      );
      if (!response.data || !response.data.url)
        throw new Error("Invalid Payment URL");

      await supabase.from("orders").insert([
        {
          user_id,
          name: formData.name,
          phone: formData.phone,
          service: selectedService.name[language],
          amount: selectedService.price,
          status: "pending",
        },
      ]);

      window.location.href = response.data.url;
    } catch (error) {
      console.error("Payment Error:", error);
      alert(language === "en" ? "Payment Failed" : "भुगतान विफल");
    }
  };

  const PaymentPopup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
        <button
          onClick={() => setShowPaymentModal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">
          {language === "en" ? "Payment Details" : "भुगतान विवरण"}
        </h2>
        <form onSubmit={handlePayment} className="space-y-4">
          <input
            type="text"
            placeholder={language === "en" ? "Full Name" : "पूरा नाम"}
            className="w-full p-2 border rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <input
            type="tel"
            placeholder={language === "en" ? "Phone Number" : "फ़ोन नंबर"}
            className="w-full p-2 border rounded"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            pattern="[0-9]{10}"
            required
          />
          <textarea
            placeholder={language === "en" ? "Address" : "पता"}
            className="w-full p-2 border rounded"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            required
          />
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            <span className="font-medium">
              {selectedService?.name[language]} - ₹{selectedService?.price}
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            {language === "en" ? "Pay Now" : "अभी भुगतान करें"}
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 text-center relative">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        {language === "en" ? "Painting Services" : "चित्रकला सेवाएँ"}
      </h1>
      <button
        onClick={toggleLanguage}
        className="mb-6 bg-blue-500 text-white px-4 py-2 rounded-full"
      >
        {language === "en" ? "Switch to Hindi" : "स्विच टू इंग्लिश"}
      </button>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <li
            key={service.id}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 transition hover:scale-105"
          >
            <div className="text-4xl text-blue-500 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-700">
              {service.name[language]}
            </h3>
            <p className="text-gray-500">₹{service.price}</p>
            <button
              onClick={() => handleBooking(service)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
            >
              Book Now
            </button>
          </li>
        ))}
      </ul>
      {showPaymentModal && <PaymentPopup />}
    </div>
  );
};
