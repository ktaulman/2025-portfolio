"use client";
import {
  ReactNode,
  useContext,
  useMemo,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

type ScreenWidthStore = {
  screenWidth: number;
  setScreenWidth: Dispatch<SetStateAction<number>>;
};

const ScreenWidthContext = createContext<ScreenWidthStore | null>(null);

export function useScreenWidthContext() {
  const currentContext = useContext(ScreenWidthContext);
  if (!currentContext)
    throw new Error("Please next in provider, no current context found ");
  return currentContext;
}

function useScreenWidthStore(): ScreenWidthStore {
  const [screenWidth, setScreenWidth] = useState(0);
  const handleResize;
  const value = useMemo(() => ({ screenWidth, setScreenWidth }), [screenWidth]);
  return value;
}

export function ScreenWidthProvider({ children }: { children: ReactNode }) {
  // const currentContext = useContext(ScreenWidthContext)
  const store = useScreenWidthStore();

  return (
    <ScreenWidthContext.Provider value={{ ...store }}>
      {children}
    </ScreenWidthContext.Provider>
  );
}
