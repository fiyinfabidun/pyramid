/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const FadeUp = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay }}
      viewport={{ once: false, amount: 0.4 }} // Only triggers once, when 20% of it is visible
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
