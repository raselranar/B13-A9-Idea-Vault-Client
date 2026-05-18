"use client";
import Link from "next/link";
import { useState } from "react";
import { LuZap } from "react-icons/lu";
import { motion } from "motion/react";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/ideas">Ideas</Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-gradient">
      <header className="flex h-16 items-center justify-between px-6 container mx-auto">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu">
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          {/* logo */}
          <Link href="/">
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="p-2 rounded-xl bg-white">
                <LuZap
                  size={28}
                  color="text-orange-500"
                  className="text-orange-500"
                  fill="currentColor"
                />
              </motion.div>
              <h2 className="text-white text-2xl font-bold">
                IDEA<span className="text-yellow-300">VAULT</span>
              </h2>
            </div>
          </Link>
        </div>
        <ul className="hidden items-center gap-4 md:flex *:px-4 *:py-2 *:text-white *:font-medium *:hover:bg-white/20 *:text-xl *:rounded-lg transition-all">
          {links}
        </ul>
      </header>
      {/* small devices nav */}
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4 *:px-4 *:py-2 *:text-white *:font-medium *:hover:bg-white/20 *:text-xl *:rounded-lg transition-all">
            {links}
          </ul>
        </div>
      )}
    </nav>
  );
};
export default NavBar;
