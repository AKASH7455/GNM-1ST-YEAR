import {
  FaClipboardList,
  FaCircleCheck,
  FaCircleXmark,
  FaBullseye,
  FaChartLine
} from "react-icons/fa6";

import { useQuiz } from "../context/QuizContext";

import "../styles/progress.css";

function Progress() {
  const { result } = useQuiz();

  if (!result) {
    return (
      <div className="progress-page">
        <div className="progress-empty">
          <h2>
            No Quiz Data Found
          </h2>

          <p>
            Complete a quiz to
            view progress.
          </p>
        </div>
      </div>
    );
  }

  const {
    score,
    totalQuestions,
    correctAnswers,
    wrongAnswers
  } = result;

  const accuracy =
    totalQuestions > 0
      ? (
          (correctAnswers /
            totalQuestions) *
          100
        ).toFixed(1)
      : 0;

  return (
    <div className="progress-page">

      <h1 className="progress-title">
        <FaChartLine />
        Your Progress
      </h1>

      <div className="progress-grid">

        <div className="progress-card">
          <FaClipboardList />
          <h3>
            {totalQuestions}
          </h3>
          <p>Total Questions</p>
        </div>

        <div className="progress-card">
          <FaCircleCheck />
          <h3>
            {correctAnswers}
          </h3>
          <p>Correct Answers</p>
        </div>

        <div className="progress-card">
          <FaCircleXmark />
          <h3>
            {wrongAnswers}
          </h3>
          <p>Wrong Answers</p>
        </div>

        <div className="progress-card">
          <FaBullseye />
          <h3>
            {accuracy}%
          </h3>
          <p>Accuracy</p>
        </div>

      </div>

    </div>
  );
}

export default Progress;