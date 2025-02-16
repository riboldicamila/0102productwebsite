import contact01 from "../../Components/Images/contact01.jpg";
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"; 

import './Contact.css';


const Contact = () => {
  const socialLinks = [
    { name: "Instagram", icon: <FaInstagram size={24} />, link: "https://www.instagram.com/pampa_bakery" },
    { name: "Facebook", icon: <FaFacebook size={24} />, link: "https://www.facebook.com/pampa_bakery" }
  ];
  
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      
      <div className="contact-content">
        <div className="contact-image">
          <img 
            src={contact01}
            alt="bakery" 
            className="main-image"
          />
        </div>
        
        <div className="contact-info">
          <h2 className="get-in-touch">Get in Touch</h2>
          <p className="subtitle">We would love to hear from you! Whether it is about our products, custom orders, or just to say hi, feel free to reach out!</p>
          
          <div className="info-grid">
            <div className="info-item">
              <h3>Visit Us</h3>
              <p><FaMapMarkerAlt className="icon" /> <span>1234 Baker Street</span></p>
              <p>San Francisco, CA 94109, USA</p>
            </div>
            
            <div className="info-item">
              <h3>Phone Number</h3>
              <p><FaPhoneAlt className="icon" /> <span>+1 (555) 123-4567</span></p>
            </div>
            
            <div className="info-item">
              <h3>Opening Hours</h3>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          
          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              {socialLinks.map((social) => (
                <a href={social.link} key={social.name} className="social-icon" target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
