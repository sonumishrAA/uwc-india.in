import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is UWC India? 🏗️",
      answer:
        "UWC India connects construction workers with contractors and helps make the labor market transparent and accessible. We provide door-to-door services to make the hiring process easier.",
    },
    {
      question: "How can I hire a worker? 💼",
      answer:
        "You can hire workers by visiting our platform, browsing through available workers, and selecting the one that fits your needs. We provide detailed information about each worker's expertise.",
    },
    {
      question: "Are the workers skilled? 👷‍♂️",
      answer:
        "Yes, all our workers are skilled and experienced in their respective fields such as masons, electricians, plumbers, and painters.",
    },
    {
      question: "How do I contact UWC India? 📞",
      answer:
        "You can contact us via our website or by calling our customer service number at +91 958-059-9181.",
    },
    {
      question: "What areas do you serve? 🌍",
      answer:
        "Currently, we serve the Pratapgarh and Allahabad districts in Uttar Pradesh, with plans for expansion to other regions.",
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-heading">Frequently Asked Questions (FAQ) ❓</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              <h3>{faq.question}</h3>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
