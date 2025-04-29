import React from "react";
import { motion } from "framer-motion";

// Animation variants for reveal of each element
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 bg-white dark:bg-gray-800"
      aria-labelledby="about-heading"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          id="about-heading"
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white text-center"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-center"
          variants={itemVariants}
        >
          I partner with visionaries across Africa to transform bold ideas into
          scalable digital products. Whether it’s crafting intuitive interfaces
          that boost user engagement by over 30%, I drive solutions that deliver
          measurable impact.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center mb-8"
          variants={itemVariants}
        >
          As Founder & CEO of <strong>Datamesolution Technologies</strong>, I
          lead a dedicated team committed to providing affordable and reliable
          digital services—empowering 12,000+ Nigerians with seamless access to
          data, airtime, cable TV, and more.
        </motion.p>

        <motion.div className="text-center" variants={itemVariants}>
          <a
            href="https://drive.google.com/file/d/1pmGungWKHbU8Qa_WRfb8JNllgv5DSVFj/view?usp=sharing"
            download
            target="_blank" // This makes it open in a new tab
            rel="noopener noreferrer" // This improves security when opening in a new tab
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition-colors"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
