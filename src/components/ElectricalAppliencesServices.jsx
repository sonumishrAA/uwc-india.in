import React, { useState } from "react";

const ElectricalAppliencesServices = () => {
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
      name: { en: "AC Installation", hi: "AC इंस्टॉलेशन" },
      price: 1349,
      img: "https://static.wixstatic.com/media/4af009_50b99ed648a4405980138b37e56d3abb~mv2.jpg/v1/fill/w_980,h_569,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4af009_50b99ed648a4405980138b37e56d3abb~mv2.jpg",
    },
    {
      id: 2,
      name: { en: "AC Normal Service", hi: "AC सामान्य सेवा" },
      price: 649,
      img: "https://img.clevup.in/298336/1707333809053_SKU-0005_2.jpg?width=600&format=webp",
    },
    {
      id: 3,
      name: { en: "AC Gas", hi: "AC गैस" },
      price: 2699,
      img: "https://images.jdmagicbox.com/quickquotes/images_main/whirlpool_magicool_copr_5s_1_5_ton_window_ac_white_15608232_0.jpg",
    },
    {
      id: 4,
      name: { en: "Window AC Installation", hi: "विंडो AC इंस्टॉलेशन" },
      price: 779,
      img: "https://images.jdmagicbox.com/quickquotes/images_main/whirlpool_magicool_copr_5s_1_5_ton_window_ac_white_15608232_0.jpg",
    },
    {
      id: 5,
      name: { en: "Window AC Normal Service", hi: "विंडो AC सामान्य सेवा" },
      price: 519,
      img: "https://5.imimg.com/data5/TN/BJ/QS/SELLER-80759023/daikin-window-ac-gas-charging-500x500.jpg",
    },
    {
      id: 6,
      name: { en: "Window AC Gas", hi: "विंडो AC गैस" },
      price: 2699,
      img: "https://media.licdn.com/dms/image/C5112AQGVpdMgL-DCjQ/article-cover_image-shrink_720_1280/0/1582289947639?e=2147483647&v=beta&t=zN0hQlv82vy02qf-Ha11jwzAHrmgXcvUrfcres3cpEA",
    },
    {
      id: 7,
      name: { en: "Home TV Setup", hi: "होम टीवी सेटअप" },
      price: 389,
      img: "https://5.imimg.com/data5/SELLER/Default/2022/5/RY/FN/SA/74009735/double-tap-drinking-water-cooler-50-ltr-500x500.jpg",
    },
    {
      id: 8,
      name: { en: "Water Cooler Installation", hi: "वॉटर कूलर इंस्टॉलेशन" },
      price: 499,
      img: "https://5.imimg.com/data5/SELLER/Default/2022/5/RY/FN/SA/74009735/double-tap-drinking-water-cooler-50-ltr-500x500.jpg",
    },
    {
      id: 9,
      name: { en: "Water Cooler Gas", hi: "वॉटर कूलर गैस" },
      price: 2299,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGravMpHeJh1eEYfH2XxrQbwpFaPe0pl-Cxw&s",
    },
    {
      id: 10,
      name: { en: "Water Purifier Installation", hi: "वाटर प्यूरिफायर इंस्टॉलेशन" },
      price: 549,
      img: "https://www.moxikart.com/assets/images/fairdealbattery/battery/271_Luminous%20ECO%20WATT+%20850%20Square%20Wave%20Inverter%20&%20EXIDE%20INSTABRITE%20IB1350%20135AH%20Flate%20Plate%20Battery.jpg",
    },
    {
      id: 11,
      name: { en: "Inverter Installation", hi: "इन्वर्टर इंस्टॉलेशन" },
      price: 599,
      img: "https://5.imimg.com/data5/SELLER/Default/2023/6/317912699/DX/AM/CI/10636468/inverter-pcb-repairing.jpg",
    },
    {
      id: 12,
      name: { en: "Inverter Repair", hi: "इन्वर्टर मरम्मत" },
      price: 349,
      img: "https://havells.com/media/catalog/product/cache/844a913d283fe95e56e39582c5f2767b/f/r/frost_free_refrigerator_280_l_metallic_black_1_.jpg",
    },
    {
      id: 13,
      name: { en: "Fridge Repair", hi: "फ्रिज मरम्मत" },
      price: 509,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvyspbasAHDIsyOBChqsh5YYtEKRKYNpXT_A&s",
    },
    {
      id: 14,
      name: { en: "Fridge Gas", hi: "फ्रिज गैस" },
      price: 1799,
      img: "https://mccoyindia.in/wp-content/uploads/2020/04/Untitled-1-3.jpg",
    },
    {
      id: 15,
      name: { en: "Cooler Repair", hi: "कूलर मरम्मत" },
      price: 349,
      img: "https://cpimg.tistatic.com/1592274/b/1/mini-atta-chakki-cabinets.jpg",
    },
    {
      id: 16,
      name: { en: "Atta Chakki Service", hi: "आटा चक्की सेवा" },
      price: 519,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00COrfsDNFiDVybLAil5ZLg-GVGEC889Eww&s",
    },
    {
      id: 17,
      name: { en: "Washing Machine Repair", hi: "वाशिंग मशीन मरम्मत" },
      price: 419,
      img: "https://m.media-amazon.com/images/I/61b1WCL-7lL.jpg",
    },
    {
      id: 18,
      name: { en: "CCTV Camera Installation (per piece)", hi: "CCTV कैमरा इंस्टॉलेशन (प्रति टुकड़ा)" },
      price: 419,
      img: "https://static.wixstatic.com/media/4af009_50b99ed648a4405980138b37e56d3abb~mv2.jpg/v1/fill/w_980,h_569,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4af009_50b99ed648a4405980138b37e56d3abb~mv2.jpg",
    },
    {
      id: 30,
      name: { en: "Visiting Charge", hi: "विजिटिंग चार्ज" },
      price: 99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00COrfsDNFiDVybLAil5ZLg-GVGEC889Eww&s",
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
        {isHindi ? "इलेक्ट्रिकल अप्लायंसेज सेवाएँ" : "Electrical Appliances Services"}
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

export default ElectricalAppliencesServices;
