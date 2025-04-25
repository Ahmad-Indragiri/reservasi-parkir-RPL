"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const lokasiParkir = [
  "Artos",
  "Kampus Unimma 1",
  "Kampus Unimma 2",
  "Rindam 4 Diponegoro",
  "Matahari Alun-alun",
  "Teko kono sak-sak ee jenengan",
];

export default function NavigasiPage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) setDarkMode(JSON.parse(savedMode));
  }, []);

  const generateMapLink = (lokasi) => {
    const query = encodeURIComponent(lokasi + " Magelang");
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
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
          className="bg-gray-800 hover:bg-gray-700 text-white text-xl p-3 rounded-full shadow-lg"
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
          Navigasi Lokasi Parkir
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Pilih lokasi parkir dan buka petunjuk arah via Google Maps.
        </p>
      </motion.section>

      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {lokasiParkir.map((lokasi, i) => (
          <motion.a
            key={i}
            href={generateMapLink(lokasi)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300 p-5 rounded-xl shadow-lg group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-300">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">
                {lokasi}
              </h2>
              <p className="text-sm text-white">
                Klik untuk buka di Google Maps
              </p>
            </div>
          </motion.a>
        ))}
      </motion.section>
    </main>
  );
}
