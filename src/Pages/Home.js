import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { FiArrowRight } from "react-icons/fi";
import Work from "../Components/Work";
import Testimonial from "../Components/Testimonial";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const handleContactUs = () => {
    navigate("/contact");
  };
  return (
    <div>
      <div className="home-container">
        <Navbar />
        <div className="home-banner-container">
          <div className="home-text-section">
            <h5
              className="primary-heading"
              style={{ fontSize: "40px", color: "#e3dfdf" }}
            >
              Your Ultimate Destination for Entertainment and Leisure{" "}
            </h5>
            <p className="primary-text">
              Skyline Mall in Birgunj is the epitome of style and convenience.
              Featuring a mix of global brands and local boutiques, it's a
              shopper's paradise. With chic cafes, entertainment options, and a
              vibrant nightlife scene, it's where the community comes together
              to shop, dine, and have fun.
            </p>
            <button className="secondary-button" onClick={handleContactUs}>
              Contact Us <FiArrowRight />{" "}
            </button>
          </div>
          {/* <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div> */}
        </div>
      </div>
      {/* <About /> */}
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
