import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <div
        className="primary-heading"
        style={{ color: "#535050", fontSize: "50px", paddingBottom: "1px" }}
      >
        Have Question In Mind?
      </div>
      <div
        className="primary-heading"
        style={{ color: "#535050", fontSize: "50px", paddingBottom: "1px" }}
      >
        Let Us Help You!
      </div>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
