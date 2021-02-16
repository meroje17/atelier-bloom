import React from "react";
import "./Navbar.style.css";
import flower from "../../assets/flower.svg";
import glass from "../../assets/glass.svg";
import pottery from "../../assets/pottery.svg";
import rose from "../../assets/rose.svg";
import terrarium from "../../assets/terrarium.svg";

const Navbar = () => {
  const summaryTitle = [
    "Fleurs séchées",
    "Terrarium",
    "Roses éternelles",
    "Résines",
    "Compositions cactées",
  ];

  const summaryImg = [flower, terrarium, rose, glass, pottery];

  const summaryTags = ["#flower", "#terrarium", "#rose", "#resine", "#pottery"];

  const modules = () => {
    let modulesArray = [];
    for (let index = 0; index < 5; index++) {
      modulesArray.push(
        <a className="navbar-module" href={summaryTags[index]}>
          <img
            className="navbar-image"
            src={summaryImg[index]}
            alt="navbar-img"
          />
          <p className="navbar-title">{summaryTitle[index]}</p>
        </a>
      );
    }
    return modulesArray;
  };

  return (
    <div className="navbar">
      <div className="navbar-summary">{modules()}</div>
    </div>
  );
};

export default Navbar;
