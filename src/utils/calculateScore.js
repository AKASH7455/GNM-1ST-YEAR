function calculateScore(
  questions,
  answers
) {
  let correctAnswers = 0;

  questions.forEach((question) => {
    if (
      answers[question.id] ===
      question.answer
    ) {
      correctAnswers++;
    }
  });

  return {
    totalQuestions: questions.length,
    correctAnswers,
    wrongAnswers:
      questions.length -
      correctAnswers,
    percentage: Math.round(
      (correctAnswers /
        questions.length) *
        100
    )
  };
}

export default calculateScore;