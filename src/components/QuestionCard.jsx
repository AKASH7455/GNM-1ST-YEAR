function QuestionCard({
  question,
  currentQuestion,
  totalQuestions
}) {
  return (
    <div className="question-card">

      <div className="question-header">

        <span className="question-count">
          Question {currentQuestion}
        </span>

        <span className="question-total">
          {totalQuestions} Total
        </span>

      </div>

      <h2 className="question-title">
        {question.question}
      </h2>

    </div>
  );
}

export default QuestionCard;