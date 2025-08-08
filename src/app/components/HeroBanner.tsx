"use client";

import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <section className="relative h-[70vh] w-full text-white flex items-center justify-center text-center overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/usa-flag.mp4" type="video/mp4" />
      </video>

      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/50 to-blue-900/70" />

      {/* Texto animado */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          DiscoverUSA
        </h1>
        <p className="text-2xl md:text-3xl font-medium drop-shadow-md">
          Experiências Educativas nos EUA
        </p>
      </motion.div>
    </section>
  );
}
