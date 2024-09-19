"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

import { motion, Variants } from "framer-motion";

import { H1, H3, H4, P } from "@/components/global/Text";
import { about as data } from "@/utils/data";
import HR from "@/components/global/HR";

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
  return (
    <motion.div
      className="flex h-full w-full max-w-[1280px] flex-col gap-y-8 overflow-y-auto"
      variants={{ animate: { transition: { staggerChildren: 0.05 } } }}
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
        </div>
        <div className="relative flex h-full w-1/4 flex-col gap-y-4">
          <motion.img
            src="/image/fadhil.jpeg"
            alt="about"
            width={500}
            height={500}
            loading="lazy"
            className="h-fit w-full rounded-lg object-cover"
            variants={variants}
          />
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
