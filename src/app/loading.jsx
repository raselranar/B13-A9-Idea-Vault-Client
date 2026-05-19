"use client";
import { motion } from "motion/react";
import { Zap } from "lucide-react";
import { Spinner } from "@heroui/react";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12 min-h-180">
      <div className="flex items-center gap-4">
        <Spinner size="xl" />
      </div>
    </div>
  );
}
