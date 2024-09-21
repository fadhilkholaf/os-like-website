"use client";

import { motion, Variants } from "framer-motion";

import { cn } from "@/utils/cn";
import { pages } from "@/utils/data";

import { useActive } from "./providers/ActiveProvider";
import { P } from "./global/Text";
import { useCursorFollower } from "./providers/CursorFollowerProvider";

const variants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const Navbar = ({ className }: { className?: string }) => {
  const { active, open, setActive, setOpen } = useActive();
  const { setContent } = useCursorFollower();

  return (
    <motion.nav
      className={cn(
        "w-fit rounded-lg border border-white bg-white/20 p-2 mix-blend-exclusion backdrop-blur-sm",
        className,
      )}
      initial={"initial"}
      animate={"animate"}
      variants={{
        initial: {
          scale: 0,
          translateY: "50%",
        },
        animate: {
          scale: 1,
          translateY: "0",
          transition: { delayChildren: 0.5 },
        },
      }}
    >
      <motion.ul
        className="flex justify-between gap-x-2"
        variants={{
          animate: {
            transition: { delayChildren: 0.15, staggerChildren: 0.05 },
          },
        }}
      >
        {pages &&
          pages.map((page, i) => (
            <motion.li
              key={i}
              className={cn(
                "flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-white/0 grayscale transition-all duration-300",
                {
                  "bg-white/20 grayscale-0": active === i && open,
                },
              )}
              variants={variants}
              onClick={() => {
                if (!open) {
                  setOpen(true);
                } else if (active === i) {
                  setOpen(false);
                }
                setActive(i);
              }}
              onPointerEnter={() => setContent(page.title)}
              onPointerLeave={() => setContent("")}
            >
              <P className="text-2xl">{page.icon}</P>
            </motion.li>
          ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
