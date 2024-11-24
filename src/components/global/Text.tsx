import { ReactNode } from "react";

import { motion, Variants } from "framer-motion";

import { cn } from "@/utils/cn";

interface Text {
  children?: ReactNode;
  className?: string;
  initial?: string;
  animate?: string;
  exit?: string;
  variants?: Variants;
}

export const P = ({
  children,
  className,
  initial,
  animate,
  exit,
  variants,
}: Text) => (
  <motion.p
    className={cn("text-base font-normal", className)}
    initial={initial}
    animate={animate}
    exit={exit}
    variants={variants}
  >
    {children}
  </motion.p>
);

export const H1 = ({
  children,
  className,
  initial,
  animate,
  exit,
  variants,
}: Text) => (
  <motion.h1
    className={cn("text-4xl font-bold", className)}
    initial={initial}
    animate={animate}
    exit={exit}
    variants={variants}
  >
    {children}
  </motion.h1>
);

export const H2 = ({
  children,
  className,
  initial,
  animate,
  exit,
  variants,
}: Text) => (
  <motion.h2
    className={cn("text-3xl font-semibold", className)}
    initial={initial}
    animate={animate}
    exit={exit}
    variants={variants}
  >
    {children}
  </motion.h2>
);

export const H3 = ({
  children,
  className,
  initial,
  animate,
  exit,
  variants,
}: Text) => (
  <motion.h2
    className={cn("text-2xl font-semibold", className)}
    initial={initial}
    animate={animate}
    exit={exit}
    variants={variants}
  >
    {children}
  </motion.h2>
);

export const H4 = ({
  children,
  className,
  initial,
  animate,
  exit,
  variants,
}: Text) => (
  <motion.h2
    className={cn("text-xl font-semibold", className)}
    initial={initial}
    animate={animate}
    exit={exit}
    variants={variants}
  >
    {children}
  </motion.h2>
);

export const H5 = ({
  children,
  className,
  initial,
  animate,
  exit,
  variants,
}: Text) => (
  <motion.h2
    className={cn("text-lg font-semibold", className)}
    initial={initial}
    animate={animate}
    exit={exit}
    variants={variants}
  >
    {children}
  </motion.h2>
);

export const H6 = ({
  children,
  className,
  initial,
  animate,
  exit,
  variants,
}: Text) => (
  <motion.h2
    className={cn("text-base font-semibold", className)}
    initial={initial}
    animate={animate}
    exit={exit}
    variants={variants}
  >
    {children}
  </motion.h2>
);
