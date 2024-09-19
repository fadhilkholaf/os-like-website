"use client";

import Error from "next/error";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

const ActiveContext = createContext<
  | {
      active: number;
      open: boolean;
      setActive: Dispatch<SetStateAction<number>>;
      setOpen: Dispatch<SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

export const ActiveProvider = ({ children }: { children: ReactNode }) => {
  const [active, setActive] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(true);

  return (
    <ActiveContext.Provider value={{ active, open, setActive, setOpen }}>
      {children}
    </ActiveContext.Provider>
  );
};

export const useActive = () => {
  const context = useContext(ActiveContext);
  if (!context) {
    throw new Error({
      statusCode: 404,
      title: "Active context must be used inside active provider!",
      withDarkMode: true,
    });
  }
  return context;
};
