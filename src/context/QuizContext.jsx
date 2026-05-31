import { createContext, useContext, useState } from "react";
import useLocalStorage
from "../hooks/useLocalStorage";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [answers, setAnswers] =
  useLocalStorage(
    "quiz_answers",
    {}
  );

  const [result, setResult] =
  useLocalStorage(
    "quiz_result",
    null
  );

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

    const [
  reviewQuestions,
  setReviewQuestions
] = useLocalStorage(
  "quiz_review_questions",
  []
);

const resetQuiz = () => {
  setAnswers({});

  setResult(null);

  setReviewQuestions([]);

  setCurrentQuestion(0);

  localStorage.removeItem(
    "quiz_answers"
  );

  localStorage.removeItem(
    "quiz_result"
  );

  localStorage.removeItem(
    "quiz_review_questions"
  );
};

  return (
    <QuizContext.Provider
      value={{
        answers,
        setAnswers,

       result,
      setResult,

      reviewQuestions,
      setReviewQuestions,

        currentQuestion,
        setCurrentQuestion,

        resetQuiz
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}