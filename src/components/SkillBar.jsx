"use client";
import { motion } from "framer-motion";

export default function SkillBar({ name, percentage }) {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex justify-between items-center font-mono text-sm">
        <span className="text-foreground font-medium uppercase tracking-wider">{name}</span>
        <span className="text-primary font-bold">{percentage}%</span>
      </div>
      <div className="w-full h-3 bg-[#1A1A1A] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
