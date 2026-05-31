import { Link, Navigate } from "react-router-dom";

import {
  FaTrophy,
  FaCircleCheck,
  FaCircleXmark,
  FaClipboardList,
  FaFileLines,
  FaHouse
} from "react-icons/fa6";

import { useQuiz } from "../context/QuizContext";

import "../styles/result.css";

function Result() {
  const { result } = useQuiz();

  if (!result) {
    return <Navigate to="/" />;
  }

  // Get theme colors from CSS variables
  const getThemeColor = (variable) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  };

  const primaryColor = getThemeColor("--primary-color");
  const gradientEndColor = getThemeColor("--card-gradient-end");

  return (
    <div className="result-page">

      <div className="result-card">

        <div
          className="score-circle"
          style={{
            background: `conic-gradient(
              ${primaryColor} ${result.percentage * 3.6}deg,
              ${gradientEndColor} 0deg
            )`
          }}
        >
          <div className="score-inner">
            <h1>
              {Math.round(
                result.percentage
              )}
              %
            </h1>
          </div>
        </div>

        <h2 className="result-title">
          <FaTrophy />
          Quiz Completed
        </h2>

        <div className="result-stats">

          <div className="stat-box">
            <h3>
              <FaCircleCheck />
              {result.correctAnswers}
            </h3>

            <p>Correct</p>
          </div>

          <div className="stat-box">
            <h3>
              <FaCircleXmark />
              {result.wrongAnswers}
            </h3>

            <p>Wrong</p>
          </div>

          <div className="stat-box">
            <h3>
              <FaClipboardList />
              {result.totalQuestions}
            </h3>

            <p>Total</p>
          </div>

        </div>

        <div className="result-actions">

          <Link
            to="/review"
            className="review-btn"
          >
            <FaFileLines />
            Review Answers
          </Link>

          <Link
            to="/"
            className="home-btn"
          >
            <FaHouse />
            Back Home
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Result;