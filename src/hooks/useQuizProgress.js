import useLocalStorage from "./useLocalStorage";

function useQuizProgress(
  subjectId,
  setId
) {
  const storageKey =
    `quiz-progress-${subjectId}-${setId}`;

  const [
    progress,
    setProgress
  ] = useLocalStorage(
    storageKey,
    {
      currentQuestion: 0,
      answers: {},
      completed: false
    }
  );

  const saveAnswer = (
    questionId,
    answer
  ) => {
    setProgress((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: answer
      }
    }));
  };

  const goToQuestion = (
    questionIndex
  ) => {
    setProgress((prev) => ({
      ...prev,
      currentQuestion:
        questionIndex
    }));
  };

  const nextQuestion = () => {
    setProgress((prev) => ({
      ...prev,
      currentQuestion:
        prev.currentQuestion +
        1
    }));
  };

  const previousQuestion =
    () => {
      setProgress((prev) => ({
        ...prev,
        currentQuestion:
          Math.max(
            prev.currentQuestion -
              1,
            0
          )
      }));
    };

  const completeQuiz = () => {
    setProgress((prev) => ({
      ...prev,
      completed: true
    }));
  };

  const resetProgress = () => {
    setProgress({
      currentQuestion: 0,
      answers: {},
      completed: false
    });
  };

  return {
    progress,

    saveAnswer,

    goToQuestion,

    nextQuestion,

    previousQuestion,

    completeQuiz,

    resetProgress
  };
}

export default useQuizProgress;