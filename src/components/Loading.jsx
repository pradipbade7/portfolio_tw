import { motion } from "framer-motion";

export default function Loading() {
  const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen flex items-center justify-center bg-primary"
    >
      <div className="grid grid-cols-2 gap-2">
        {colors.map((color, i) => (
          <motion.div
            key={i}
            className={`w-8 h-8 ${color} rounded-md`}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
