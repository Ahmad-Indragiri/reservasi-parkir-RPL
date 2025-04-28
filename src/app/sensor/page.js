"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SensorPage() {
  const [slots, setSlots] = useState(Array.from({ length: 12 }, () => Math.random() > 0.5));
  const [darkMode, setDarkMode] = useState(false);

  // Simulasi update status slot parkir setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setSlots(Array.from({ length: 12 }, () => Math.random() > 0.5));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) setDarkMode(JSON.parse(saved));
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  return (
    <main
      className={`min-h-screen px-4 py-10 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-blue-50 to-white text-gray-900"
      }`}
    >
      {/* Dark Mode Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleDarkMode}
          className="bg-gray-800 hover:bg-gray-700 text-white text-2xl p-4 rounded-full shadow-xl transform hover:scale-110 transition-all duration-300"
        >
          {darkMode ? "🌞" : "🌙"}
        </Button>
      </div>

      <section className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-center mb-8 leading-tight tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sensor Parkir Real-time
        </motion.h1>
        <p className="text-center mb-10 text-lg sm:text-xl text-gray-600 dark:text-gray-400">
          Pantau ketersediaan slot parkir secara real-time dengan update setiap 5 detik.
        </p>

        {/* Slot Parkir */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 lg:gap-10">
          <AnimatePresence>
            {slots.map((isAvailable, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`rounded-xl p-6 text-center font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 ${
                  isAvailable
                    ? "bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200"
                    : "bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200"
                }`}
              >
                <span className="block text-lg mb-2">Slot #{index + 1}</span>
                <p className="text-sm">{isAvailable ? "Tersedia" : "Terisi"}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <div className="text-center mt-16">
        <Link href="/download">
          <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg shadow-xl transition-transform hover:scale-105">
            Kembali ke Beranda
          </Button>
        </Link>
      </div>
    </main>
  );
}
