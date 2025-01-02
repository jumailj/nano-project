import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import ".//App.css";

import AlphabetCardContainer from "./AlphabetCardContainer";
import Header from "./Header";
// import "./AlphabetCardContainer.css";

const App = () => {
  const [selectedLetter, setSelectedLetter] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const { speak } = useSpeechSynthesis();

  const alphabetItems = {
    A: [
      { name: "Apple", image: "https://via.placeholder.com/150?text=Apple" },
      { name: "Ant", image: "https://via.placeholder.com/150?text=Ant" },
      {
        name: "Aeroplane",
        image: "https://via.placeholder.com/150?text=Avocado",
      },
      { name: "Arrow", image: "https://via.placeholder.com/150?text=Avocado" },
      { name: "Angel", image: "https://via.placeholder.com/150?text=Avocado" },
    ],
    B: [
      { name: "Ball", image: "https://via.placeholder.com/150?text=Ball" },
      { name: "Banana", image: "https://via.placeholder.com/150?text=Banana" },
      { name: "Boat", image: "https://via.placeholder.com/150?text=Bee" },
      { name: "Book", image: "https://via.placeholder.com/150?text=Avocado" },
      { name: "Bag", image: "https://via.placeholder.com/150?text=Avocado" },
    ],
    C: [
      { name: "Cat", image: "https://via.placeholder.com/150?text=Cat" },
      { name: "Carrot", image: "https://via.placeholder.com/150?text=Carrot" },
      { name: "Cake", image: "https://via.placeholder.com/150?text=Cake" },
      { name: "Car", image: "https://via.placeholder.com/150?text=Avocado" },
      { name: "Cloud", image: "https://via.placeholder.com/150?text=Avocado" },
    ],
    D: [
      { name: "Dog", image: "https://via.placeholder.com/150?text=Dog" },
      {
        name: "Diamond",
        image: "https://via.placeholder.com/150?text=Dolphin",
      },
      { name: "Duck", image: "https://via.placeholder.com/150?text=Duck" },
      { name: "Drum", image: "https://via.placeholder.com/150?text=Avocado" },
      { name: "Door", image: "https://via.placeholder.com/150?text=Avocado" },
    ],
    E: [
      {
        name: "Elephant",
        image: "https://via.placeholder.com/150?text=Elephant",
      },
      { name: "Eraser", image: "https://via.placeholder.com/150?text=Eagle" },
      { name: "Egg", image: "https://via.placeholder.com/150?text=Eggplant" },
      { name: "Eye", image: "https://via.placeholder.com/150?text=Avocado" },
      { name: "Ear", image: "https://via.placeholder.com/150?text=Avocado" },
    ],
    F: [
      { name: "Fish", image: "https://via.placeholder.com/150?text=Fish" },
      { name: "Frog", image: "https://via.placeholder.com/150?text=Frog" },
      { name: "Flower", image: "https://via.placeholder.com/150?text=Flower" },
      { name: "Fan", image: "https://via.placeholder.com/150?text=Avocado" },
      { name: "Fire", image: "https://via.placeholder.com/150?text=Avocado" },
    ],
    G: [
      {
        name: "Giraffe",
        image: "https://via.placeholder.com/150?text=Giraffe",
      },
      { name: "Grapes", image: "https://via.placeholder.com/150?text=Grapes" },
      { name: "Goat", image: "https://via.placeholder.com/150?text=Goat" },
      { name: "Grass", image: "https://via.placeholder.com/150?text=Avocado" },
      { name: "Glass", image: "https://via.placeholder.com/150?text=Avocado" },
    ],
    H: [
      { name: "Horse", image: "https://via.placeholder.com/150?text=Horse" },
      { name: "Hat", image: "https://via.placeholder.com/150?text=Hat" },
      { name: "House", image: "https://via.placeholder.com/150?text=House" },
      { name: "Heart", image: "https://via.placeholder.com/150?text=Avocado" },
      { name: "Honey", image: "https://via.placeholder.com/150?text=Avocado" },
    ],
    I: [
      {
        name: "Ice Cream",
        image: "https://via.placeholder.com/150?text=Ice+Cream",
      },
      { name: "Ice", image: "https://via.placeholder.com/150?text=Igloo" },
      { name: "Ink", image: "https://via.placeholder.com/150?text=Ink" },
      { name: "Igloo", image: "https://via.placeholder.com/150?text=Avocado" },
      {
        name: "Iceberg",
        image: "https://via.placeholder.com/150?text=Avocado",
      },
    ],
    J: [
      { name: "Juice", image: "https://via.placeholder.com/150?text=Juice" },
      {
        name: "Jellyfish",
        image: "https://via.placeholder.com/150?text=Jellyfish",
      },
      { name: "Jacket", image: "https://via.placeholder.com/150?text=Jacket" },
      { name: "Jam", image: "https://via.placeholder.com/150?text=Avocado" },
      { name: "Jug", image: "https://via.placeholder.com/150?text=Avocado" },
    ],
    K: [
      { name: "Kite", image: "https://via.placeholder.com/150?text=Kite" },
      {
        name: "Kangaroo",
        image: "https://via.placeholder.com/150?text=Kangaroo",
      },
      { name: "Key", image: "https://via.placeholder.com/150?text=Key" },
      { name: "Knife", image: "https://via.placeholder.com/150?text=Avocado" },
      { name: "King", image: "https://via.placeholder.com/150?text=Avocado" },
    ],
    L: [
      { name: "Lion", image: "https://via.placeholder.com/150?text=Lion" },
      { name: "Lemon", image: "https://via.placeholder.com/150?text=Lemon" },
      { name: "Leaf", image: "https://via.placeholder.com/150?text=Lamp" },
      { name: "Ladder", image: "https://via.placeholder.com/150?text=Avocado" },
      { name: "Laptop", image: "https://via.placeholder.com/150?text=Avocado" },
    ],
    M: [
      { name: "Monkey", image: "https://via.placeholder.com/150?text=Monkey" },
      { name: "Mango", image: "https://via.placeholder.com/150?text=Mango" },
      { name: "Moon", image: "https://via.placeholder.com/150?text=Moon" },
      { name: "Mirror", image: "https://via.placeholder.com/150?text=Avocado" },
      { name: "Milk", image: "https://via.placeholder.com/150?text=Avocado" },
    ],
    N: [
      { name: "Nest", image: "https://via.placeholder.com/150?text=Nest" },
      { name: "Nose", image: "https://via.placeholder.com/150?text=Nose" },
      { name: "Nuts", image: "https://via.placeholder.com/150?text=Nut" },
      { name: "Needle", image: "https://via.placeholder.com/150?text=Avocado" },
      { name: "Nose", image: "https://via.placeholder.com/150?text=Avocado" },
    ],
    O: [
      { name: "Orange", image: "https://via.placeholder.com/150?text=Orange" },
      { name: "Owl", image: "https://via.placeholder.com/150?text=Owl" },
      {
        name: "Octopus",
        image: "https://via.placeholder.com/150?text=Octopus",
      },
      { name: "Oil", image: "https://via.placeholder.com/150?text=Avocado" },
      { name: "Onion", image: "https://via.placeholder.com/150?text=Avocado" },
    ],
    P: [
      { name: "Parrot", image: "https://via.placeholder.com/150?text=Parrot" },
      {
        name: "Pineapple",
        image: "https://via.placeholder.com/150?text=Pineapple",
      },
      {
        name: "Peacock",
        image: "https://via.placeholder.com/150?text=Pumpkin",
      },
      { name: "Potato", image: "https://via.placeholder.com/150?text=Pumpkin" },
      { name: "Pencil", image: "https://via.placeholder.com/150?text=Pumpkin" },
    ],
    Q: [
      { name: "Queen", image: "https://via.placeholder.com/150?text=Queen" },
      { name: "Quilt", image: "https://via.placeholder.com/150?text=Quilt" },
      { name: "Queue", image: "https://via.placeholder.com/150?text=Quail" },
      {
        name: "Question",
        image: "https://via.placeholder.com/150?text=Pumpkin",
      },
    ],
    R: [
      { name: "Rabbit", image: "https://via.placeholder.com/150?text=Rabbit" },
      {
        name: "Rainbow",
        image: "https://via.placeholder.com/150?text=Rainbow",
      },
      { name: "Rose", image: "https://via.placeholder.com/150?text=Rose" },
      { name: "Robot", image: "https://via.placeholder.com/150?text=Pumpkin" },
      { name: "Ring", image: "https://via.placeholder.com/150?text=Pumpkin" },
    ],
    S: [
      { name: "Sun", image: "https://via.placeholder.com/150?text=Sun" },
      { name: "Snake", image: "https://via.placeholder.com/150?text=Snake" },
      { name: "Star", image: "https://via.placeholder.com/150?text=Star" },
      { name: "Spoon", image: "https://via.placeholder.com/150?text=Pumpkin" },
      { name: "Shoe", image: "https://via.placeholder.com/150?text=Pumpkin" },
    ],
    T: [
      { name: "Tiger", image: "https://via.placeholder.com/150?text=Tiger" },
      { name: "Tree", image: "https://via.placeholder.com/150?text=Tree" },
      { name: "Train", image: "https://via.placeholder.com/150?text=Train" },
      { name: "Tomato", image: "https://via.placeholder.com/150?text=Pumpkin" },
      { name: "Table", image: "https://via.placeholder.com/150?text=Pumpkin" },
    ],
    U: [
      {
        name: "Umbrella",
        image: "https://via.placeholder.com/150?text=Umbrella",
      },
      {
        name: "Unicorn",
        image: "https://via.placeholder.com/150?text=Unicorn",
      },
      { name: "Uniform", image: "https://via.placeholder.com/150?text=Urn" },
    ],
    V: [
      { name: "Van", image: "https://via.placeholder.com/150?text=Van" },
      { name: "Vase", image: "https://via.placeholder.com/150?text=Vase" },
      { name: "Violin", image: "https://via.placeholder.com/150?text=Violin" },
    ],
    W: [
      { name: "Water", image: "https://via.placeholder.com/150?text=Whale" },
      {
        name: "Watermelon",
        image: "https://via.placeholder.com/150?text=Watermelon",
      },
      { name: "Watch", image: "https://via.placeholder.com/150?text=Wolf" },
      { name: "Window", image: "https://via.placeholder.com/150?text=Pumpkin" },
      { name: "Wheel", image: "https://via.placeholder.com/150?text=Pumpkin" },
    ],
    X: [
      { name: "X-ray", image: "https://via.placeholder.com/150?text=X-ray" },
      { name: "Xerus", image: "https://via.placeholder.com/150?text=Xerus" },
      {
        name: "Xmas Tree",
        image: "https://via.placeholder.com/150?text=Pumpkin",
      },
    ],
    Y: [
      { name: "Yam", image: "https://via.placeholder.com/150?text=Yam" },
      { name: "Yo-Yo", image: "https://via.placeholder.com/150?text=Yo-Yo" },
      {
        name: "Yellow Colour",
        image: "https://via.placeholder.com/150?text=Pumpkin",
      },
      { name: "Yarn", image: "https://via.placeholder.com/150?text=Pumpkin" },
    ],
    Z: [
      { name: "Zebra", image: "https://via.placeholder.com/150?text=Zebra" },
      { name: "Zip", image: "https://via.placeholder.com/150?text=Zip" },
      {
        name: "Zucchini",
        image: "https://via.placeholder.com/150?text=Zucchini",
      },
      {
        name: "Pumpkin",
        image: "https://via.placeholder.com/150?text=Pumpkin",
      },
      {
        name: "Pumpkin",
        image: "https://via.placeholder.com/150?text=Pumpkin",
      },
    ],
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);

    const items = alphabetItems[letter];
    if (items && items.length > 0) {
      const randomItem = items[Math.floor(Math.random() * items.length)];
      setSelectedItem(randomItem);
      speak({ text: `${letter} is for ${randomItem.name} ` });
    } else {
      setSelectedItem(null);
      alert("No items available for this letter!");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px 20px 20px 20px" }}>
      <Header />
      <AlphabetCardContainer />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))",
          gap: "10px",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        {Object.keys(alphabetItems).map((letter) => (
          <button
            key={letter}
            onClick={() => handleLetterClick(letter)}
            style={{
              padding: "15px",
              fontSize: "18px",
              cursor: "pointer",
              border: "1px solid #ccc",
              borderRadius: "5px",
              background: selectedLetter === letter ? "#ffeb3b" : "#fff",
            }}
          >
            {letter}
          </button>
        ))}
      </div>

      {selectedItem && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={selectedItem.image}
            alt={selectedItem.name}
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {selectedLetter} is for {selectedItem.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
