import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Olosunde Vincent.",
    role: "Partner",
    avatar: "/avatars/timi.jpg",
    comment: "David’s content has made my design work so much easier. His clarity and creativity have boosted my productivity and streamlined my process",
    rating: 5,
  },
  {
    name: "Micheal",
    role: "Student",
    avatar: "/avatars/micheal.jpg",
    comment:
      "David’s style of teaching digital literacy is unmatched. I feel empowered.",
    rating: 4,
  },
  {
    name: "Marvellous A..",
    role: "Stakeholder",
    avatar: "/avatars/marvellous.jpeg",
    comment:
      "Datamesolution helped reduce costs for over 1000 users in my institution.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 px-6 md:px-16 bg-white dark:bg-gray-900"
      aria-labelledby="testimonials-heading"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2
          id="testimonials-heading"
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
        >
          What People Are Saying
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Real feedback from clients, learners, and partners
        </p>
      </motion.div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation, A11y]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={true}
        a11y={{
          prevSlideMessage: "Previous testimonial",
          nextSlideMessage: "Next testimonial",
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={t.avatar}
                alt={`${t.name} avatar`}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <p className="text-lg text-gray-800 dark:text-white italic mb-4">
                “{t.comment}”
              </p>
              <div className="flex items-center mb-2">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} aria-hidden="true" className="text-yellow-500">
                    ★
                  </span>
                ))}
                {Array.from({ length: 5 - t.rating }).map((_, i) => (
                  <span
                    key={i}
                    className="text-gray-300 dark:text-gray-600"
                    aria-hidden="true"
                  >
                    ★
                  </span>
                ))}
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white">
                {t.name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t.role}
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
