import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImg1 from "../assets/dopics.jpg";
import heroImg2 from "../assets/datame.jpg";
import heroImg3 from "../assets/In Igbo Attire .jpg";
import heroImg4 from "../assets/sitigbo.jpg";
import heroImg5 from "../assets/Playful David .jpg";

// Animation variants
const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2, ease: "easeInOut" } },
};

const backgroundVariants = {
  initial: { opacity: 0, scale: 1.1 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 1, ease: "easeIn" },
  },
};

const images = [heroImg1, heroImg2, heroImg3, heroImg4,heroImg5];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 9000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
      aria-label="Hero background image"
    >
      {/* Background images with animation */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="Hero Background"
            className="object-cover object-top w-full h-full absolute inset-0"
            variants={backgroundVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </AnimatePresence>

        {/* Dark overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-60"
          aria-hidden="true"
        />
      </div>

      {/* Foreground content */}
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
