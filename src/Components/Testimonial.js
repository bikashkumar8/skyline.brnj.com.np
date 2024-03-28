import React from "react";
import Promotion from "./Promotion";
import Director from "./Director";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <div
          className="primary-heading"
          style={{ color: "#1e1a1a", fontSize: "35px" }}
        >
          PROMOTIONS <span style={{ fontWeight: "bold" }}> &</span> EVENTS
        </div>
      </div>
      <Promotion />
      <Director />
      {/* <div className="testimonial-section-bottom" style={{ marginTop: "8rem" }}>
        <div
          className="primary-heading"
          style={{ color: "#1e1a1a", fontSize: "35px" }}
        >
          What <span style={{ color: "rgb(0, 53, 102)" }}> Director </span>
          Says!
        </div>
        <img
          src={Director1}
          alt=""
          style={{ height: "120px", borderRadius: "65px" }}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor twurpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="testimonials-stars-container"></div>
        <h2>Pratik Agrawal</h2>
        
      </div> */}
    </div>
  );
};

export default Testimonial;
