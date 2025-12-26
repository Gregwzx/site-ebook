"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function StickyCta() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

  const handlePurchase = () => {
    window.open("https://pay.kiwify.com.br/seu-link", "_blank");
  };

  return (
    <motion.div 
      style={{ opacity }}
      className="fixed bottom-6 left-0 right-0 z-50 px-4 md:hidden pointer-events-none"
    >
      <button 
        onClick={handlePurchase}
        className={cn(
          "w-full h-14 text-lg font-bold shadow-2xl pointer-events-auto rounded-2xl",
          "bg-gradient-to-r from-emerald-600 to-emerald-500",
          "text-white",
          "hover:from-emerald-500 hover:to-emerald-400",
          "transition-all duration-300",
          "active:scale-95"
        )}
      >
        COMEÇAR AGORA POR R$ 97
      </button>
    </motion.div>
  );
}