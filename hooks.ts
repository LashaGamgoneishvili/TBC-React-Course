"use client";
import { useState, useEffect } from "react";

export function useLocalStorageState(key: string, initialState?: any) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return initialState;

    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialState;
    } catch (error) {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem("chart", JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

// export function useLocalStorageState(key: string, initialState?: any) {
//   const [value, setValue] = useState(function () {
//     if (typeof window === "undefined") return;
//     const storedValue = window.localStorage.getItem(key);
//     return storedValue ? JSON.parse(storedValue) : initialState;
//   });

//   useEffect(
//     function () {
//       localStorage.setItem("chart", JSON.stringify(value));
//     },
//     [value, key]
//   );

//   return [value, setValue];
// }
