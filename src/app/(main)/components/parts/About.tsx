"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";

import HR from "@/components/global/HR";
import { H1, H3, H4, P } from "@/components/global/Text";
import { useCursorFollower } from "@/components/providers/CursorFollowerProvider";
import { about as data } from "@/utils/data";

const Badge = dynamic(() => import("@/components/models/Badge"), {
  ssr: false,
  loading: () => (
    <P className="flex h-full w-full items-center justify-center text-black">
      Loading
    </P>
  ),
});

const variants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

const About = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["50%", "0%"]),
    { bounce: 0.1 },
  );

  const { setContent } = useCursorFollower();

  return (
    <motion.div
      ref={containerRef}
      className="flex h-full w-full max-w-[1280px] flex-col gap-y-8 overflow-y-scroll pb-4"
      variants={{
        animate: { transition: { staggerChildren: 0.05, delayChildren: 0.5 } },
      }}
    >
      <div className="flex flex-col">
        <H3 variants={variants}>About</H3>
        <H1 className="flex w-fit flex-wrap gap-x-2.5" variants={variants}>
          {data.name}
        </H1>
        <P variants={variants}>{data.role}</P>
      </div>
      <HR />
      <div className="flex w-full gap-x-16">
        <div className="flex w-2/3 flex-col gap-y-8">
          <div className="flex w-full flex-col gap-y-4">
            {data.about.map((paragraph, i) => (
              <P
                key={i}
                className="flex h-fit w-fit flex-wrap gap-x-1.5"
                variants={variants}
              >
                {paragraph}
              </P>
            ))}
          </div>
          <HR />
          <div className="flex flex-col gap-y-4">
            <H4 variants={variants}>Experience</H4>
            <ul className="flex list-disc flex-col gap-y-4 pl-6">
              {data.experience.map((item, i) => (
                <motion.li key={i} variants={variants}>
                  <P className="flex h-fit w-fit flex-wrap gap-x-1.5">{item}</P>
                </motion.li>
              ))}
            </ul>
          </div>
          <HR />
          <div className="flex flex-col gap-y-4">
            <H4 variants={variants}>Education</H4>
            <ul className="flex list-disc flex-col gap-y-4 pl-6">
              {data.education.map((item, i) => (
                <motion.li key={i} variants={variants}>
                  <P className="flex h-fit w-fit flex-wrap gap-x-1.5">
                    {item.title}
                  </P>
                  <div className="flex justify-between gap-x-4">
                    <P className="text-xs">GPA : {item.gpa}</P>
                    <P className="text-xs">{item.period}</P>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          <HR />
          <div className="flex flex-col gap-y-4">
            <H4 variants={variants}>Certifications</H4>
            <ul className="flex list-disc flex-col gap-y-4 pl-6">
              {data.certification.map((item, i) => (
                <motion.li key={i} variants={variants}>
                  <P className="flex h-fit w-fit flex-wrap gap-x-1.5">
                    {item.title}
                  </P>
                  <div className="mb-2 flex justify-between gap-x-4">
                    <P className="text-xs">{item.category}</P>
                    <P className="text-xs">{item.issued}</P>
                  </div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    loading="lazy"
                    className="h-[200px] w-auto rounded-lg"
                  />
                </motion.li>
              ))}
            </ul>
          </div>
          <HR />
          <div className="flex flex-col gap-y-4">
            <H4 variants={variants}>Organizations</H4>
            <ul className="flex list-disc flex-col gap-y-4 pl-6">
              {data.organizations.map((item, i) => (
                <motion.li key={i} variants={variants}>
                  <P className="flex h-fit w-fit flex-wrap gap-x-1.5">
                    {item.title}
                  </P>
                  <div className="flex justify-between gap-x-4">
                    <P className="text-xs">{item.by}</P>
                    <P className="text-xs">{item.period}</P>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          <HR />
          <div className="flex gap-x-4">
            {data.social.map((item, i) => (
              <motion.div
                key={i}
                variants={variants}
                onPointerEnter={() => setContent(item.title)}
                onPointerLeave={() => setContent("")}
              >
                <Link href={item.url} target="_blank">
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={50}
                    height={50}
                    className="h-8 w-8 rounded-lg object-cover"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative flex h-full w-1/4 flex-col gap-y-4">
          <div className="overflow-hidden rounded-lg">
            <motion.img
              ref={imageRef}
              src="/image/fadhil.jpeg"
              alt="about"
              width={500}
              height={500}
              loading="lazy"
              className="w-full object-cover"
              style={{ translateY, scale: 1.2 }}
              variants={variants}
              onPointerEnter={() => setContent("❤️")}
              onPointerLeave={() => setContent("")}
            />
          </div>
          <motion.div
            className="sticky top-0 h-[500px] overflow-hidden rounded-lg bg-white"
            variants={variants}
          >
            <Badge />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
