"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaHandsHelping, FaChartLine, FaRegLightbulb } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const fiturPerusahaan = [
  {
    id: 1,
    icon: <FaHandsHelping className="text-4xl text-blue-600" />,
    judul: "Komitmen terhadap Kualitas",
    deskripsi:
      "Kami berfokus pada kualitas yang tinggi dalam setiap produk dan layanan yang kami tawarkan.",
  },
  {
    id: 2,
    icon: <FaChartLine className="text-4xl text-blue-600" />,
    judul: "Inovasi Berkelanjutan",
    deskripsi:
      "Kami terus berinovasi untuk memastikan produk dan layanan kami tetap terdepan di pasar.",
  },
  {
    id: 3,
    icon: <FaRegLightbulb className="text-4xl text-blue-600" />,
    judul: "Mendorong Kreativitas",
    deskripsi:
      "Kami mendukung kreativitas dalam setiap aspek perusahaan, memupuk ide-ide baru dan solutif.",
  },
];

export default function Perusahaan() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-12 min-h-screen">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">Tentang Perusahaan Kami</h1>
        <section className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            Kami adalah perusahaan yang berfokus pada inovasi, kualitas, dan kepuasan pelanggan. Sejak berdiri, kami telah
            melayani ribuan pelanggan dengan produk dan layanan terbaik.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Nilai-Nilai Kami</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {fiturPerusahaan.map((fitur) => (
              <div
                key={fitur.id}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300"
              >
                {fitur.icon}
                <h3 className="text-xl font-semibold text-gray-900 mt-4">{fitur.judul}</h3>
                <p className="text-sm text-gray-600 mt-2">{fitur.deskripsi}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Mengapa Memilih Kami?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Kami bukan hanya perusahaan biasa; kami adalah mitra yang dapat diandalkan untuk masa depan yang lebih
            baik, dengan solusi yang inovatif dan dukungan yang luar biasa.
          </p>
          <Button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 rounded-full py-2 px-6 text-lg">
            Bergabung Dengan Kami
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
}
