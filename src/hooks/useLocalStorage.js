import { useState } from "react";

function useLocalStorage(
  key,
  initialValue
) {
  const [value, setValue] =
    useState(() => {
      try {
        if (
          typeof window ===
          "undefined"
        ) {
          return initialValue;
        }

        const storedValue =
          localStorage.getItem(key);

        if (!storedValue) {
          return initialValue;
        }

        return JSON.parse(
          storedValue
        );
      } catch (error) {
        console.error(
          "LocalStorage Read Error:",
          error
        );

        return initialValue;
      }
    });

  const updateValue = (
    newValue
  ) => {
    try {
      const valueToStore =
        newValue instanceof Function
          ? newValue(value)
          : newValue;

      setValue(valueToStore);

      localStorage.setItem(
        key,
        JSON.stringify(
          valueToStore
        )
      );
    } catch (error) {
      console.error(
        "LocalStorage Save Error:",
        error
      );
    }
  };

  return [value, updateValue];
}

export default useLocalStorage;