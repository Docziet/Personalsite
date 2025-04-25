import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/dopics.jpg";

// Animation variants for staged reveal and interactive CTA
const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};
const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } },
};

export default function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${heroImg})` }}
      aria-label="Hero background image"
    >
      {/* Dark overlay for contrast */}
      <div
        className="absolute inset-0 bg-black bg-opacity-60"
        aria-hidden="true"
      />

      <motion.div
        className="z-10 text-center px-6 max-w-2xl"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
          I empower Innovators in Africa to build products users love
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Tech strategist, product designer, and educator dedicated to
          transforming ideas into impact.
        </p>
        <motion.a
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
          variants={buttonVariants}
          whileHover="hover"
        >
          Let’s Talk Strategy
        </motion.a>
      </motion.div>
    </section>
  );
}
