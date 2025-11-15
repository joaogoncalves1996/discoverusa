"use client";

import React from "react";
import { motion } from "framer-motion";

const programas = [
  {
    title: "Work and Travel USA",
    description:
      "Queres um verão diferente? Com o Work and Travel USA, vais trabalhar, viajar, fazer amigos de todo o mundo, melhorar o teu inglês e ainda ganhar mais de 2.000 dólares por mês. Uma experiência que nunca vais esquecer!",
  },
  {
    title: "Au Pair USA",
    description:
      "Gostas de crianças? Boas notícias! Vive uma experiência americana única, morando com uma família nos Estados Unidos. Se és uma rapariga entre os 18 e os 26 anos, que adora viajar e quer melhorar o inglês, esta é a aventura ideal.",
  },
  {
    title: "Internship USA",
    description:
      "Faz sobressair o teu perfil profissional! O programa Internship, destinado a estudantes universitários e jovens profissionais, permite-te realizar o estágio dos teus sonhos nos Estados Unidos.",
  },
  {
    title: "Camp USA",
    description:
      "Trabalhar num campo de férias é fixe, mas fazê-lo num dos melhores Camps dos EUA é outra coisa! Se gostas da natureza, de crianças, de diversão e tens aptidões especiais (ténis, vela, música…), este é o programa certo para ti.",
  },
];

export default function ProgramasSection() {
  return (
    <section id="programas" className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-blue-800 text-4xl font-bold mb-2"
        >
          PROGRAMAS
        </motion.h2>
        <p className="text-xl text-blue-600">DiscoverUSA</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {programas.map((prog, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-lg rounded-2xl p-6 border border-blue-100 hover:shadow-xl transition cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">
              {prog.title}
            </h3>
            <p className="text-gray-700">{prog.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
