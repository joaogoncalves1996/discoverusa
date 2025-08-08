import React from "react";
import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-12 px-4">
      {/* Texto institucional em cima */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-xl font-semibold mb-2">DiscoverUSA</h2>
        <p className="text-sm text-blue-100 leading-relaxed">
          Especialistas em experiências de intercâmbio nos EUA para estudantes
          portugueses. Ajudamos-te a viver o sonho americano com apoio total —
          da candidatura à viagem.
        </p>
      </div>

      {/* Bloco com 3 colunas */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
        {/* Contacto */}
        <div className="text-center md:text-left space-y-3">
          <h3 className="text-lg font-semibold">Contacto</h3>
          <p className="flex justify-center md:justify-start items-center gap-2 text-sm">
            <MdEmail size={18} /> discoverusa@gmail.com
          </p>
          <p className="flex justify-center md:justify-start items-center gap-2 text-sm">
            <BsTelephoneFill size={16} /> +351 913422406 | +351 934255235
          </p>
        </div>

        {/* Redes Sociais */}
        <div className="text-center md:text-left space-y-3">
          <h3 className="text-lg font-semibold">Segue-nos</h3>
          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="https://instagram.com/discoverusa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={24}
                className="hover:text-blue-300 transition"
              />
            </a>
            <a
              href="https://tiktok.com/@discoverusa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok size={24} className="hover:text-blue-300 transition" />
            </a>
            <a
              href="https://linkedin.com/company/discoverusa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={24}
                className="hover:text-blue-300 transition"
              />
            </a>
          </div>
        </div>

        {/* Links Rápidos */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Links Rápidos</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li>
              <Link href="/" className="hover:text-white transition">
                Início
              </Link>
            </li>
            <li>
              <Link href="/quem-somos" className="hover:text-white transition">
                Quem Somos
              </Link>
            </li>
            <li>
              <Link href="/programas" className="hover:text-white transition">
                Programas
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Direitos Reservados */}
      <div className="border-t border-blue-800 text-center text-sm text-blue-200 py-4">
        © {new Date().getFullYear()} Discover USA. Todos os direitos reservados.
      </div>
    </footer>
  );
}
