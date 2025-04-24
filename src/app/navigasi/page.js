"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function NavigasiPage() {
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
        className="max-w-3xl mx-auto text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-blue-600 dark:text-blue-400">
          Navigasi Lokasi Anda
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Arahkan ke lokasi parkir yang telah kamu pilih dengan integrasi Google Maps.
        </p>
      </motion.section>

      <motion.section
        className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 text-xl font-medium">
          🗺️ Peta Lokasi (Simulasi)
        </div>
        <div className="p-6 text-center">
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Klik tombol di bawah untuk membuka Google Maps dan mendapatkan petunjuk arah ke lokasi parkir.
          </p>
          <motion.a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
          >
            Buka di Google Maps
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
}
