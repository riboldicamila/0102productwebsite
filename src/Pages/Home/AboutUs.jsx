import React from "react";
import SpecialCategory from "../../Components/specialCategory/SpecialCategory";
import GenericButton from "../../Components/GenericButton";

import about01 from "../../Components/Images/about01.jpg";
import "./AboutUs.css";



function AboutUs() {
  return (
    <div>
      <div className="about-me-container">
        <div className="about-us-content">
          <h2>About Pampa</h2>
          <h3>Our Story</h3>
          <p>
            Welcome to <b>Pampa</b>, where tradition meets passion. Our journey began in the heart of a small town, inspired by the vast plains and golden sunsets of the Pampas. We wanted to bring the warmth of home and the taste of nostalgia to every bite.
          </p>
          <p>
            At <b>Pampa</b>, we believe in the magic of simple ingredients. Every loaf is baked with love, using time-honored recipes passed down through generations. Our mission is to create a place where you feel like family, where the aroma of freshly baked bread and pastries invites you to slow down and savor the moment.
          </p>
          <p>
            From classic croissants to artisanal breads, each product is crafted to perfection. We invite you to join us, share a story, and taste the tradition of <b>Pampa</b>.
          </p>
          <GenericButton
            text="Order Now"
            to="/shop"
          />
        </div>
        <div className="image-container">
          <img src={about01} alt="bakery" />
        </div>
      </div>

      <SpecialCategory/>
    </div>
  );
}

export default AboutUs;
