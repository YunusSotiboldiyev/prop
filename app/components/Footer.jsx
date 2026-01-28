"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="from-bg-indigo-600 to-bg-indigo-700 text-indigo-200 px-6 py-14">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10"
      >
        {/* Brand */}
        <motion.div variants={item}>
          <h2 className="text-white text-xl font-semibold tracking-wide">
            EkvatorProp
          </h2>
        </motion.div>


        {/* Resources */}
        <motion.div variants={item}>
          <h3 className="text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <FooterText>Help Center (Soon)</FooterText>
            <FooterText>Chat Bot (Soon)</FooterText>
            <FooterText>App (Soon)</FooterText>
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div variants={item}>
          <h3 className="text-white mb-4">Social</h3>
          <ul className="space-y-2">
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="https://t.me/ekvatorprop">Telegram</FooterLink>
            <FooterLink href="#">YouTube</FooterLink>
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div variants={item}>
          <h3 className="text-white mb-4">Legal</h3>
          <ul className="space-y-2">
            <FooterLink href="/terms">Terms</FooterLink>
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink href="/refund">Refund</FooterLink>
            <FooterLink href="/rules">Rules</FooterLink>
          </ul>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}

    </footer>
  );
}

/* Helpers */

function FooterLink({ href, children }) {
  return (
    <motion.li whileHover={{ x: 6 }}>
      <Link
        href={href}
        className="hover:text-white transition-colors"
      >
        {children}
      </Link>
    </motion.li>
  );
}

function FooterText({ children }) {
  return <li className="text-indigo-300/70">{children}</li>;
}
