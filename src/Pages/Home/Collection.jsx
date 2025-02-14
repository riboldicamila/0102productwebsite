import React, { useState } from "react";

import "./CollectionPage.css";
import GenericButton from "../../Components/Button";

import react from "../../Components/Images/react.jpg";
import html from "../../Components/Images/html.jpg";
import javascript from "../../Components/Images/js.png";
import css from "../../Components/Images/css.png";
import python from "../../Components/Images/python.jpg";
import sql from "../../Components/Images/sql.png";
import git from "../../Components/Images/git.png";
import aws from "../../Components/Images/aws.png";
import oop from "../../Components/Images/oop.jpg";
import jira from "../../Components/Images/jira.png";
import cicd from "../../Components/Images/cdci.png";
import scrum from "../../Components/Images/scrum.png";

const CollectionPage = () => {
  const [viewMode, setViewMode] = useState("grid");

  const products = [
    { id: 1, name: "React Js", rating: 5, image: react },
    { id: 2, name: "HTML", rating: 5, image: html },
    { id: 3, name: "JavaScript", rating: 5, image: javascript },
    { id: 4, name: "CSS", rating: 4, image: css },
    { id: 5, name: "Python", rating: 4, image: python },
    { id: 6, name: "SQL", rating: 4, image: sql },
    { id: 7, name: "Git", rating: 5, image: git },
    { id: 8, name: "AWS Certification", rating: 5, image: aws },
    { id: 10, name: "Object Oriented Programming", rating: 5, image: oop },
    { id: 11, name: "Scrum", rating: 4, image: scrum },
    { id: 13, name: "JIRA", rating: 4, image: jira },
    { id: 14, name: "CI/CD", rating: 3, image: cicd },
  ];

  return (
    <div className="collection-container">
      <h1 className="collection-title">Our Bakery Delights</h1>
      <p className="collection-description">
        Discover the delicious treats freshly baked just for you!
      </p>
      <div className="banner">
        <div className="banner-content">
          <span className="new-arrival">FRESHLY BAKED</span>
          <h2 className="banner-title">Our Specialties</h2>
          <GenericButton text="Order Now" to="/shop" />
        </div>
      </div>

      <div className="collection-controls">
        <div className="view-controls">
          <button
            className={`view-btn ${viewMode === "grid-large" ? "active" : ""}`}
            onClick={() => setViewMode("grid-large")}
          >
            ⊞
          </button>
          <button
            className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
            onClick={() => setViewMode("grid")}
          >
            ⊟
          </button>
          <button
            className={`view-btn ${viewMode === "list" ? "active" : ""}`}
            onClick={() => setViewMode("list")}
          >
            ≡
          </button>
        </div>
      </div>

      <div className={`products-grid ${viewMode}`}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
