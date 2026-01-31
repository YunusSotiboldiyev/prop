"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full flex justify-center px-4 sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/10">
      <nav className="w-full max-w-7xl text-white px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/#">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="font-bold text-xl">EKVATOR</span>
            <span className="hidden sm:block font-semibold">Prop</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <li><Link href="/challanges" className="hover:text-white">Challenges</Link></li>
          <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
          <li><Link href="/rules" className="hover:text-white">Rules</Link></li>
          <li><Link href="/us" className="hover:text-white">Why us?</Link></li>
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">

        <SignedOut>
          <SignInButton />
          <SignUpButton />

        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>

          <Link
            href="/challanges"
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
          >
            ↘ Challenges
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl relative w-8 h-8"
        >
          <AnimatePresence mode="wait">
            {!open ? (
              <motion.span
                key="menu"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                ☰
              </motion.span>
            ) : (
              <motion.span
                key="close"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                ✕
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden absolute top-20 w-[90%] bg-indigo-800 rounded-2xl p-6 text-white"
          >
            <div className="flex flex-col gap-4 text-gray-300">
              <Link href="/challanges" onClick={() => setOpen(false)}>Challenges</Link>
            <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
              <Link href="/rules" onClick={() => setOpen(false)}>Rules</Link>
                   
        <SignedOut>
          <SignInButton />
          <SignUpButton />
           
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
              <Link href="/us" onClick={() => setOpen(false)}>Why us?</Link>
              
                <Link
                  href="/challanges"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-white text-black py-2 rounded-full font-medium"
                >
                  Challenges
                </Link>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
