import React from "react";
import "../styles/promotion.css";
import PopCornOffer from "../Assets/popcorn-offer.png";

const Promotion = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="Box">
          <img src={PopCornOffer} alt="PopCornOffer" />
        </div>
        <div className="details">
          <div style={{ fontWeight: "bold" }}>🍿Popcorn Bucker Offer🍿</div>
          <p>
            <br />
            Enjoy Popcorn Bucket Refill by adding just Rs 50 to current
            regular/cheese popcorn bucket price.
            <br />
            <br />
            So hurry up! Grab your tickets via QFX App or the
            Website.{" "}
          </p>

          <button style={{ margin: "10px" }}>
            <a
              href="https://www.qfxcinemas.com/"
              target="_blank"
              style={{ textDecoration: "none", padding: "10px" }}
            >
              Book Ticket 🎫
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
