import React, { useState } from "react";
import GenericButton from "../../Components/Button";
import qa01 from "../../Components/Images/qa01.jpg";
import "./Questions.css"; 

const Questions = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqData = [
    {
      question: "What types of baked goods do you offer?",
      answer:
        "At Pampa Bakery, we offer a variety of freshly baked goods, including artisan breads, pastries, cakes, and cookies. We also have seasonal specialties and gluten-free options!",
    },
    {
      question: "Do you make custom cakes?",
      answer:
        "Yes! We specialize in custom cakes for birthdays, weddings, and other special occasions. Contact us to design your perfect cake.",
    },
    {
      question: "Where do you source your ingredients?",
      answer:
        "We believe in quality and freshness. Our ingredients are locally sourced whenever possible, supporting community farmers and ensuring the finest taste.",
    },
  ];

  const logos = [ 
    "Fresh Ingredients",
    "Artisan Bread",
    "Custom Cakes",
    "Gluten-Free Options",
    "Pastries",
    "Cookies",
  ];

  return (
    <div className="question-container">
      <div className="content-wrapper">
        <div className="image-section">
          <img src={qa01} alt="Pampa Bakery" className="main-image" />
        </div>

        <div className="content-section">
          <h2 className="faq-title">Q&A</h2>
          <p className="faq-subtitle">
            Your questions about our freshly baked goods, answered!
          </p>

          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() =>
                  setActiveQuestion(activeQuestion === index ? null : index)
                }
              >
                {faq.question}
                <span className="dropdown-icon">
                  {activeQuestion === index ? "▲" : "▼"}
                </span>
              </div>
              {activeQuestion === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}

          <GenericButton
            text="Order Online"
            to="/order"
          />
        </div>
      </div>

      <div className="logo-section">
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
