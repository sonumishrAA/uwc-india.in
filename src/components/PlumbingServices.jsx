import React, { useState } from "react";

const PlumbingServices = () => {
  const [language, setLanguage] = useState("en"); // 'en' for English, 'hi' for Hindi


  const services = [
    {
      id: 1,
      name: { en: "Water Tank Installation (250L)", hi: "पानी टैंक स्थापना (250L)" },
      price: 450,
      image: "https://5.imimg.com/data5/XQ/UM/MY-20877241/water-storage-tank.jpg"
    },
    {
      id: 2,
      name: { en: "Water Tank Installation (500L)", hi: "पानी टैंक स्थापना (500L)" },
      price: 549,
      image: "https://5.imimg.com/data5/XQ/UM/MY-20877241/water-storage-tank.jpg"
    },
    {
      id: 3,
      name: { en: "Water Tank Installation (1000L)", hi: "पानी टैंक स्थापना (1000L)" },
      price: 749,
      image: "https://5.imimg.com/data5/XQ/UM/MY-20877241/water-storage-tank.jpg"
    },
    {
      id: 4,
      name: { en: "Water Tank Installation (2000L)", hi: "पानी टैंक स्थापना (2000L)" },
      price: 1000,
      image: "https://5.imimg.com/data5/XQ/UM/MY-20877241/water-storage-tank.jpg"
    },
    {
      id: 5,
      name: { en: "Sink Tank Installation", hi: "सिंक टैंक स्थापना" },
      price: 449,
      image: "https://www.fosterspa.com/public/img/monovasca-s1000-1180-150-322058-524514.jpg"
    },
    {
      id: 6,
      name: { en: "Sink Tank Replacement", hi: "सिंक टैंक प्रतिस्थापन" },
      price: 600,
      image: "https://www.fosterspa.com/public/img/monovasca-s1000-1180-150-322058-524514.jpg"
    },
    {
      id: 7,
      name: { en: "Basin Installation", hi: "बेसिन स्थापना" },
      price: 449,
      image: "https://www.plantex.in/cdn/shop/files/71qyHEULkDL.jpg?v=1730899006&width=1024"
    },
    {
      id: 8,
      name: { en: "Basin Replacement", hi: "बेसिन प्रतिस्थापन" },
      price: 600,
      image: "https://www.plantex.in/cdn/shop/files/71qyHEULkDL.jpg?v=1730899006&width=1024"
    },
    {
      id: 9,
      name: { en: "Jet Spray Installation", hi: "जेट स्प्रे स्थापना" },
      price: 149,
      image: "https://m.media-amazon.com/images/I/61S3EZMYnuL.jpg"
    },
    {
      id: 10,
      name: { en: "Jet Spray Replacement", hi: "जेट स्प्रे प्रतिस्थापन" },
      price: 199,
      image: "https://m.media-amazon.com/images/I/61S3EZMYnuL.jpg"
    },
    {
      id: 11,
      name: { en: "Flush Tank Installation", hi: "फ्लश टैंक स्थापना" },
      price: 349,
      image: "https://m.media-amazon.com/images/I/51InW6qOvrL.jpg"
    },
    {
      id: 12,
      name: { en: "Flush Tank Replacement", hi: "फ्लश टैंक प्रतिस्थापन" },
      price: 449,
      image: "https://m.media-amazon.com/images/I/51InW6qOvrL.jpg"
    },
    {
      id: 13,
      name: { en: "Commode Installation", hi: "कोमोड स्थापना" },
      price: 999,
      image: "https://5.imimg.com/data5/SELLER/Default/2021/3/QI/YS/GV/66895825/indian-commode-v1-500x500.jpg"
    },
    {
      id: 14,
      name: { en: "Commode Replacement", hi: "कोमोड प्रतिस्थापन" },
      price: 1999,
      image: "https://5.imimg.com/data5/SELLER/Default/2021/3/QI/YS/GV/66895825/indian-commode-v1-500x500.jpg"
    },
    {
      id: 15,
      name: { en: "Toilet Seat Installation", hi: "टॉयलेट सीट स्थापना" },
      price: 449,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjicEpJyVbplsOlc5bub4rkg6LZdMrJFITnQ&s"
    },
    {
      id: 16,
      name: { en: "Toilet Seat Replacement", hi: "टॉयलेट सीट प्रतिस्थापन" },
      price: 549,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjicEpJyVbplsOlc5bub4rkg6LZdMrJFITnQ&s"
    },
    {
      id: 17,
      name: { en: "Western Commode Installation", hi: "वेस्टरन कमोड स्थापना" },
      price: 1099,
      image: "https://hindware.com/wp-content/uploads/2024/09/92639-430x392.jpg"
    },
    {
      id: 18,
      name: { en: "Western Commode Replacement", hi: "वेस्टरन कमोड प्रतिस्थापन" },
      price: 2090,
      image: "https://hindware.com/wp-content/uploads/2024/09/92639-430x392.jpg"
    },
    {
      id: 19,
      name: { en: "Western Commode Cover Replacement", hi: "वेस्टरन कमोड कवर प्रतिस्थापन" },
      price: 199,
      image: "https://m.media-amazon.com/images/I/61CITkurSyL.jpg"
    },
    {
      id: 20,
      name: { en: "Stand Handwash Basin Installation", hi: "स्टैंड हैंडवाश बेसिन स्थापना" },
      price: 449,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_9xQo78DfJJ2ugHnkOrnDjb0YIA-Pqd1LoA&s"
    },
    {
      id: 21,
      name: { en: "Mixture Tap Installation", hi: "मिक्सर टैप स्थापना" },
      price: 299,
      image: "https://rukminim2.flixcart.com/image/850/1000/kfikya80/faucet/k/8/m/prime-3-in-1-wall-mixture-tap-for-bathroom-zap-original-imafvyb6gxvn4ztf.jpeg?q=20&crop=false"
    },
    {
      id: 22,
      name: { en: "Single Tap Installation", hi: "सिंगल टैप स्थापना" },
      price: 99,
      image: "https://m.media-amazon.com/images/I/71LFvIJX5pL.jpg"
    },
    {
      id: 23,
      name: { en: "Bathing Shower Installation", hi: "बाथिंग शावर स्थापना" },
      price: 170,
      image: "https://m.media-amazon.com/images/I/61ppcgHeHXL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 24,
      name: { en: "Bathing Shower Replacement", hi: "बाथिंग शावर प्रतिस्थापन" },
      price: 250,
      image: "https://m.media-amazon.com/images/I/61ppcgHeHXL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 25,
      name: { en: "Geyser Installation", hi: "गिज़र स्थापना" },
      price: 450,
      image: "https://longwayindia.com/cdn/shop/files/LW-Superb-Gray-35L-P1.jpg?v=1738823208"
    },
    {
      id: 26,
      name: { en: "Sink Pipe Repair", hi: "सिंक पाइप मरम्मत" },
      price: 150,
      image: "https://images-cdn.ubuy.co.in/66921c8c69abee1a444b8968-flexible-sink-drain-pipe-1-1-2-p-trap.jpg"
    },
    {
      id: 27,
      name: { en: "Complex Pipe Joint Fixing", hi: "कॉम्प्लेक्स पाइप जोइंट फिक्सिंग" },
      price: 450,
      image: "https://le-cdn.hibuwebsites.com/1dc616313fa0466ebb97b39b77486600/dms3rep/multi/opt/RSshutterstock_1149190532-640w.jpg"
    },
    {
      id: 28,
      name: { en: "PVC Pipe Fitting (per square ft)", hi: "PVC पाइप फिटिंग (प्रति वर्ग फीट)" },
      price: 100,
      image: "https://5.imimg.com/data5/RC/BM/MY-50337101/hard-plastic-pvc-pipe.jpg"
    },
    {
      id: 29,
      name: { en: "Single Tap Replacement", hi: "सिंगल टैप प्रतिस्थापन" },
      price: 149,
      image: "https://m.media-amazon.com/images/I/61ornoCmyiL.jpg"
    },
    {
      id: 30,
      name: { en: "Visiting Charge", hi: "विजिटिंग चार्ज" },
      price: 99,
      image: "https://png.pngtree.com/png-vector/20240216/ourmid/pngtree-plumber-man-with-plumbing-tools-png-image_11744345.png"
    }
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
        {language === "en" ? "Plumbing Services" : "प्लंबिंग सेवाएँ"}
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
            <img src={service.image} alt={service.name[language]} className="w-20 h-20 mb-4" />
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

export default PlumbingServices;
