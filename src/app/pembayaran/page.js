"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function PembayaranPage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main
      className={`min-h-screen px-4 sm:px-6 lg:px-12 py-10 transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-br from-white to-blue-100 text-gray-900"
      }`}
    >
      {/* Toggle Dark Mode Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={toggleDarkMode}
          className="bg-gray-800 hover:bg-gray-700 text-white text-xl p-3 rounded-full shadow-md"
        >
          {darkMode ? "🌞" : "🌙"}
        </Button>
      </div>

      <motion.section
        className="max-w-3xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-blue-600 dark:text-blue-400">
          Pembayaran Digital
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Bayar dengan e-wallet favoritmu atau coba simulasi pembayaran.
        </p>
      </motion.section>

      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {walletOptions.map((wallet, index) => (
          <motion.div
            key={index}
            className="border rounded-xl p-6 flex flex-col items-center bg-white dark:bg-gray-800 hover:shadow-lg transition duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl mb-4">{wallet.icon}</div>
            <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-gray-100">
              {wallet.nama}
            </h3>
            <p className="text-gray-500 dark:text-gray-300 text-sm">{wallet.deskripsi}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Bayar Sekarang
            </button>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}

const walletOptions = [
  {
    icon: "💳",
    nama: "OVO",
    deskripsi: "Pembayaran cepat & aman dengan OVO.",
  },
  {
    icon: "📱",
    nama: "GoPay",
    deskripsi: "Bayar instan lewat aplikasi Gojek.",
  },
  {
    icon: "🏦",
    nama: "Bank Transfer",
    deskripsi: "Transfer melalui mobile banking kamu.",
  },
  {
    icon: "🪙",
    nama: "DANA",
    deskripsi: "Transaksi nontunai dengan DANA.",
  },
  {
    icon: "💰",
    nama: "ShopeePay",
    deskripsi: "Bayar belanja dan parkir dari Shopee.",
  },
  {
    icon: "🔐",
    nama: "Simulasi",
    deskripsi: "Coba simulasi pembayaran tanpa transaksi asli.",
  },
];
