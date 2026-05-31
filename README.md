import { useState } from "react";
import { useParams } from "react-router-dom";

function Quiz() {
  const { subjectId, setId } = useParams();

  const [selectedOption, setSelectedOption] = useState("");

  const question = {
    id: 1,

    question:
      "Which organ is known as the powerhouse of the cell?",

    options: [
      "Nucleus",
      "Mitochondria",
      "Ribosome",
      "Golgi Body"
    ],

    answer: "Mitochondria",

    explanation:
      "Mitochondria produce ATP which provides energy to the cell.",

    topic: "Cell Biology",

    difficulty: "easy"
  };

  return (
    <div className="quiz-page">

      <div className="quiz-header">

        <h2>
          Quiz
        </h2>

        <p>
          {subjectId} / {setId}
        </p>

      </div>

      <div className="progress-wrapper">
        <div className="progress-bar"></div>
      </div>

      <div className="question-info">

        <span>
          Question 1 / 100
        </span>

        <span className="difficulty-badge">
          {question.difficulty}
        </span>

      </div>

      <div className="question-card">

        <h3>
          {question.question}
        </h3>

      </div>

      <div className="options-container">

        {question.options.map((option) => (
          <button
            key={option}
            className={`option-btn ${
              selectedOption === option
                ? "selected-option"
                : ""
            }`}
            onClick={() =>
              setSelectedOption(option)
            }
          >
            {option}
          </button>
        ))}

      </div>

      <div className="topic-box">
        Topic : {question.topic}
      </div>

      <div className="explanation-box">

        <h4>Explanation</h4>

        <p>
          {question.explanation}
        </p>

      </div>

      <button className="next-btn">
        Next Question
      </button>

    </div>
  );
}

export default Quiz;