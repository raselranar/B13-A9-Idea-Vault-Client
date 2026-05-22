"use client";
import { Home, Search, Zap } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
const notFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-rose-50 flex items-center justify-center py-12 px-4">
      <motion.div
        className="max-w-2xl w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        {/* 404 Illustration */}
        <div className="mb-8">
          <motion.div
            className="inline-flex items-center justify-center w-32 h-32 bg-gradient rounded-full mb-6"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360],
            }}
            transition={{
              scale: { duration: 2, repeat: Infinity },
              rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            }}>
            <Zap className="w-16 h-16 text-white" fill="currentColor" />
          </motion.div>
          <motion.h1
            className="text-9xl font-black text-transparent bg-clip-text bg-gradient mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}>
            404
          </motion.h1>
        </div>

        {/* Content */}
        <motion.div
          className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-orange-100 dark:border-slate-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}>
          <motion.h2
            className="text-4xl font-black text-gray-900 dark:text-white dark:text-slate-50 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}>
            Oops! Page Not Found
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-slate-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}>
            The page you&apos;re looking for seems to have vanished into the
            innovation void. Let&apos;s get you back on track!
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="px-8 py-4 bg-gradient text-white font-bold rounded-full hover:shadow-xl transition-all inline-flex items-center justify-center gap-2">
                <Home className="w-5 h-5" />
                Go to Homepage
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/ideas"
                className="px-8 py-4 bg-white border-2 border-orange-500 dark:border-slate-800 text-orange-600 font-bold rounded-full hover:bg-orange-50 transition-all inline-flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Browse Ideas
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 dark:text-slate-300 mb-4 font-semibold">
              Quick Links
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/"
                className="text-orange-600 hover:text-orange-500 font-semibold">
                Home
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/ideas"
                className="text-orange-600 hover:text-orange-500 font-semibold">
                All Ideas
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/add-idea"
                className="text-orange-600 hover:text-orange-500 font-semibold">
                Submit Idea
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/login"
                className="text-orange-600 hover:text-orange-500 font-semibold">
                Login
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default notFound;
