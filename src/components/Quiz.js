import React, { useState } from "react";

import quizQuestions from "./data/questions";

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  function handleOption(option) {
    if (option === quizQuestions[index].answer) setScore(score + 1);
    const next = index + 1;
    if (next < quizQuestions.length) {
      setIndex(next);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="quiz-page">
      {showScore ? (
        <h2>Your Score: {score} / {quizQuestions.length}</h2>
      ) : (
        <>
          <h3>{quizQuestions[index].question}</h3>
          {quizQuestions[index].options.map((opt, i) => (
            <button className="option-btn" key={i} onClick={() => handleOption(opt)} >
              {opt}
            </button>
          ))}
        </>
      )}
    </div>
  );
}
