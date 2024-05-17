"use client";
import { createContext, useContext, useState } from "react";
import { useLocalStorageState } from "../../hooks";
import { useEffect } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [value, _] = useLocalStorageState("chart");
  let [state, setState] = useState("");

  useEffect(() => {
    if (value) {
      setState(
        value.reduce((acc: number, curr: any) => {
          return acc + curr.count;
        }, 0)
      );
    }
  }, [value]);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
