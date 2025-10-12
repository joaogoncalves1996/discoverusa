"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PassosParaComecar() {
  const steps = [
    {
      numero: "1",
      titulo: "Contacte-nos",
      descricao:
        "A DiscoverUSA aconselha-te sobre qual o melhor programa para ti.",
    },
    {
      numero: "2",
      titulo: "Formulário de candidatura",
      descricao: "A DiscoverUSA gere toda a documentação oficial.",
    },
    {
      numero: "3",
      titulo: "Visto",
      descricao: "Embarcas para a maior aventura da tua vida.",
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-900"
        >
          3 PASSOS SIMPLES PARA COMEÇAR A AVENTURA
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 border border-blue-200 p-6 rounded-2xl shadow hover:shadow-lg transition text-center"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-blue-800 text-white font-bold text-xl rounded-full mb-4 mx-auto">
              {step.numero}
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              {step.titulo}
            </h3>
            <p className="text-blue-800">{step.descricao}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
