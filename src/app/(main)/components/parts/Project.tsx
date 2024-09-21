"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";

import { H1, H3, H4, P } from "@/components/global/Text";
import HR from "@/components/global/HR";
import { useState } from "react";
import { cn } from "@/utils/cn";

const variants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

const projects: {
  title: string;
  year: string;
  description: string;
  image: string;
}[] = [
  {
    title: "Kemenag Kota Malang",
    year: "2024",
    image: "/image/project/kemenag.png",
    description: "Kementrian Agama Kota Malang employee performance report.",
  },
  {
    title: "LKBB Antareja",
    year: "2024",
    image: "/image/project/antareja.png",
    description: "Aksi Telkom Barisan Jawara competition by SMK Telkom Malang.",
  },
  {
    title: "Moklet.org",
    year: "2024",
    image: "/image/project/mokletorg.png",
    description: "SMK Telkom Malang organization website.",
  },
];

const Project = () => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <motion.div
      className="flex h-full w-full max-w-[1280px] gap-x-4 overflow-y-auto"
      variants={{ animate: { transition: { staggerChildren: 0.05 } } }}
    >
      <motion.div className="sticky top-0 w-1/3" variants={variants}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial="initial"
            animate="animate"
            exit="initial"
            className="flex h-full w-full flex-col gap-y-4"
            variants={{ animate: { transition: { staggerChildren: 0.05 } } }}
          >
            <motion.img
              src={projects[selected].image}
              alt="project"
              width={500}
              height={500}
              loading="lazy"
              className="h-1/3 w-full rounded-lg object-cover grayscale hover:grayscale-0 hover:transition-all hover:duration-300"
              variants={variants}
            />
            <div className="flex flex-col gap-4">
              <H4 variants={variants}>{projects[selected].title}</H4>
              <P variants={variants}>{projects[selected].description}</P>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="flex w-2/3 flex-col gap-y-4">
        <div>
          <H3 variants={variants}>Project</H3>
          <H1 variants={variants}>Featured</H1>
        </div>
        <HR />
        <ul className="flex flex-col gap-4 overflow-y-auto">
          {projects.map((project, i) => (
            <motion.li
              key={i}
              className={cn(
                "flex cursor-pointer justify-between rounded-lg bg-white/10 p-4 hover:bg-white/20",
                {
                  "bg-white/30": selected === i,
                },
              )}
              variants={variants}
              onClick={() => setSelected(i)}
            >
              <P>{project.title}</P>
              <P>{project.year}</P>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Project;
