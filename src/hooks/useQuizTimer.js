import { useState, useEffect } from "react";

function useQuizTimer(initialTime, onTimeUp) {
  const [timeLeft, setTimeLeft] =
    useState(initialTime);

  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp?.();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return { timeLeft };
}

export default useQuizTimer;