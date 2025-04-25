"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

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
      className={`min-h-screen transition-colors duration-500 px-4 py-10 ${
        darkMode ? "bg-gray-900 text-white" : "bg-blue-50 text-gray-900"
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

      <section className="max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sensor Parkir
        </motion.h1>
        <p className="text-center mb-8 text-gray-600 dark:text-gray-400">
          Pantau ketersediaan slot secara real-time (simulasi setiap 5 detik).
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <AnimatePresence>
            {slots.map((isAvailable, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className={`rounded-xl p-6 text-center font-semibold shadow-md transition-all duration-300 ${
                  isAvailable
                    ? "bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200"
                    : "bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200"
                }`}
              >
                <span className="block text-lg mb-1">Slot #{index + 1}</span>
                <p className="text-sm">{isAvailable ? "Tersedia" : "Terisi"}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
