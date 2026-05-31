import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useQuiz } from "../context/QuizContext";

import quizData from "../data";
import calculateScore from "../utils/calculateScore";
import "../styles/quiz.css";


function Quiz() {
  const { subjectId, setId } = useParams();

  const navigate = useNavigate();

  const {
    answers,
    setAnswers,
    currentQuestion,
    setCurrentQuestion,
    setResult,
    setReviewQuestions
  } = useQuiz();

  const [selectedOption, setSelectedOption] =
    useState("");

  const questions =
    quizData?.[subjectId]?.sets?.[setId] || [];

  const question =
    questions[currentQuestion];

 useEffect(() => {
  if (question) {
    setSelectedOption("");
  }
}, [currentQuestion]);

  const handleOptionSelect = (
    option
  ) => {
    setSelectedOption(option);

    setAnswers((prev) => ({
      ...prev,
      [question.id]: option
    }));
  };

  const handleNext = () => {
    if (
      currentQuestion <
      questions.length - 1
    ) {
      setCurrentQuestion(
        currentQuestion + 1
      );

      return;
    }

    const finalResult =
      calculateScore(
        questions,
        answers
      );

    setResult(finalResult);

    setReviewQuestions(
      questions
    );

    navigate("/result");
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(
        currentQuestion - 1
      );
    }
  };

  if (!questions.length) {
    return (
      <div className="quiz-empty">
        No Questions Found
      </div>
    );
  }

  if (!question) {
    return (
      <div className="quiz-empty">
        Question Not Found
      </div>
    );
  }

  return (
    <div className="quiz-page">

      <div className="quiz-header">
        <h2>GNM Quiz</h2>

        <span>
          {currentQuestion + 1} /{" "}
          {questions.length}
        </span>
      </div>

      <div className="progress-wrapper">
        <div
          className="progress-fill"
          style={{
            width: `${
              ((currentQuestion + 1) /
                questions.length) *
              100
            }%`
          }}
        />
      </div>

      <div className="question-card">

        <h3 className="question-number">
          Question {currentQuestion + 1}
        </h3>

        <h2 className="question-text">
          {question.question}
        </h2>

        <div className="options-container">

          {question.options.map(
            (option, index) => (
              <button
                key={index}
                className={`option-btn ${
                  selectedOption === option
                    ? "active-option"
                    : ""
                }`}
                onClick={() =>
                  handleOptionSelect(
                    option
                  )
                }
              >
                {option}
              </button>
            )
          )}

        </div>

        <div className="quiz-actions">

          <button
            className="prev-btn"
            onClick={handlePrevious}
            disabled={
              currentQuestion === 0
            }
          >
            Previous
          </button>

          <button
            className="next-btn"
            onClick={handleNext}
            disabled={!selectedOption}
          >
            {currentQuestion ===
            questions.length - 1
              ? "Finish Quiz"
              : "Next Question"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Quiz;