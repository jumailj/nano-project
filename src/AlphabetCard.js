// AlphabetCard.js
import React from "react";
import "./AlphabetCard.css";

const AlphabetCard = ({ letter, imageSrc }) => {
  return (
    <button className="alphabet-card">
      <img src={imageSrc} alt={letter} className="card-image" />
      {/* <div className="card-letter">{letter}</div> */}
    </button>
  );
};

export default AlphabetCard;
