import React, { useState } from "react";
import "./Cards.css";
import { FaBolt, FaHammer, FaPaintBrush, FaTools, FaCar } from "react-icons/fa";

function Card({
  title,
  description,
  onClick,
  isHindi,
  toggleLanguage,
  src,
  CTA,
}) {
  return (
    <div className="card">
      {/* Language Toggle Button */}
      <button className="language-toggle-btn" onClick={toggleLanguage}>
        {isHindi ? "English" : "हिंदी"}
      </button>

      {/* Image Section */}
      <div className="card-image">
        <img src={src} alt={title} className="card-img" />
      </div>

      {/* Content Section */}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="card-cta" onClick={onClick}>
          {CTA}
        </button>
      </div>
    </div>
  );
}

function Cards() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isHindi, setIsHindi] = useState(false);

  // Function to toggle modal
  const toggleModal = (card) => {
    setSelectedCard(card);
    setIsOpen(true);
  };

  // Close modal function
  const closeModal = () => {
    setIsOpen(false);
    setSelectedCard(null);
  };

  // Toggle Language
  const toggleLanguage = () => {
    setIsHindi(!isHindi);
  };

  return (
    <div className="Cards">
      {/* Card 1: Rapid Services */}
      <Card
        onClick={() =>
          toggleModal({
            title: isHindi ? "तत्काल सेवाएँ" : "Rapid Services",
            options: [
              {
                name: isHindi ? "इलेक्ट्रिकल सेवाएँ" : "Electrical Services",
                icon: <FaBolt />,
                link: "/ElectricalServices",
              },
              {
                name: isHindi
                  ? "इलेक्ट्रिकल उपकरण सेवाएँ"
                  : "Electrical Appliance Services",
                icon: <FaTools />,
                link: "ElectricalAppliencesServices",
              },
              {
                name: isHindi ? "कारपेंटर सेवाएँ" : "Carpenter Services",
                icon: <FaHammer />,
                link: "/CarpenterServices",
              },
              {
                name: isHindi ? "प्लंबिंग सेवाएँ" : "Plumbing Services",
                icon: <FaTools />,
                link: "PlumbingServices",
              },
              {
                name: isHindi ? "सफाई सेवाएँ" : "Cleaning Services",
                icon: <FaPaintBrush />,
                link: "CleaningServices",
              },
              {
                name: isHindi ? "पेंटिंग सेवाएँ" : "Painting Services",
                icon: <FaPaintBrush />,
                link: "PaintingServices",
              },
              {
                name: isHindi ? "ड्राइविंग सेवाएँ" : "Driving Services",
                icon: <FaCar />,
                link: "DrivingServices",
              },
            ],
          })
        }
        title={isHindi ? "तत्काल सेवाएँ" : "Rapid Services"}
        description={
          isHindi
            ? "घर और ऑफिस के लिए त्वरित और विश्वसनीय सेवाएँ।"
            : "Quick and reliable services for home and office."
        }
        CTA={isHindi ? "अभी बुक करें" : "Book Now"}
        src="https://i.ibb.co/gvWCc4j/blacklogo.png"
        isHindi={isHindi}
        toggleLanguage={toggleLanguage}
      />

      {/* Card 2: Labour Services */}
      <Card
        onClick={() =>
          toggleModal({
            title: isHindi ? "श्रम सेवाएँ" : "Labour Services",
            options: [
              {
                name: isHindi ? "मेसन और श्रमिक" : "Mason and Labour",
                icon: <FaHammer />,
                link: "HireWorkerML",
              },
              {
                name: isHindi
                  ? "निर्माण के लिए श्रमिक"
                  : "Labour for Construction",
                icon: <FaTools />,
                link: "/HireWorkerLC",
              },
            ],
          })
        }
        title={isHindi ? "श्रम सेवाएँ" : "Labour Services"}
        description={
          isHindi
            ? "निर्माण और मैन्युअल काम के लिए कुशल श्रमिक।"
            : "Skilled labour for construction and manual work."
        }
        CTA={isHindi ? "अभी किराए पर लें" : "Hire Now"}
        src="https://i.ibb.co/gvWCc4j/blacklogo.png"
        isHindi={isHindi}
        toggleLanguage={toggleLanguage}
      />

      {/* Card 3: Contract Services */}
      <Card
        onClick={() =>
          toggleModal({
            title: isHindi ? "ठेकेदार सेवाएँ" : "Contract Services",
            options: [
              {
                name: isHindi ? "पूर्ण निर्माण" : "Full Construction",
                icon: <FaHammer />,
                link: "/HireServiceFC",
              },
              {
                name: isHindi ? "बुकिंग के लिए श्रमिक" : "Labour for Booking",
                icon: <FaTools />,
                link: "/HireServiceLB",
              },
              {
                name: isHindi
                  ? "टाइल्स और पत्थर सेटअप"
                  : "Tiles and Stone Setup",
                icon: <FaHammer />,
                link: "/HireServiceTS",
              },
              {
                name: isHindi ? "घर की पेंटिंग" : "House Painting",
                icon: <FaPaintBrush />,
                link: "/HireServiceHP",
              },
              {
                name: isHindi ? "घर की वायरिंग" : "House Wiring",
                icon: <FaBolt />,
                link: "/HireServiceHW",
              },
              {
                name: isHindi ? "टैंक और टॉप सेटअप" : "Tank and Top Setup",
                icon: <FaTools />,
                link: "/HireServiceTT",
              },
              {
                name: isHindi
                  ? "अन्य ठेकेदार सेवाएँ"
                  : "Other Contract Services",
                icon: <FaHammer />,
                link: "/HireServiceOC",
              },
            ],
          })
        }
        title={isHindi ? "ठेकेदार सेवाएँ" : "Contract Services"}
        description={
          isHindi
            ? "आपकी सभी निर्माण और नवीनीकरण आवश्यकताओं के लिए व्यापक सेवाएँ।"
            : "Comprehensive services for all your construction and renovation needs."
        }
        CTA={isHindi ? "अभी शुरुआत करें" : "Get Started"}
        src="https://i.ibb.co/gvWCc4j/blacklogo.png"
        isHindi={isHindi}
        toggleLanguage={toggleLanguage}
      />

      {/* Modal Popup */}
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              ✖
            </button>
            <h3 className="modal-title">{selectedCard?.title}</h3>
            <ul className="modal-options">
              {selectedCard?.options.map((option, index) => (
                <li key={index}>
                  <a href={option.link} className="modal-option-btn">
                    <span className="modal-option-icon">{option.icon}</span>
                    {option.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
