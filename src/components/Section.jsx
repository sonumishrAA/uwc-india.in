import React, { useState } from "react";
import "./Section.css";

function Section() {
  const [language, setLanguage] = useState("en"); // Default language: English

  // Content for both languages
  const content = {
    en: {
      title: "UNITY WORKERS & CONSTRUCTIONS",
      description:
        "Unity Workers and Construction (UWC India) connects skilled workers like plumbers, electricians, masons, and laborers with clients, offering door-to-door services. Based in Pratapgarh, Uttar Pradesh, UWC ensures job opportunities, simplifies hiring, and promotes transparency in India’s construction labor market.",
      buttonText: "Visit Our All Services",
      services: [
        {
          title: "Plumbing Services",
          description: "Skilled plumbers for residential and commercial needs",
        },
        {
          title: "Electrical Work",
          description:
            "Electricians for installations, repairs, and maintenance.",
        },
        {
          title: "Masonry Services",
          description: "Professional masons for construction projects.",
        },
        {
          title: "Painting Services",
          description: "High-quality interior and exterior painting.",
        },
        {
          title: "Labor Supply",
          description: "Reliable helpers and laborers for various tasks.",
        },
        {
          title: "Contracting Services",
          description: "Comprehensive construction and renovation contracts.",
        },
      ],
    },
    hi: {
      title: "यूनिटी वर्कर्स और कंस्ट्रक्शंस",
      description:
        "यूनिटी वर्कर्स और कंस्ट्रक्शंस (UWC इंडिया) कुशल श्रमिकों जैसे प्लंबर, इलेक्ट्रीशियन, राजगीर और मजदूरों को ग्राहकों के साथ जोड़ता है और डोर-टू-डोर सेवाएं प्रदान करता है। प्रतापगढ़, उत्तर प्रदेश में आधारित, UWC रोजगार के अवसर सुनिश्चित करता है, भर्ती को सरल बनाता है, और भारत के निर्माण श्रम बाजार में पारदर्शिता को बढ़ावा देता है।",
      buttonText: "हमारी सभी सेवाओं को देखें",
      services: [
        {
          title: "प्लंबिंग सेवाएं",
          description: "घरेलू और व्यावसायिक आवश्यकताओं के लिए कुशल प्लंबर।",
        },
        {
          title: "इलेक्ट्रिकल कार्य",
          description: "स्थापना, मरम्मत और रखरखाव के लिए इलेक्ट्रीशियन।",
        },
        {
          title: "राजगीरी सेवाएं",
          description: "निर्माण परियोजनाओं के लिए पेशेवर राजगीर।",
        },
        {
          title: "पेंटिंग सेवाएं",
          description: "उच्च गुणवत्ता वाली आंतरिक और बाहरी पेंटिंग।",
        },
        {
          title: "मजदूर आपूर्ति",
          description: "विभिन्न कार्यों के लिए विश्वसनीय सहायक और मजदूर।",
        },
        {
          title: "ठेकेदार सेवाएं",
          description: "निर्माण और नवीनीकरण के लिए संपूर्ण ठेके।",
        },
      ],
    },
  };

  // Toggle Language
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"));
  };

  const { title, description, buttonText, services } = content[language];

  return (
    <>
      <section>
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="mb-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            {language === "en" ? "हिंदी में देखें" : "View in English"}
          </button>

          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
              <h2 className="text-3xl font-bold text-red-500 sm:text-4xl bebas-neue-regular-s">
                {title}
              </h2>
              <p className="mt-4 text-gray-600">{description}</p>
              <a
                href="/services"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                {buttonText}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {services.map((service, index) => (
                <a
                  key={index}
                  className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="/contnvisit"
                >
                  <span className="inline-block rounded-lg bg-gray-50 p-3">
                    <img
                      src={`https://i.ibb.co/gvWCc4j/blacklogo.png`}
                      alt=""
                      className="object-cover w-full rounded-md"
                    />
                  </span>
                  <h2 className="mt-2 font-bold">{service.title}</h2>
                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    {service.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
