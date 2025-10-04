import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#010212] backdrop-blur-sm"
    >
      {/* Gradient Spinner */}
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-transparent border-t-cyan-400 border-r-purple-500 animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-cyan-300 border-l-purple-400 animate-spin animation-delay-300"></div>
      </div>
    </motion.div>
  );
}