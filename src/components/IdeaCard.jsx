"use client";
import {
  Calendar,
  Flame,
  User,
  ArrowUpRight,
  MessageCircle,
  Heart,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const categoryColors = {
  AI: "from-violet-500 to-purple-500",
  Environment: "from-green-500 to-emerald-500",
  Education: "from-blue-500 to-cyan-500",
  Health: "from-red-500 to-pink-500",
  "E-commerce": "from-orange-500 to-amber-500",
  Tech: "from-indigo-500 to-blue-500",
};

export default function IdeaCard({
  data: { title, description, category, author, date, trending, _id },
}) {
  const gradientClass = categoryColors[category] || "from-gray-500 to-gray-600";
  return (
    <motion.div
      className="group w-full max-w-92 relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-500 mx-auto"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}>
      <div className={`h-2 bg-linear-to-r ${gradientClass}`}></div>

      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <span
            className={`px-4 py-1.5 bg-linear-to-r ${gradientClass} text-white rounded-full text-sm font-bold shadow-md`}>
            {category}
          </span>
          {trending && (
            <div className="flex items-center gap-1 text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
              <Flame className="w-4 h-4" fill="currentColor" />
              <span className="text-xs font-bold">HOT</span>
            </div>
          )}
        </div>

        <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight group-hover:text-orange-600 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 mb-5 line-clamp-3 text-sm leading-relaxed">
          {description}
        </p>

        <div className="flex items-center gap-4 text-xs text-gray-500 mb-5 pb-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-linear-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
              {author.charAt(0)}
            </div>
            <span className="font-medium text-gray-700">{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{date}</span>
          </div>
        </div>
        {/* buttons */}
        <div className="flex mt-auto items-center justify-between">
          <div className="flex items-center gap-4 text-gray-400">
            <motion.button
              className="flex items-center gap-1 hover:text-pink-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <Heart className="w-4 h-4" />
              <span className="text-xs font-medium">24</span>
            </motion.button>
            <motion.button
              className="flex items-center gap-1 hover:text-blue-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <MessageCircle className="w-4 h-4" />
              <span className="text-xs font-medium">12</span>
            </motion.button>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={`/ideas/${_id}`}
              className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-orange-500 to-pink-500 text-white rounded-full font-bold text-sm hover:shadow-lg transition-all">
              View
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </motion.div>
  );
}
