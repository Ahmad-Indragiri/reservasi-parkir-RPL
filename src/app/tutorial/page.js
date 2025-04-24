"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function tutorialPage() {
  const steps = [
    {
      title: "1. Cari Lokasi Parkir",
      desc: "Gunakan fitur pencarian untuk menemukan lokasi parkir terdekat dari lokasimu.",
      icon: "📍",
    },
    {
      title: "2. Pilih Slot Parkir",
      desc: "Pilih slot parkir yang tersedia secara real-time melalui tampilan aplikasi.",
      icon: "🅿️",
    },
    {
      title: "3. Lakukan Reservasi",
      desc: "Klik tombol 'Reservasi' dan konfirmasi waktu serta lokasi parkir.",
      icon: "🗓️",
    },
    {
      title: "4. Pembayaran",
      desc: "Selesaikan transaksi dengan metode pembayaran digital yang tersedia.",
      icon: "💳",
    },
    {
      title: "5. Navigasi",
      desc: "Gunakan fitur navigasi untuk diarahkan ke tempat parkir yang kamu pilih.",
      icon: "🧭",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 sm:px-6 lg:px-20 py-12">
      <section className="text-center mb-14">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-4"
        >
          Cara Menggunakan Aplikasi
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Ikuti langkah-langkah berikut untuk melakukan reservasi tempat parkir dengan mudah.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
            className="bg-blue-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition cursor-pointer"
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </section>

      <div className="text-center mt-16">
        <Link href="/">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg transition-transform hover:scale-105">
            Kembali ke Beranda
          </Button>
        </Link>
      </div>
    </main>
  );
}
