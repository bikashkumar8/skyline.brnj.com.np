import React from "react";
import Logo from "../Assets/logo.png";
import Link from "@mui/material/Link";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

const Footer = () => {
  const contactUs = [
    {
      text: "Shiromani Tole, Birgunj Nepal",
      icon: <LocationOnIcon fontSize="small" />,
    },
    {
      text: "+9779809000000",
      icon: <PhoneEnabledIcon fontSize="small" />,
    },
  ];
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-section-one">
          <div className="footer-logo-container">
            <img src={Logo} alt="" />
          </div>
          <div style={{ width: "260px", paddingTop: "5px" }}>
            Skyline Mall in Birgunj is the epitome of style and convenience.
            Featuring a mix of global brands and local boutiques, it's a
            shopper's paradise. With chic cafes, entertainment options, and a
            vibrant nightlife scene, it's where the community comes together to
            shop, dine, and have fun.
          </div>
        </div>
        <div className="footer-section-two">
          <div className="footer-icons">
            <h3
              style={{
                paddingBottom: "15px",
                textAlign: "start",
                color: "#003566",
              }}
            >
              Follow us
            </h3>
            <Link
              href="https://www.facebook.com/profile.php?id=61550543122499"
              target="_blank"
            >
              <FaFacebookF
                onMouseOver={({ target }) => (target.style.color = "#fe9e0d")}
                onMouseOut={({ target }) => (target.style.color = "black")}
              />
            </Link>

            <Link
              href="https://www.instagram.com/skyline.brnj_qfx/"
              target="_blank"
            >
              <FaInstagram
                onMouseOver={({ target }) => (target.style.color = "#fe9e0d")}
                onMouseOut={({ target }) => (target.style.color = "black")}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/skyline-infra-pvt-ltd/about/"
              target="_blank"
            >
              <SiLinkedin
                onMouseOver={({ target }) => (target.style.color = "#fe9e0d")}
                onMouseOut={({ target }) => (target.style.color = "black")}
              />
            </Link>
            <Link
              href="https://youtu.be/mhFRdbUbsUE?si=YJNCpPZYXhnHAavf"
              target="_blank"
            >
              <BsYoutube
                onMouseOver={({ target }) => (target.style.color = "#fe9e0d")}
                onMouseOut={({ target }) => (target.style.color = "black")}
              />
            </Link>
          </div>
        </div>
        <div className="footer-section-three">
          <h3
            style={{
              paddingBottom: "10px",
              textAlign: "start",
              color: "#003566",
            }}
          >
            Contact Us
          </h3>
          <div className="phone-email-topbar">
            <span className="contact-us-style">{contactUs[0].icon}</span>
            <span className="contact-us-style">{contactUs[0].text}</span>
          </div>
          <div
            className="phone-email-topbar"
            style={{ paddingBottom: "20px", paddingTop: "10px" }}
          >
            <span className="contact-us-style">{contactUs[1].icon}</span>
            <span className="contact-us-style">{contactUs[1].text}</span>
          </div>
          <div style={{}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.6650265956314!2d84.86988867556052!3d27.00914415593968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39935507b7d5a1db%3A0xf9721de444d7fc3!2sAmit!5e0!3m2!1sen!2sin!4v1709219903202!5m2!1sen!2sin"
              width="300"
              height="200"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "-110px",
          marginRight: "-110px",
          paddingLeft: "150px",
          paddingRight: "150px",
          backgroundColor: "#fe9e0d",
        }}
      >
        <div> Skyline © 2024. All Rights Reserved.</div>
        <div>
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/dajulal"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Bikash Kumar
          </a>
          {/* <a href="#" target="_blank" style={{ textDecoration: "none" }}>
            A. Sahoo
          </a> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
