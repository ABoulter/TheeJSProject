import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#d72a1a] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" />
          <div className="w-1 sm:h-80 h-40 red-gradient drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" />
        </div>
        <div>
          <h1
            className={`${styles.heroHeadText} drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]`}>
            Andrei <span className="text-[#d72a1a] out">Boulter</span>
            <p
              className={`${styles.heroSubText} mt-2 text-white-100 drop-shadow-[0_2px_2px_rgba(0,0,0,1.8)]`}>
              Full-Stacks Web Developer Junior
            </p>
          </h1>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute flex items-center justify-center w-full xs:bottom-10 bottom-32">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-red-800 opacity-80 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 mb-1 bg-red-800 rounded-full opacity-80"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
