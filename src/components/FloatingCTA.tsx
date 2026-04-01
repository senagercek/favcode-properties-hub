import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCTA = () => {
  return (
    <motion.a
      href="#"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-accent shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      title="Talep Gönder"
    >
      <MessageCircle className="h-6 w-6 text-accent-foreground" />
    </motion.a>
  );
};

export default FloatingCTA;
