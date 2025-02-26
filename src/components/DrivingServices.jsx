import React, { useState } from "react";
import {
  FaCar,
  FaTaxi,
  FaTruck,
  FaMotorcycle,
  FaBus,
  FaRoute,
  FaCogs,
  FaHandsHelping,
  FaMapMarkerAlt,
  FaStreetView,
  FaGasPump,
  FaBatteryFull,
  FaTools,
  FaRoad,
  FaClock,
} from "react-icons/fa";

const DrivingServices = () => {
  const [language, setLanguage] = useState("en"); // 'en' for English, 'hi' for Hindi

  const services = [
    {
      id: 1,
      name: { en: "Personal Driver Service", hi: "व्यक्तिगत चालक सेवा" },
      price: 1500,
      icon: <FaCar />,
    },
    {
      id: 2,
      name: { en: "Taxi Services", hi: "टैक्सी सेवाएँ" },
      price: 1000,
      icon: <FaTaxi />,
    },
    {
      id: 3,
      name: { en: "Truck Driver Hire", hi: "ट्रक चालक किराया" },
      price: 3000,
      icon: <FaTruck />,
    },
    {
      id: 4,
      name: { en: "Motorcycle Delivery Rider", hi: "मोटरसाइकिल डिलीवरी राइडर" },
      price: 800,
      icon: <FaMotorcycle />,
    },
    {
      id: 5,
      name: { en: "Bus Driver Services", hi: "बस चालक सेवाएँ" },
      price: 2500,
      icon: <FaBus />,
    },
    {
      id: 6,
      name: { en: "Route Planning Assistance", hi: "रूट योजना सहायता" },
      price: 1200,
      icon: <FaRoute />,
    },
    {
      id: 7,
      name: { en: "Vehicle Maintenance Driver", hi: "वाहन रखरखाव चालक" },
      price: 2000,
      icon: <FaCogs />,
    },
    {
      id: 8,
      name: { en: "Emergency Driver Services", hi: "आपातकालीन चालक सेवाएँ" },
      price: 3000,
      icon: <FaHandsHelping />,
    },
    {
      id: 9,
      name: {
        en: "Local Guide with Driving Skills",
        hi: "स्थानीय गाइड और चालक कौशल",
      },
      price: 1800,
      icon: <FaMapMarkerAlt />,
    },
    {
      id: 10,
      name: { en: "Chauffeur Services", hi: "शोफर सेवाएँ" },
      price: 4000,
      icon: <FaStreetView />,
    },
    {
      id: 11,
      name: { en: "Fuel Delivery Driver", hi: "ईंधन डिलीवरी चालक" },
      price: 1000,
      icon: <FaGasPump />,
    },
    {
      id: 12,
      name: {
        en: "Electric Vehicle Charging Assistance",
        hi: "इलेक्ट्रिक वाहन चार्जिंग सहायता",
      },
      price: 1200,
      icon: <FaBatteryFull />,
    },
    {
      id: 13,
      name: {
        en: "Driver for Long Road Trips",
        hi: "लंबी सड़क यात्राओं के लिए चालक",
      },
      price: 3500,
      icon: <FaRoad />,
    },
    {
      id: 14,
      name: {
        en: "Driver for Corporate Events",
        hi: "कॉर्पोरेट आयोजनों के लिए चालक",
      },
      price: 5000,
      icon: <FaTools />,
    },
    {
      id: 15,
      name: { en: "Hourly Driver Service", hi: "घंटेवार चालक सेवा" },
      price: 500,
      icon: <FaClock />,
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
        {language === "en" ? "Driving Services" : "ड्राइविंग सेवाएँ"}
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
            <div className="text-4xl text-blue-500 mb-4">{service.icon}</div>
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

export default DrivingServices;
