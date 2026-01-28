"use client";

import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const items = [
  {
    title: "Fast Payouts",
    desc: "Get your profits within 24 hours after approval. No delays, no excuses.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    title: "Success Stories",
    desc: "See how traders from around the world turned their skills into real income with us.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 21h8M12 17v4M7 4h10v6a5 5 0 01-10 0V4z" />
      </svg>
    ),
  },
  {
    title: "Secure & Compliant",
    desc: "We prioritize your data and funds with bank-level encryption and regulatory compliance.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
      </svg>
    ),
  },
  {
    title: "24/7 Live Support",
    desc: "Our team is always ready to help — anytime, anywhere.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 12a8 8 0 0116 0v4a2 2 0 01-2 2h-2v-6h4" />
        <path d="M4 12v4a2 2 0 002 2h2v-6H4" />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhyUsSection() {
  return (
    <>
    <Navbar/>
    <section className="py-24 bg-gradient-to-b from-indigo-600 to-indigo-700 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
          >
          Why us?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-16"
          >
          Why choose us over 1000+ prop firms?
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
          {items.map((card, index) => (
            <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -8 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 transition"
            >
              <div className="flex justify-center mb-5">
                <div className="p-4 rounded-full bg-white/10">
                  {card.icon}
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-400">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
          <Footer/>
          </>
  );
}
