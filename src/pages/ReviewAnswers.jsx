import { useQuiz } from "../context/QuizContext";
import "../styles/review.css";

function ReviewAnswers() {
  const {
    reviewQuestions,
    answers
  } = useQuiz();

  if (
    !reviewQuestions ||
    reviewQuestions.length === 0
  ) {
    return (
      <div className="review-page">
        <h2>
          No Review Data Found
        </h2>
      </div>
    );
  }

  return (
    <div className="review-page">

      <h1>Review Answers</h1>

      {reviewQuestions.map(
        (question, index) => {
          const userAnswer =
            answers[question.id];

          const isCorrect =
            userAnswer ===
            question.answer;

          return (
            <div
              key={question.id}
              className="review-card"
            >

              <h3>
                Q{index + 1}.{" "}
                {question.question}
              </h3>

              <p>
                <strong>
                  Your Answer:
                </strong>{" "}
                {userAnswer ||
                  "Not Answered"}
              </p>

              <p>
                <strong>
                  Correct Answer:
                </strong>{" "}
                {question.answer}
              </p>

              <p
                className={
                  isCorrect
                    ? "correct"
                    : "wrong"
                }
              >
                {isCorrect
                  ? "Correct"
                  : "Wrong"}
              </p>

            </div>
          );
        }
      )}

    </div>
  );
}

export default ReviewAnswers;