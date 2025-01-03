import React, { useState, useEffect, useMemo } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import AlphabetCard from "./AlphabetCard";
import Modal from "./Modal"; // Import a modal component
import "./AlphabetCardContainer.css";

const AlphabetCardContainer = () => {
  const { speak } = useSpeechSynthesis();

  // Memoize the imageMap to avoid re-creating it on every render
  const imageMap = useMemo(
    () => ({
      A: ["aeroplane.jpeg", "ant.jpeg", "apple.png"],
      B: ["ball.jpeg", "bat.jpeg", "boat.jpeg"],
      C: ["cat.jpeg", "car.jpeg", "cup.jpeg"],
    }),
    [],
  ); // Empty dependency array ensures this runs only once

  const [selectedLetter, setSelectedLetter] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Store the selected random image

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Preload all images when the component mounts
  useEffect(() => {
    const preloadImages = () => {
      Object.keys(imageMap).forEach((letter) => {
        imageMap[letter].forEach((imageName) => {
          const img = new Image();
          img.src = `/img/images/${letter}/${imageName}`;
        });
      });
    };
    preloadImages();
  }, [imageMap]);

  const handleCardClick = (letter) => {
    setSelectedLetter(letter);

    // Select a random image for the letter and store it in state
    const images = imageMap[letter];
    if (images) {
      const randomIndex = Math.floor(Math.random() * images.length);
      setSelectedImage(images[randomIndex]);
    }

    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false); // Close the modal
    setSelectedImage(null); // Reset the selected image when the modal is closed
  };

  const handleSpeak = () => {
    if (selectedImage) {
      const imageName = selectedImage.split(".")[0]; // Get the name of the image
      const message = `${selectedLetter.toUpperCase()} for ${imageName.toUpperCase()}`;
      speak({ text: message });
    }
  };

  return (
    <div className="alphabet-card-container">
      {alphabet.split("").map((letter) => (
        <AlphabetCard
          imageSrc={`/img/alphabet/${letter}.png`}
          key={letter}
          letter={letter}
          onClick={() => handleCardClick(letter)}
        />
      ))}

      {isModalOpen && selectedImage && (
        <Modal onClose={closeModal}>
          <div className="modal-content">
            <img
              src={`/img/images/${selectedLetter}/${selectedImage}`} // Image related to the letter
              alt={`Object for ${selectedLetter}`}
              className="modal-image"
            />
            <h2 className="image-title">
              {
                selectedImage
                  .split(".")[0] // Remove the extension by taking only the part before the dot
                  .toUpperCase() // Convert to uppercase
              }
            </h2>
            <button className="speak-button" onClick={handleSpeak}>
              Speak
            </button>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AlphabetCardContainer;
