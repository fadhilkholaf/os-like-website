"use client";

import Error from "next/error";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  Variants,
} from "framer-motion";

import { P } from "@/components/global/Text";
import { cn } from "@/utils/cn";

const variants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

const CursorFollowerContext = createContext<
  { setContent: Dispatch<SetStateAction<string>> } | undefined
>(undefined);

export const CursorFollowerProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [content, setContent] = useState<string>("");

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handlePointerEvent = (e: PointerEvent) => {
    if (ref.current) {
      x.set(e.clientX - ref.current?.offsetWidth / 2);
      y.set(e.clientY - ref.current?.offsetHeight - 16);
    }
  };

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerEvent);

    return () => {
      window.removeEventListener("pointermove", handlePointerEvent);
    };
  });

  return (
    <CursorFollowerContext.Provider value={{ setContent }}>
      <motion.span
        ref={ref}
        className={cn(
          "pointer-events-none fixed z-[60] h-12 w-40 rounded-lg bg-white/20 text-white opacity-0 backdrop-blur-sm transition-all duration-300 ease-out",
          {
            "opacity-100": content,
          },
        )}
        style={{ x, y }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={content}
            className="h-full"
            initial="initial"
            animate="animate"
            exit="initial"
          >
            <P
              className="flex h-full w-full items-center justify-center"
              variants={{
                animate: { transition: { staggerChildren: 0.01 } },
                initial: { transition: { staggerChildren: 0.01 } },
              }}
            >
              {content.split("").map((char, i) => (
                <motion.span key={i} variants={variants}>
                  {char}
                </motion.span>
              ))}
            </P>
          </motion.span>
        </AnimatePresence>
      </motion.span>
      {children}
    </CursorFollowerContext.Provider>
  );
};

export const useCursorFollower = () => {
  const context = useContext(CursorFollowerContext);
  if (!context) {
    throw new Error({
      statusCode: 404,
      title:
        "CursorFollowerContext must be used inside CursorFollowerProvider!",
      withDarkMode: true,
    });
  }
  return context;
};
