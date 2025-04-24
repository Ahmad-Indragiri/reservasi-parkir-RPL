"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function PencarianPage() {
  const [lokasi, setLokasi] = useState("");
  const [hasil, setHasil] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const cariParkir = () => {
    // Simulasi hasil pencarian
    setHasil({
      nama: "Parkiran Mall Harmoni",
      jarak: "300 meter",
      harga: "Rp5.000/jam",
    });
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
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4 text-center">
          Pencarian Lokasi Parkir
        </h1>
        <p className="text-center mb-6 text-gray-600">
          Temukan tempat parkir terdekat dari lokasi kamu secara instan.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <Input
            placeholder="Masukkan lokasi kamu..."
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
          />
          <Button onClick={cariParkir} className="flex items-center gap-2 bg-blue-600 text-white">
            <Search size={18} /> Cari
          </Button>
        </div>

        {hasil && (
          <motion.div
            className="bg-gray-100 p-5 rounded-xl shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              🎉 Ditemukan: {hasil.nama}
            </h3>
            <p>Jarak: {hasil.jarak}</p>
            <p>Harga: {hasil.harga}</p>
            <Button
              variant="outline"
              className="mt-4 flex items-center gap-2 text-blue-600 border-blue-600"
              onClick={() => window.open("https://www.google.com/maps", "_blank")}
            >
              <MapPin size={18} /> Navigasi dengan Google Maps
            </Button>
          </motion.div>
        )}
      </motion.section>
    </main>
  );
}
