"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";

import Navbar from "@/components/Navbar";
import Fluid from "@/utils/fluid/Fluid";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <motion.main
      className="h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="relative flex h-full w-full flex-col items-center justify-between gap-y-4 overflow-hidden p-4">
        <section className="absolute left-0 top-0 -z-10 hidden h-full w-full lg:block">
          <Canvas>
            <Stars
              radius={100}
              depth={100}
              count={4000}
              factor={4}
              saturation={0}
              fade
              speed={0.2}
            />
            <EffectComposer>
              <Fluid
                radius={0.03}
                curl={10}
                swirl={5}
                distortion={1}
                force={2}
                pressure={0.94}
                densityDissipation={0.98}
                velocityDissipation={0.99}
                intensity={0.3}
                rainbow={false}
                blend={0}
                // showBackground={true}
                showBackground={false}
                // backgroundColor="#a7958b"
                fluidColor="#ffffff"
                // fluidColor="#cfc0a8"
              />
            </EffectComposer>
          </Canvas>
        </section>
        {children}
        <Navbar />
      </main>
    </motion.main>
  );
};

export default MainLayout;
