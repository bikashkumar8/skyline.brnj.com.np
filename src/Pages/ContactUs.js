import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaHome } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Contact from "../Components/Contact";

const ContactUs = () => {
  const contactUs = [
    {
      title: "ADDRESS",
      icon: <FaHome size={70} color="#fe9e0d" />,
      text: "Shiromani Tole, Birgunj 44300",
    },
    {
      title: "CALL US",
      icon: <FaPhoneSquareAlt size={70} color="#fe9e0d" />,
      text: "+977-051-417200",
    },
    {
      title: "EMAIL US",
      icon: <IoMdMail size={70} color="#fe9e0d" />,
      text: "info@skyline.com.np",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="contact-us-main">
        <div className=""></div>
        <div className="contact-us-two">
          {contactUs.map((item) => (
            <div key={item.title} className="box-contact-us">
              <div style={{ paddingTop: "15px" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {item.icon}
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingLeft: "27px",
                  }}
                >
                  {item.text}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="contact-us-three">
          <div
            style={{
              fontSize: "30px",
              textAlign: "center",
              paddingTop: "100px",
              paddingBottom: "10px",
            }}
          >
            <span style={{ color: "#003566" }}>Find</span>
            <span style={{ color: "#fe9e0d" }}> Our</span>
            <span style={{ color: "#003566" }}> Location</span>
          </div>{" "}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.6650265956314!2d84.86988867556052!3d27.00914415593968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39935507b7d5a1db%3A0xf9721de444d7fc3!2sAmit!5e0!3m2!1sen!2sin!4v1709219903202!5m2!1sen!2sin"
            style={{ width: "100%", height: "300px", border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactUs;
