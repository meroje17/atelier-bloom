import React from "react";
import "./Home.style.css";
import logo from "../../assets/logo.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-introduction">
        <h1 className="home-title">
          <span className="white">L'Atelier</span> Bloom
        </h1>
        <p className="home-subtitle">Créatrice d'art floral</p>
      </div>
      <div className="home-body">
        <img src={logo} alt="logo" className="home-logo" />
      </div>
    </div>
  );
};

export default Home;
