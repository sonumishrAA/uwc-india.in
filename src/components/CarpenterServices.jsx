import React, { useState } from "react";

const CarpenterServices = () => {
  const [language, setLanguage] = useState("en"); // 'en' for English, 'hi' for Hindi

  const services = [
    {
      id: 1,
      name: {
        en: "Internal Door Lock Install",
        hi: "आंतरिक दरवाजा ताला स्थापना",
      },
      price: 449,
      img: "https://www.doorhandlestore.com/media/wysiwyg/bathroom_lever_on_rose_lock.png",
    },
    {
      id: 2,
      name: {
        en: "Door Handle Lock Installation",
        hi: "दरवाजा हैंडल लॉक स्थापना",
      },
      price: 299,
      img: "https://t2.sdlcdn.com/imgs/k/x/v/850X995_sharpened_2_1/Onmax-7-inches-Mortise-Door-SDL901078945-1-3521e.webp",
    },
    {
      id: 3,
      name: { en: "Door Aldrop Installation", hi: "दरवाजा ऐलड्रॉप स्थापना" },
      price: 199,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBXlP221JtVFEVThLFr3dE0vaQ7pGr7eXkw&s",
    },
    {
      id: 4,
      name: { en: "Door Stopper Install", hi: "दरवाजा स्टॉपर स्थापना" },
      price: 149,
      img: "https://www.ferio.in/image/cache/catalog/Ferio-Industries/IMG_0544-(2)-616x616h.jpg.webp",
    },
    {
      id: 5,
      name: { en: "Side Upper Lock Install", hi: "साइड अपर लॉक स्थापना" },
      price: 110,
      img: "https://m.media-amazon.com/images/I/81N3mJgEkkL._AC_UF350,350_QL80_.jpg",
    },
    {
      id: 6,
      name: {
        en: "Sliding Door Lock Install",
        hi: "स्लाइडिंग दरवाजा ताला स्थापना",
      },
      price: 199,
      img: "https://images-cdn.ubuy.co.in/633a9eafb06aa10bcf4821f9-ubuy-online-shopping.jpg",
    },
    {
      id: 7,
      name: {
        en: "Upper Door Stopper Install",
        hi: "अपर दरवाजा स्टॉपर स्थापना",
      },
      price: 449,
      img: "https://in.misumi-ec.com/linked/material/mech/TAK1/PHOTO/TAK1_221004906015.jpg?$product_view_b$",
    },
    {
      id: 8,
      name: { en: "Hanger Installation", hi: "हैंगर स्थापना" },
      price: 99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRoDAEANocxc-hQFs9EselUh7UboFmYvMMGw&s",
    },
    {
      id: 9,
      name: { en: "Door Hinge Setup", hi: "दरवाजा हिंग सेटअप" },
      price: 299,
      img: "https://acehard.in/cdn/shop/products/hinges2bb.jpg?v=1655111520",
    },
    {
      id: 10,
      name: { en: "Windows Hinge Setup", hi: "खिड़की हिंग सेटअप" },
      price: 200,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsaDVDzmAWgJeX1Tb4ppavI5_rvF_aFHJmw&s",
    },
    {
      id: 11,
      name: {
        en: "Windows Glass Setup (per sq ft)",
        hi: "खिड़की ग्लास सेटअप (प्रति वर्ग फुट)",
      },
      price: 21,
      img: "https://t3.ftcdn.net/jpg/03/25/74/68/360_F_325746852_FJNFyL7JPqwHYmukaXEVR3bwa2XEHKWN.jpg",
    },
    {
      id: 12,
      name: { en: "Window Hanger Installation", hi: "खिड़की हैंगर स्थापना" },
      price: 149,
      img: "https://assets.ajio.com/medias/sys_master/root/20221230/x7CN/63aefbf8aeb269659c193541/-1117Wx1400H-465525930-grey-MODEL.jpg",
    },
    {
      id: 13,
      name: {
        en: "Sleeping Bed Leg Repair",
        hi: "सोने के बिस्तर के पैर की मरम्मत",
      },
      price: 199,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd04Pvw0onU6jMjX-iedR7QtZNPa3GuYBp1Q&s",
    },
    {
      id: 14,
      name: {
        en: "Table Drawer Slider Install",
        hi: "टेबल ड्रॉअर स्लाइडर स्थापना",
      },
      price: 199,
      img: "https://m.media-amazon.com/images/I/514NdxcI7UL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 15,
      name: { en: "Table Drawer Lock Install", hi: "टेबल ड्रॉअर लॉक स्थापना" },
      price: 149,
      img: "https://5.imimg.com/data5/ANDROID/Default/2022/7/BE/QD/EY/69092587/product-jpeg.jpg",
    },
    {
      id: 16,
      name: {
        en: "Full Window Construction (per sq ft)",
        hi: "पूरी खिड़की निर्माण (प्रति वर्ग फुट)",
      },
      price: 200,
      img: "https://imagecdn.99acres.com//microsite/wp-content/blogs.dir/6161/files/2023/06/Full-wooden-window-design-2.jpg",
    },
    {
      id: 17,
      name: {
        en: "Full Door Construction (per sq ft)",
        hi: "पूरा दरवाजा निर्माण (प्रति वर्ग फुट)",
      },
      price: 275,
      img: "https://5.imimg.com/data5/ANDROID/Default/2020/8/GB/IW/ST/68054424/product-jpeg-500x500.jpg",
    },
    {
      id: 30,
      name: { en: "Visiting Charge", hi: "विजिटिंग चार्ज" },
      price: 99,
      image: "https://via.placeholder.com/100",
    },
  ];

  const handleBooking = (serviceName) => {
    alert(`You have booked: ${serviceName}`);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        {language === "en" ? "Carpenter Services" : "बढ़ईगीरी सेवाएँ"}
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
            <img
              src={service.img}
              alt={service.name[language]}
              className="w-24 h-24 mb-4"
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-700">
                {service.name[language]}
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

export default CarpenterServices;
