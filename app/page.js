"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Navbar />

      <section className="relative min-h-screen bg-gradient-to-br from-[#0b0f3b] via-[#120b5e] to-[#3a1dbb] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-light leading-tight">
              Empowering Promising <br />
              <span className="font-bold">Traders Worldwide</span>
            </h1>

            {/* FEATURES */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-sm">
              {[
                { title: "Up to 80%", desc: "Performance Reward" },
                { title: "Up to $100k", desc: "Simulated Accounts" },
                { title: "24 Hours", desc: "Guaranteed Reward" },
                { title: "60 days", desc: "in Challenge Phase" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-white/70">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-12">
              <Link href={'/challanges'} >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-medium"
                >
                Start Challenge →
              </motion.button>
                </Link>

            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:flex justify-end items-end"
          >
            <div className="flex gap-4">
              {[60, 90, 120, 80, 50].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: h }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="w-10 rounded-lg bg-gradient-to-t from-cyan-400 to-indigo-500 shadow-xl"
                />
              ))}
            </div>
          </motion.div>

        </div>

        {/* BACKGROUND GLOW */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/30 blur-[120px]" />
      </section>
    <section className="relative min-h-screen flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white overflow-hidden">
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-900 to-indigo-700 opacity-90" />

      <div className="relative z-10 max-w-4xl px-6 text-center">


        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-light leading-tight"
          >
          Trade our capital <br />
          <span className="font-semibold">keep your edge</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-white/70 text-base md:text-lg leading-relaxed"
          >
          At <span className="text-white font-medium">EKVATOR Prop</span>, we empower skilled Forex traders by
          giving them access to real capital. No gimmicks — just a clear path
          to getting funded. Prove your edge through our evaluation, and trade
          with discipline to earn up to <span className="text-white">$200K</span> in funding.
          You focus on performance — we handle the rest.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex justify-center gap-6"
          >
            <Link href={"/challanges"}>
          <button className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition">
            Get Started
            </button>
            </Link>
        </motion.div>


      </div>

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

    </section>
      <Footer />
    </>
  );
};

export default page;
