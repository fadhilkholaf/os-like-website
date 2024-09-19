import { motion, Variants } from "framer-motion";

import { cn } from "@/utils/cn";

const hrVariants: Variants = {
  initial: { scale: 0 },
  animate: { scale: 1, transition: { bounce: 0 } },
};

const HR = ({
  variants,
  className,
}: {
  variants?: Variants;
  className?: string;
}) => {
  return (
    <motion.hr
      className={cn("origin-left", className)}
      variants={hrVariants ?? variants}
    />
  );
};

export default HR;
