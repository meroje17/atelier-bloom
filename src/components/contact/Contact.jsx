import React from "react";
import "./Contact.style.css";
import celia from "../../assets/celia.jpg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import phone from "../../assets/phone.svg";
import mail from "../../assets/email.svg";

const Contact = () => {
  return (
    <div className="contact">
      <a className="contact-container" href="tel:0658835026">
        <img className="contact-logo" src={phone} alt="phone" />
        <p className="contact-text">06.58.83.50.26</p>
      </a>
      <a className="contact-container" href="mailto:celiavrignaudpro@gmail.com">
        <img className="contact-logo" src={mail} alt="mail" />
        <p className="contact-text">celiavrignaudpro@gmail.com</p>
      </a>
      <img id="celia-picture" src={celia} alt="celia" />
      <a
        className="contact-container"
        href="http://instagram.com/latelier.bloom"
      >
        <img className="contact-logo" src={instagram} alt="instagram" />
        <p className="contact-text">latelier.bloom</p>
      </a>
      <a
        className="contact-container"
        href="https://www.facebook.com/Latelier-Bloom-100671428376672/"
      >
        <img className="contact-logo" src={facebook} alt="facebook" />
        <p className="contact-text">L'atelier Bloom</p>
      </a>
    </div>
  );
};

export default Contact;
