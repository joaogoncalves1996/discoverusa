"use client";

import React from "react";
import { motion } from "framer-motion";

export default function QuemSomos() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-3"
        >
          Quem Somos
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100"
        >
          Já vivemos o intercâmbio. Agora ajudamos outros a viverem também.
        </motion.p>
      </section>

      {/* História resumida */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-gray-800 text-lg"
          >
            <h2 className="text-3xl font-semibold text-blue-800">
              Tudo começou com uma viagem
            </h2>
            <ul className="space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>
                  Em 2022, eu e o Hugo participámos num programa de Work &
                  Travel ainda pouco conhecido em Portugal.
                </span>
              </li>

              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>
                  Trabalhámos em New Jersey, conhecemos pessoas incríveis e
                  descobrimos o melhor dos Estados Unidos.
                </span>
              </li>

              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>
                  No ano seguinte, voltei sozinho para Maryland e percebi que
                  quase não havia portugueses a participar neste tipo de
                  programas.
                </span>
              </li>

              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>
                  Vi aí uma oportunidade e criei a{" "}
                  <strong className="font-semibold text-blue-600">
                    Discover USA
                  </strong>
                  .
                </span>
              </li>

              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>
                  A missão da Discover USA é aproximar jovens portugueses de
                  experiências únicas de Work & Travel, ajudando-os a explorar
                  os EUA com segurança, orientação e inspiração.
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-64 bg-[url('/team.jpeg')] bg-cover bg-center rounded-xl shadow-lg hover:scale-105 transition-transform"
          />
        </div>
      </section>

      {/* Missão */}
      <section className="bg-blue-50 py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center text-gray-800 space-y-6"
        >
          <h2 className="text-3xl font-semibold text-blue-800">
            A Nossa Missão
          </h2>
          <p className="text-lg">
            Ajudar estudantes portugueses a viverem experiências transformadoras
            nos EUA, com <strong>apoio real</strong> de quem já esteve lá.
          </p>
        </motion.div>
      </section>

      {/* O que fazemos */}
      <section className="bg-white py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-semibold text-blue-800 mb-8">
            O Que Fazemos
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700 font-medium">
            {[
              "🛠️ Work & Travel USA",
              "🏕️ Camp USA",
              "👩‍🏫 Au Pair USA",
              "🏢 Internship USA",
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-blue-50 py-4 px-6 rounded-lg shadow hover:shadow-lg transition"
              >
                {item}
              </motion.li>
            ))}
          </ul>
          <p className="mt-6 text-gray-700">
            Tratamos de tudo: candidatura, vistos, alojamento, emprego e
            acompanhamento. Tu só precisas de viver a experiência.
          </p>
        </motion.div>
      </section>

      {/* Público-alvo */}
      <section className="bg-blue-100 py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center text-blue-900"
        >
          <h2 className="text-3xl font-semibold mb-4">Para Quem?</h2>
          <p className="text-lg">
            Para estudantes portugueses prontos para sair da zona de conforto e
            viver algo único.
          </p>
        </motion.div>
      </section>

      {/* Citação final */}
      <section className="bg-white py-16 px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto border-l-4 border-blue-600 pl-6 italic text-gray-800 text-xl"
        >
          “Nós já passámos por tudo o que estás prestes a viver. Agora queremos
          ajudar-te a viver o teu próprio verão inesquecível.”
        </motion.div>
      </section>
    </div>
  );
}
