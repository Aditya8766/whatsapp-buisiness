import React from "react";
import './home.scss';

const Home = () => {
  return (
    <>
      <div className="home-page"> 
        <h1>Welcome to Our App</h1>
        <div className="about-text">
            <p style={{textAlign:"center", marginBottom:"2rem"}}>
            Unlock the full potential of WhatsApp for your business! 🚀</p>
            <p style={{textAlign:"center"}}>
            Growing brands need smarter, faster, and more effective ways to engage customers and boost sales. Our platform transforms your WhatsApp number into a powerful revenue-driving channel, helping you connect with customers, send personalized offers, and automate conversations seamlessly.
            </p>
        </div>
      </div>
    </>
  );
};

export default Home;
