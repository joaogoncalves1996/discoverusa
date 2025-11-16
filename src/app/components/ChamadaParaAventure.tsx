"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { waHref } from "../constants";

declare global {
  interface Window {
    Calendly: {
      initPopupWidget(options: { url: string }): void;
      closePopupWidget?(): void;
    };
  }
}

export default function ChamadaParaAventura() {
  return (
    <section className="bg-blue-100 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
        >
          Estás a um passo de começar a tua aventura!
        </motion.h2>
        <p className="text-xl text-blue-800 mb-10">
          Vive o sonho americano com a DiscoverUSA
        </p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-lg text-blue-900 space-y-4 text-left max-w-xl mx-auto mb-8"
        >
          <li>
            ✨ Tens espírito aventureiro e queres explorar novos horizontes?
          </li>
          <li>
            ✈️ Sonhas em viajar e mergulhar numa experiência autêntica nos EUA?
          </li>
          <li>
            🗣️ Queres melhorar o teu inglês de forma natural, vivendo o dia a
            dia americano?
          </li>
        </motion.ul>

        <p className="text-lg text-blue-800 font-medium max-w-2xl mx-auto">
          Se isto soa a ti, está na hora de dar o próximo passo e transformar o
          teu sonho em realidade.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8"
        >
          <div className="flex justify-center gap-4">
            <button
              onClick={() =>
                window.Calendly.initPopupWidget({
                  url: "https://calendly.com/discoverusaoficial-info/20min",
                })
              }
              className="inline-block bg-blue-800 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition cursor-pointer"
            >
              Agende uma reunião
            </button>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-blue-900 shadow hover:opacity-90 transition"
            >
              <FaWhatsapp size={32} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
