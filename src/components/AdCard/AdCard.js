import React from "react";
import "./AdCard.css";

function AdCard() {
  return (
    <div className="AdCard">
      <img
        src="https://media-exp1.licdn.com/dms/image/C560BAQGAaKUlU_c3Pw/company-logo_200_200/0/1607090848566?e=1626912000&v=beta&t=giMu7ZNLz8Ny-SJQyVrbBxAhKYZ2C96Sjyl4ubwMue4"
        alt="Brand"
      />
      <div className="AdCard__secondColumn">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://neog.camp/"
          className="Heading"
        >
          Learn Web Dev At NeogCamp
        </a>
        <span>Beginner to full stack in 6 months</span>
        <span className="ad">AD</span>
      </div>
    </div>
  );
}

export default AdCard;
