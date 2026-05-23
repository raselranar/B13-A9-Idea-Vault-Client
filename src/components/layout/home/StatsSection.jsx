"use client";

import { Award, Crown, Star, Zap } from "lucide-react";
import { motion } from "motion/react";
const StatsSection = () => {
  return (
    <section className=" py-12 container mx-auto">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            {
              icon: Star,
              value: "15,000+",
              label: "Ideas Shared",
              gradient: "from-orange-500 to-pink-500",
              fill: true,
            },
            {
              icon: Zap,
              value: "8,500+",
              label: "Active Innovators",
              gradient: "from-blue-500 to-cyan-500",
              fill: true,
            },
            {
              icon: Award,
              value: "750+",
              label: "Startups Launched",
              gradient: "from-green-500 to-emerald-500",
              fill: false,
            },
            {
              icon: Crown,
              value: "$50M+",
              label: "Funding Raised",
              gradient: "from-purple-500 to-pink-500",
              fill: false,
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-4`}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}>
                <stat.icon
                  className="w-8 h-8 text-white"
                  fill={stat.fill ? "currentColor" : "none"}
                />
              </motion.div>
              <motion.div
                className="text-4xl sm:text-5xl font-black text-black/80 dark:text-slate-300 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}>
                {stat.value}
              </motion.div>
              <div className="text-lg text-gray-600 dark:text-slate-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StatsSection;
