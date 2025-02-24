import React from "react";
import "./contact-us.scss";

const ContactUs = () => {
  return (
    <footer className="footer">
      <div className="contact-us" id="contact">
        <p>support@yourapp.com</p>
            <p className="footer-text">© {new Date().getFullYear()} YourApp. All rights reserved.</p>
        <p>123 Business St, City, Country</p>
      </div>
    </footer>
  );
};

export default ContactUs;
