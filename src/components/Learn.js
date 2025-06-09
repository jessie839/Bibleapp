import React, { useState } from "react";
import characters from "./data/Characters"

export default function Flashcards() {
  const [index, setIndex] = useState(0);

  function nextCard() {
    setIndex((prev) => (prev + 1) % characters.length);
  }

  return (
    <div className="learn-page">
      <h2>{characters[index].name}</h2>
      <p>{characters[index].description}</p>
      <button className="next-btn"onClick={nextCard}>Next ➡️</button>
    </div>
  );
}
