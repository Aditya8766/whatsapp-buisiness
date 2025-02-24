import React, { useState } from "react";
import './header.scss'
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToContact = () => {
    setMenuOpen(false);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      {/* Left Icon */}
      <div className="logo">🏠</div>

      {/* Center Navigation Links */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <a href="#contact" onClick={scrollToContact}>Contact Us</a>
        </li>
      </ul>

      {/* Right Side Buttons */}
      <div className="auth-buttons">
        <Link to="/login">
          <button style={{ margin: "10px", padding: "10px 20px" }}>Login</button>
        </Link>
        <Link to="/signup">
          <button style={{ margin: "10px", padding: "10px 20px" }}>Sign Up</button>
        </Link>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>
    </nav>
  );
};

export default Header;
