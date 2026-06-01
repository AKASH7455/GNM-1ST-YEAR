// Timer component
import "../styles/quiz.css";

function Timer({ timeLeft }) {
  const safe = Math.max(0, Number(timeLeft) || 0);
  const minutes = Math.floor(safe / 60);

  const seconds = safe % 60;

  return (
    <div className="quiz-timer">
      ⏱ {String(minutes).padStart(2, "0")}:
      {String(seconds).padStart(2, "0")}
    </div>
  );
}

export default Timer;