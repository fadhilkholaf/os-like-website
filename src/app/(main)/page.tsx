"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useActive } from "@/components/providers/ActiveProvider";

import About from "./components/parts/About";
import Project from "./components/parts/Project";

const variants: Variants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 8px)",
  },
  closed: {
    clipPath: "inset(90% 50% 10% 50% round 8px)",
  },
};

const Pages = [<About />, <Project />];

const Home = () => {
  const { active, open } = useActive();

  return (
    <motion.section
      className="h-[calc(100%-5rem)] w-full rounded-lg bg-black mix-blend-exclusion"
      initial="closed"
      animate={open ? "open" : "closed"}
      variants={variants}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial="initial"
          animate="animate"
          exit="initial"
          className="flex h-full w-full justify-center overflow-hidden rounded-lg border border-white bg-white/10 p-4 text-white backdrop-blur-sm"
        >
          {Pages[active]}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
};

export default Home;
