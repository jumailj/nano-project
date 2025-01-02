// AlphabetCardContainer.js
import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import AlphabetCard from "./AlphabetCard";
import "./AlphabetCardContainer.css";

const AlphabetCardContainer = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // All alphabets
  const imageSrcs = alphabet
    .split("")
    .map((letter) => `/img/alphabet/${letter.toUpperCase()}.png`); // Assuming the images are named 'a.jpg', 'b.jpg', etc.

  return (
    <div>
      {alphabet.split("").map((letter, index) => (
        <AlphabetCard
          key={letter}
          letter={letter}
          imageSrc={imageSrcs[index]}
        />
      ))}
    </div>
  );
};

export default AlphabetCardContainer;
