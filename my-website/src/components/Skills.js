// src/components/Skills.js

import React from "react";
import { motion } from "framer-motion";
import { Code, Megaphone,BarChart2, Layout, ArrowUpRight, BookOpen } from "lucide-react";

// Motion variants for staggered reveal
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const skills = [
  { Icon: BarChart2, label: "Business Strategy", proficiency: 80 },
  { Icon: ArrowUpRight, label: "Investment & Growth", proficiency: 75 },
  { Icon: Layout, label: "UI/UX Design", proficiency: 90 },
  { Icon: Code, label: "Frontend Development", proficiency: 85 },
  { Icon: Megaphone, label: "Digital Marketing", proficiency: 80 },
  { Icon: BookOpen, label: "Digital Training", proficiency: 95 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 px-6 md:px-16 bg-gray-100 dark:bg-gray-900"
      aria-labelledby="skills-heading"
    >
      <h2
        id="skills-heading"
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white"
      >
        Core Skills
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        {skills.map(({ Icon, label, proficiency }, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow hover:shadow-lg transition-shadow focus-within:ring-2 ring-blue-500"
            variants={item}
          >
            <Icon
              className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4 mx-auto"
              aria-hidden="true"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-2">
              {label}
            </h3>
            <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-600 dark:bg-blue-400"
                initial={{ width: 0 }}
                whileInView={{ width: `${proficiency}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 text-center">
              {proficiency}% Proficiency
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
