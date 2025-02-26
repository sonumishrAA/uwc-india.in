import React, { useState } from "react";

const ElectricalServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [orderId, setOrderId] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isHindi, setIsHindi] = useState(false);

  const services = [
    {
      id: 1,
      name: { en: "Bulb Holder", hi: "बल्ब होल्डर" },
      price: 109,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHobD7tFFCgyVv0Yrq_wOoU9ZcVIobZdRUZw&s",
    },
    {
      id: 2,
      name: { en: "Single Pole MCB", hi: "सिंगल पोल MCB" },
      price: 149,
      img: "https://m.media-amazon.com/images/I/61eGaM6gJ1L.jpg",
    },
    {
      id: 3,
      name: { en: "Double Pole MCB", hi: "डबल पोल MCB" },
      price: 199,
      img: "https://m.media-amazon.com/images/I/61c4baaEZcL.jpg",
    },
    {
      id: 4,
      name: { en: "Multiple Pole MCB", hi: "मल्टीपल पोल MCB" },
      price: 399,
      img: "https://5.imimg.com/data5/SELLER/Default/2024/8/444276995/UV/KX/XK/108365438/l-t-mcb-1-500x500.png",
    },
    {
      id: 5,
      name: { en: "Fan Installation/Replace", hi: "पंखा इंस्टॉलेशन/रिप्लेस" },
      price: 179,
      img: "https://blueberrysindia.com/wp-content/uploads/2023/12/ELANTRA-copy-1.jpg",
    },
    {
      id: 6,
      name: { en: "Exhaust Installation", hi: "एग्जॉस्ट इंस्टॉलेशन" },
      price: 239,
      img: "https://technocart.com/cdn/shop/files/AlmonardExhaustFan3BladeLightDuty-00_77b739d2-cc07-4277-995c-7f6cd7047e69.png?v=1700643238",
    },
    {
      id: 7,
      name: { en: "Exhaust Replace", hi: "एग्जॉस्ट रिप्लेस" },
      price: 289,
      img: "https://technocart.com/cdn/shop/files/AlmonardExhaustFan3BladeLightDuty-00_77b739d2-cc07-4277-995c-7f6cd7047e69.png?v=1700643238",
    },
    {
      id: 8,
      name: {
        en: "Single Power Socket Replace",
        hi: "सिंगल पावर सॉकेट रिप्लेस",
      },
      price: 99,
      img: "https://5.imimg.com/data5/UD/CU/MY-15070835/single-electrical-socket.jpg",
    },
    {
      id: 9,
      name: {
        en: "Single Power Switch Install/Replace",
        hi: "सिंगल पावर स्विच इंस्टॉलेशन/रिप्लेस",
      },
      price: 99,
      img: "https://d3vpmhw8imxmio.cloudfront.net/product-variants/1000004027/EDITING/1000004027_4-650x650.webp",
    },
    {
      id: 10,
      name: { en: "Ceiling Light Install", hi: "सीलिंग लाइट इंस्टॉलेशन" },
      price: 119,
      img: "https://d3vpmhw8imxmio.cloudfront.net/product-variants/1000004027/EDITING/1000004027_4-650x650.webp",
    },
    {
      id: 11,
      name: { en: "Ceiling Light Replace", hi: "सीलिंग लाइट रिप्लेस" },
      price: 149,
      img: "https://in.shop.lighting.philips.com/cdn/shop/files/StarSurfacelight-2-PhotoRoom.png?v=1737970943",
    },
    {
      id: 12,
      name: {
        en: "Medium Size Ceiling Light Install",
        hi: "मीडियम साइज सीलिंग लाइट इंस्टॉलेशन",
      },
      price: 159,
      img: "https://in.shop.lighting.philips.com/cdn/shop/files/StarSurfacelight-2-PhotoRoom.png?v=1737970943",
    },
    {
      id: 13,
      name: {
        en: "Medium Size Ceiling Light Replace",
        hi: "मीडियम साइज सीलिंग लाइट रिप्लेस",
      },
      price: 199,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpD6c0YJGxfWMUpTnKt1UOP9C6BozsOgfCgQ&s",
    },
    {
      id: 14,
      name: {
        en: "3 to 4 Pin Electric Board Setup",
        hi: "3 से 4 पिन इलेक्ट्रिक बोर्ड सेटअप",
      },
      price: 270,
      img: "https://palfrey.in/cdn/shop/products/4-1_48f8fce7-e74b-42f2-bc88-4a034a29a179_2048x2048.jpg?v=1638441998",
    },
    {
      id: 15,
      name: { en: "Door Bell Install", hi: "डोर बेल इंस्टॉलेशन" },
      price: 149,
      img: "https://www.wmhendersoninc.com/wp-content/uploads/2023/09/How-Does-Doorbell-Work-House-Photo.jpg",
    },
    {
      id: 16,
      name: { en: "Door Bell Replace", hi: "डोर बेल रिप्लेस" },
      price: 179,
      img: "https://www.wmhendersoninc.com/wp-content/uploads/2023/09/How-Does-Doorbell-Work-House-Photo.jpg",
    },
    {
      id: 17,
      name: {
        en: "Tube Light Install with Holder Setup",
        hi: "ट्यूब लाइट इंस्टॉलेशन होल्डर सेटअप के साथ",
      },
      price: 139,
      img: "https://assets.bldnxt.in/catalog/product/cache/1/image/a77c1558d860704591e3027d1ebed402/c/h/chen600949_lumiline600949_5bd2df85b73ad.jpg",
    },
    {
      id: 18,
      name: {
        en: "Fan Regulator Install/Replace",
        hi: "फैन रेगुलेटर इंस्टॉलेशन/रिप्लेस",
      },
      price: 119,
      img: "https://m.media-amazon.com/images/I/41XL-kIC7CL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 19,
      name: {
        en: "AC Switch Board Installation",
        hi: "AC स्विच बोर्ड इंस्टॉलेशन",
      },
      price: 289,
      img: "https://m.media-amazon.com/images/I/61P5geBnNqL.jpg",
    },
    {
      id: 20,
      name: { en: "Pressure Motor Installation", hi: "प्रेशर मोटर इंस्टॉलेशन" },
      price: 409,
      img: "https://cdn.moglix.com/p/cpIaqvS6J1vF4.jpg",
    },
    {
      id: 30,
      name: { en: "Visiting Charge", hi: "विजिटिंग चार्ज" },
      price: 99,
      img: "https://via.placeholder.com/100",
    },
  ];

  const handleBooking = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const toggleLanguage = () => {
    setIsHindi(!isHindi);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        {isHindi ? "इलेक्ट्रिकल सेवाएँ" : "Electrical Services"}
      </h1>
      <button
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-full"
        onClick={toggleLanguage}
      >
        {isHindi ? "Switch to English" : "हिंदी में बदलें"}
      </button>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <li
            key={service.id}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:scale-105"
          >
            <img
              src={service.img}
              alt={service.name.en}
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-semibold">
              {isHindi ? service.name.hi : service.name.en}
            </h3>
            <p>₹{service.price}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full"
              onClick={() => handleBooking(service)}
            >
              {isHindi ? "अब बुक करें" : "Book Now"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ElectricalServices;
