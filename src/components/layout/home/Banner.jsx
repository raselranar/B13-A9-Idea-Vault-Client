"use client";
import {
  Rocket,
  Lightbulb,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const slides = [
  {
    title: "Unleash Your Innovation",
    subtitle: "Transform Ideas into Reality",
    description:
      "Connect with innovators worldwide and bring your startup dreams to life",
    icon: Rocket,
    pattern: "dots",
  },
  {
    title: "Explore Brilliant Minds",
    subtitle: "Discover Game-Changing Ideas",
    description:
      "Browse thousands of innovative concepts from visionary entrepreneurs",
    icon: Lightbulb,
    pattern: "grid",
  },
  {
    title: "Join the Revolution",
    subtitle: "Shape the Future Together",
    description:
      "Collaborate, validate, and accelerate your journey to success",
    icon: TrendingUp,
    pattern: "waves",
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const Icon = slides[currentSlide].icon;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background*/}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="text-white space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}>
              <motion.div
                className="inline-block px-4 py-2 bg-orange-500/20 border dark:border-slate-700/60  border-orange-500/30 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}>
                <span className="text-orange-300 text-sm font-semibold">
                  #{currentSlide + 1} OF 3
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}>
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                className="text-2xl text-orange-400 font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}>
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.p
                className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}>
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                className="flex gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}>
                <Link href="/ideas">
                  <motion.button
                    className="px-8 py-4 bg-gradient text-white font-bold rounded-full hover:shadow-2xl transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    Explore Ideas
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Right Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient rounded-full blur-3xl opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className="relative bg-gradient p-16 rounded-3xl shadow-2xl"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ rotate: 360, scale: 1.1 }}>
                  <Icon className="w-32 h-32 text-white" strokeWidth={1.5} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* slide changer */}
        <div className="flex justify-between items-center mt-12">
          <div className="flex gap-3">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all rounded-full ${
                  index === currentSlide
                    ? "w-12 h-3 bg-orange-500"
                    : "w-3 h-3 bg-white/30 hover:bg-white/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <motion.button
              onClick={prevSlide}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}>
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}>
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
