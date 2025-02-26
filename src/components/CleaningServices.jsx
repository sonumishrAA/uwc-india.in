import React, { useState } from "react";

const CleaningServices = () => {
  const [language, setLanguage] = useState("en"); // 'en' for English, 'hi' for Hindi

  const services = [
    {
      id: 1,
      name: { en: "Washroom Cleaning with Commode", hi: "वॉशरूम की सफाई (कोमोड के साथ)" },
      price: 169,
      image: "https://jkmaxxpaints.com/wp-content/uploads/2024/03/Enhancing-Wall-Durability-with-Advanced-Waterproof-Putty-1.jpg"
    },
    {
      id: 2,
      name: { en: "Toilet Seat Cleaning", hi: "टॉयलेट सीट की सफाई" },
      price: 129,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQadULtxxAKZ3i8TJl6SOAzp_JTHH9Cn5pArg&s"
    },
    {
      id: 3,
      name: { en: "Bathing Room Cleaning", hi: "बाथिंग रूम की सफाई" },
      price: 149,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYGPuatT4OzukhMnnMOcTi9S_Mf3nwdgNyg&s"
    },
    {
      id: 4,
      name: { en: "Water Tank Cleaning (Under 500L)", hi: "जल टंकी की सफाई (500L तक)" },
      price: 349,
      image: "https://m.media-amazon.com/images/I/51EGhaxenJL._AC_UF350,350_QL80_.jpg"
    },
    {
      id: 5,
      name: { en: "Water Tank Cleaning (1000L)", hi: "जल टंकी की सफाई (1000L)" },
      price: 449,
      image: "https://content.jdmagicbox.com/comp/def_content_category/plaster-of-paris-manufacturers/360-f-528223364-8uhyqggmwddjxgbbbcu4gysnjya2e7x1-plaster-of-paris-manufacturers-3-ssods-250.jpg"
    },
    {
      id: 6,
      name: { en: "Water Tank Cleaning (2000L)", hi: "जल टंकी की सफाई (2000L)" },
      price: 549,
      image: "https://5.imimg.com/data5/SELLER/Default/2024/5/421841948/DJ/PQ/SL/41677061/domestic-water-tank-cleaning-service.jpg"
    },
    {
      id: 7,
      name: { en: "Kitchen Room Cleaning", hi: "किचन रूम की सफाई" },
      price: 249,
      image: "https://www.extraspaceasia.com.sg/wp-content/uploads/2021/01/Extra-Space-Asia-Cleaning-and-Organisation-Tips.jpg"
    },
    {
      id: 8,
      name: { en: "Garbage Cleaning (Per Trolley)", hi: "कचरा सफाई (प्रति ट्रॉली)" },
      price: 199,
      image: "https://img.freepik.com/premium-vector/worker-pushing-trash-can-garbage-cleaning-service_80590-21191.jpg?w=360"
    },
    {
      id: 9,
      name: { en: "Single Room Cleaning", hi: "सिंगल रूम की सफाई" },
      price: 129,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2F1otFqrvWZBAviE6lIupZIMVjwJp0YJCA&s"
    },
    {
      id: 10,
      name: { en: "Bathing Tub Cleaning", hi: "बाथिंग टब की सफाई" },
      price: 149,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8DDQ5eWPA7Xn-VBOv2nrwY10m7lKcE3gmHA&s"
    },
    {
      id: 30,
      name: { en: "Visiting Charge", hi: "विजिटिंग चार्ज" },
      price: 99,
      image: "https://via.placeholder.com/100"
    },
  ];

  const handleBooking = (serviceName) => {
    alert(`You have booked: ${serviceName}`);
  };

  // Toggle language function
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        {language === "en" ? "Cleaning Services" : "सफाई सेवाएँ"}
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
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 transition transform hover:scale-105 hover:shadow-lg"
          >
            <img src={service.image} alt={service.name[language]} className="w-32 h-32 mb-4 object-cover" />
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-700">
                {service.name[language]}{" "}
                {/* Toggle service name based on selected language */}
              </h3>
              <p className="text-gray-500">
                {language === "en" ? "Price" : "मूल्य"}: ₹{service.price}
              </p>
            </div>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none"
              onClick={() => handleBooking(service.name[language])}
            >
              {language === "en" ? "Book Now" : "अभी बुक करें"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CleaningServices;
