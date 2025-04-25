// src/components/FeaturedWork.js

import React from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, ShoppingCart } from "lucide-react";

// Animation variants for featured work cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const featured = [
  {
    title: "Datamesolution Technologies",
    desc: "Integrated platform for seamless data, airtime, and digital services—serving over 50K monthly transactions.",
    icon: <Smartphone size={24} aria-hidden="true" />,
    url: "https://datamesolution.com/",
  },
  {
    title: "Brainbench Academy",
    desc: "Assisted in Tech bootcamps and World Bank–supported programs, equipping 1,200+ students with in‑demand skills.",
    icon: <Globe size={24} aria-hidden="true" />,
    url: "https://web.facebook.com/bba.com.ng/?_rdc=1&_rdr#",
  },
  {
    title: "Davimart Provisions",
    desc: "Established a retail venture providing essential goods at affordable prices in Ekiti State, enhancing community access to daily necessities.",
    icon: <ShoppingCart size={24} aria-hidden="true" />,
    url: "https://g.co/kgs/bE9Bzdv",
  },
];

export default function FeaturedWork() {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-800"
      aria-labelledby="featured-work-heading"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2
          id="featured-work-heading"
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
        >
          Featured Work
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          A selection of signature projects that showcase measurable impact and
          innovation.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {featured.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl"
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow hover:shadow-lg transition-shadow h-full"
              variants={cardVariants}
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4 mx-auto">
                {item.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2 text-gray-800 dark:text-white text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {item.desc}
              </p>
            </motion.div>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
