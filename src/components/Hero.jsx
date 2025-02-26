import React, { useState, useEffect } from "react";
import { FaBolt, FaTools, FaHammer, FaPaintBrush, FaCar } from "react-icons/fa";
import "./Hero.css";

const images = [
  "https://images.unsplash.com/photo-1650753174235-7dae04cefd0d?q=80&w=2829&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1693864095122-825cad99fd23?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1682724032935-1d51a298c402?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function Modal({ isOpen, onClose, modalContent }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{modalContent.title}</h2>
        <ul>
          {modalContent.options.map((option, index) => (
            <li key={index}>
              {option.icon} <a href={option.link}>{option.name}</a>
            </li>
          ))}
        </ul>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
}

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", options: [] });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleModal = (content) => {
    setModalOpen((prev) => {
      if (prev) {
        return false;
      } else {
        setModalContent(content);
        return true;
      }
    });
  };

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-20 lg:py-32 text-center text-white">
        <h1 className="text-4xl font-extrabold sm:text-6xl">
          Revolutionizing Workforce Management
          <strong className="block mt-2 font-extrabold text-yellow-400">
            Connecting Workers and Opportunities
          </strong>
        </h1>
        <p className="mt-6 sm:text-xl text-gray-100">
          UWC India aims to bridge the gap between skilled workers and
          contractors, offering a transparent, accessible platform to hire
          masons, electricians, plumbers, and more.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <button
            className="block w-full rounded bg-yellow-500 px-12 py-3 text-sm font-medium text-gray-800 shadow hover:bg-yellow-600 focus:outline-none focus:ring active:bg-yellow-400 sm:w-auto transition transform hover:scale-105"
            onClick={() =>
              toggleModal({
                title: "Rapid Services",
                options: [
                  { name: "Electrical Services", icon: <FaBolt />, link: "ElectricalServices" },
                  { name: "Electrical Appliance Services", icon: <FaTools />, link: "ElectricalAppliencesServices" },
                  { name: "Carpenter Services", icon: <FaHammer />, link: "CarpenterServices" },
                  { name: "Plumbing Services", icon: <FaTools />, link: "PlumbingServices" },
                  { name: "Cleaning Services", icon: <FaPaintBrush />, link: "CleaningServices" },
                  { name: "Painting Services", icon: <FaPaintBrush />, link: "PaintingServices" },
                  { name: "Driving Services", icon: <FaCar />, link: "DrivingServices" },
                ],
              })
            }
          >
            Rapid Service
          </button>
          <a
            className="block w-full rounded border border-yellow-500 bg-white px-12 py-3 text-sm font-medium text-black shadow hover:text-yellow-500 focus:outline-none focus:ring active:text-yellow-300 sm:w-auto transition transform hover:scale-105"
            href="/ContractServices"
          >
            Contract Service
          </a>
        </div>
      </div>

      {/* Modal Component */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} modalContent={modalContent} />
    </section>
  );
}

export default Hero;
