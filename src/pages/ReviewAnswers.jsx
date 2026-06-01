import { useQuiz } from "../context/QuizContext";
import "../styles/review.css";

function ReviewAnswers() {
  const { reviewQuestions } = useQuiz();

  if (
    !reviewQuestions ||
    reviewQuestions.length === 0
  ) {
    return (
      <div className="review-page">
        <h2>No Review Data Found</h2>
      </div>
    );
  }

  return (
    <div className="review-page">

      <h1>Review Answers</h1>

      {reviewQuestions.map(
        (question, index) => (
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
              {question.selectedAnswer}
            </p>

            <p className="correct-answer">
              <strong>
                Correct Answer:
              </strong>{" "}
              {question.answer}
            </p>

            <p
              className={
                question.isCorrect
                  ? "correct"
                  : "wrong"
              }
            >
              {question.isCorrect
                ? "Correct"
                : "Wrong"}
            </p>

            <p>
              <strong>
                Topic:
              </strong>{" "}
              {question.topic}
            </p>

            <p>
              <strong>
                Difficulty:
              </strong>{" "}
              {question.difficulty}
            </p>

            <div className="explanation-box">
              <h4>Explanation</h4>

              <p>
                {question.explanation}
              </p>
            </div>

          </div>
        )
      )}

    </div>
  );
}

export default ReviewAnswers;