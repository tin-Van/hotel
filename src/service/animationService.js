import { motion } from "framer-motion";

// Hiệu ứng xuất hiện
export const fadeIn = (duration = 2)=> ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration },
});
// Hiệu ứng di chuyển
export const slideIn = (direction = "left", distance = 100) => ({
  initial: { x: direction === "left" ? -distance : distance, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 1 },
});

// Hiệu ứng hover
export const hoverEffect = {
  whileHover: { scale: 1.2, backgroundColor: "#ff5733" },
  transition: { duration: 0.2 },
};



