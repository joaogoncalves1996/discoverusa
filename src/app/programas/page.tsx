"use client";

import React from "react";
import { motion } from "framer-motion";

const programas = [
  {
    title: "Work and Travel USA",
    emoji: "🛠️",
    description:
      "Se és estudante universitário e queres passar o próximo verão a viajar pelos EUA, conhecer pessoas, melhorar o inglês e trabalhar em locais fantásticos por mais de $2000/mês, este programa é para ti!",
  },
  {
    title: "Internship USA",
    emoji: "🏢",
    description:
      "Destinado a estudantes e jovens profissionais que querem destacar o seu perfil com um estágio de sonho nos EUA, ganhando experiência internacional e ampliando horizontes.",
  },
  {
    title: "Camp USA",
    emoji: "🏕️",
    description:
      "Trabalha como conselheiro de campo de férias num dos melhores Camps dos EUA. Ideal para quem gosta de natureza, crianças, diversão e tem aptidões especiais (desporto, música, artes, etc.).",
  },
  {
    title: "Au Pair USA",
    emoji: "👩‍🏫",
    description:
      "Vive com uma família americana, cuida de crianças e mergulha numa experiência cultural única. Ideal para raparigas entre 18 e 26 anos que querem viajar e melhorar o inglês.",
  },
];

export default function Programas() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Os Nossos Programas
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg text-blue-100"
        >
          Descobre qual é a melhor experiência para ti e começa já a tua jornada
          rumo ao sonho americano.
        </motion.p>
      </section>

      {/* Lista de Programas */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programas.map((prog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between border border-blue-100 hover:border-blue-300 transition"
            >
              <div>
                <div className="text-5xl mb-4">{prog.emoji}</div>
                <h2 className="text-xl font-semibold text-blue-800 mb-3">
                  {prog.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {prog.description}
                </p>
              </div>
              <div className="mt-6">
                <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition text-sm font-medium w-full">
                  Saber Mais
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
