import React from "react";
import KFC from "../Assets/2KFC.jpg";
import PizzaHut from "../Assets/pizza-hut.png";
import QFX from "../Assets/qfx.png";
import Sarvar from "../Assets/sarovar-portico.png";
import GymCenter from "../Assets/gym-centre.avif";
import CreamBell from "../Assets/cream-bell.jpeg";

const Work = () => {
  const workInfoData = [
    {
      image: KFC,
      title: "KFC",
      link: "https://kfc.com.np/",
    },
    {
      image: PizzaHut,
      title: "PIZZA HUT",
      link: "https://www.pizzahut.co.in/",
    },
    {
      image: QFX,
      title: "QFX CINEMAS",
      link: "https://www.qfxcinemas.com/",
    },
    {
      image: Sarvar,
      title: "SARVAR PORTICO",
      link: "https://www.sarovarhotels.com/",
    },
    {
      image: GymCenter,
      title: "GYM CENTER",
      link: "https://www.linkedin.com/in/bikashkumar8/",
      
    },
    {
      image: CreamBell,
      title: "CREAM BELL",
      link: "https://www.creambell.com/",
    },
  ];
  const handleClickLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <div
          className="primary-heading"
          style={{ color: "#1e1a1a", fontSize: "35px" }}
        >
          EXPLORE
        </div>
        <p className="primary-text" style={{ margin: "0" }}>
          <span style={{ color: "#fe9e0d" }}>SKYLINE</span>
          <span style={{ color: "rgb(0, 53, 102)" }}> MALL</span>: Birganj's Fun
          Spot! Enjoy shops, cafes, and nightlife all in one place.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div key={data.title}>
            <div
              className="work-section-info"
              onClick={() => handleClickLink(data.link)}
            >
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
            </div>
            <div style={{ textAlign: "center" }}>{data.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
