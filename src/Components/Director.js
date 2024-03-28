import React from "react";
import Director1 from "../Assets/pratik_bhaiya.jpg";
import Director2 from "../Assets/Aakriti _ma'am.jpg";

const Director = () => {
  const directorInfo = [
    {
      image: Director1,
      title: "Pratik Agarwal",
      message:
        " Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et",
    },
    {
      image: Director2,
      title: "Aakriti Agarwal",
      message:
        " Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non ",
    },
  ];
  return (
    <div>
      <div
        className="primary-heading"
        style={{
          color: "#1e1a1a",
          fontSize: "35px",
          maxWidth: "2000px",
          textAlign: "center",
          marginTop: "90px",
          paddingBottom: "10px",
        }}
      >
        What <span style={{ color: "rgb(0, 53, 102)" }}> Directors </span> Says!
      </div>
      <div className="work-section-bottom">
        {directorInfo.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <div style={{ fontWeight: "bold", color: "#003566" }}>
              {data.title}
            </div>
            <p style={{ fontWeight: 0 }}>{data.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Director;
