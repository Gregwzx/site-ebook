// components/design/BackgroundDecor.tsx
"use client";

import { motion } from "framer-motion";

export function BackgroundDecor() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Mancha Superior Esquerda (Verde Esmeralda) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[120px] dark:bg-emerald-900/20"
      />

      {/* Mancha Inferior Direita (Azul/Ciano para contraste) */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[130px] dark:bg-sky-900/20"
      />

      {/* Padrão de Pontos (Grid) - Dá um ar técnico/moderno */}
      <div 
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.05]" 
        style={{ 
          backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`, 
          backgroundSize: '30px 30px' 
        }} 
      />
      
      {/* Linha Decorativa Sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent opacity-20" />
    </div>
  );
}