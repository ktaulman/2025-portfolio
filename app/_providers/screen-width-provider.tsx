"use client";
import {
  ReactNode,
  useContext,
  useMemo,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
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

export function useScreenWidthStore(): ScreenWidthStore {
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    console.log("setting up store");
    setScreenWidth(window.innerWidth);
    const setWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", setWidth);
    return () => window.removeEventListener("resize", setWidth);
  }, [setScreenWidth]);

  const value = useMemo(() => ({ screenWidth, setScreenWidth }), [screenWidth]);
  return value;
}

export function ScreenWidthProvider({ children }: { children: ReactNode }) {
  // const currentContext = useContext(ScreenWidthContext)
  const store = useScreenWidthStore();
  console.log("ScreenWidthProvider", { store });
  return (
    <ScreenWidthContext.Provider value={{ ...store }}>
      {children}
    </ScreenWidthContext.Provider>
  );
}
