"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ReservasiPage() {
  const [lokasi, setLokasi] = useState("");
  const [waktu, setWaktu] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleReservasi = () => {
    alert(`Reservasi berhasil!\nLokasi: ${lokasi}\nWaktu: ${waktu}`);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main
      className={`min-h-screen px-4 sm:px-6 lg:px-12 py-10 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gradient-to-br from-white to-blue-100 text-gray-900"
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
        className="max-w-xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4 text-center">
          Reservasi Tempat Parkir
        </h1>
        <p className="text-center mb-6 text-gray-600">
          Booking slot parkir sebelum kamu sampai tujuan.
        </p>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-1">
              <MapPin size={16} /> Lokasi Parkir
            </label>
            <Input
              placeholder="Contoh: Mall Harmoni"
              value={lokasi}
              onChange={(e) => setLokasi(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-1">
              <Calendar size={16} /> Waktu Reservasi
            </label>
            <Input
              type="datetime-local"
              value={waktu}
              onChange={(e) => setWaktu(e.target.value)}
            />
          </div>

          <Button
            onClick={handleReservasi}
            className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Reservasi Sekarang
          </Button>
        </div>
      </motion.section>
    </main>
  );
}
