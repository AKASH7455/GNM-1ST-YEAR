import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const storedValue = localStorage.getItem(key);

      return storedValue !== null
        ? JSON.parse(storedValue)
        : initialValue;
    } catch (error) {
      console.error("LocalStorage Read Error:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("LocalStorage Save Error:", error);
    }
  }, [key, value]);

  const updateValue = (newValue) => {
    try {
      setValue((prevValue) =>
        newValue instanceof Function
          ? newValue(prevValue)
          : newValue
      );
    } catch (error) {
      console.error("LocalStorage Save Error:", error);
    }
  };

  return [value, updateValue];
}

export default useLocalStorage;