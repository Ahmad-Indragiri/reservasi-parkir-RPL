"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PencarianPage() {
  const [lokasi, setLokasi] = useState("");
  const [hasil, setHasil] = useState(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) setDarkMode(JSON.parse(savedMode));
  }, []);

  const cariParkir = () => {
    setLoading(true);
    setHasil(null); // reset hasil sebelumnya
  
    const lokasiList = [
      "Artos",
      "Kampus Unimma 1",
      "Kampus Unimma 2",
      "Rindam 4 Diponegoro",
      "Matahari Alum-alun",
      "Teko kono sak-sak ee jenengan",
    ];
  
    const randomLokasi = lokasiList[Math.floor(Math.random() * lokasiList.length)];
  
    setTimeout(() => {
      setHasil({
        nama: randomLokasi,
        jarak: `${(Math.random() * 900 + 100).toFixed(0)} meter`, // 100m - 1000m
        harga: `Rp${(Math.random() * 4000 + 3000).toFixed(0)}/jam`, // Rp3000 - Rp7000
      });
      setLoading(false);
    }, 1500);
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
          className="bg-gray-800 hover:bg-gray-700 text-white text-xl p-3 rounded-full shadow-md transition-all duration-300"
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
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4 text-center">
          Pencarian Lokasi Parkir
        </h1>
        <p className="text-center mb-6 text-gray-600 dark:text-gray-300">
          Temukan tempat parkir terdekat dari lokasi kamu secara instan.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <Input
            placeholder="Masukkan lokasi kamu..."
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
            className="focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 transition"
          />
          <Button
            onClick={cariParkir}
            className={`flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 ${
              loading && "opacity-60 cursor-not-allowed"
            }`}
            disabled={loading}
          >
            {loading ? (
              <motion.div
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                aria-hidden="true"
              />
            ) : (
              <>
                <Search size={18} /> Cari
              </>
            )}
          </Button>
        </div>

        <AnimatePresence>
          {hasil && !loading && (
            <motion.div
              className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-400">
                🎉 Ditemukan: {hasil.nama}
              </h3>
              <p>Jarak: {hasil.jarak}</p>
              <p>Harga: {hasil.harga}</p>
              <Button
                variant="outline"
                className="mt-4 flex items-center gap-2 text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900"
                onClick={() => window.open("https://www.google.com/maps", "_blank")}
              >
                <MapPin size={18} /> Navigasi dengan Google Maps
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </main>
  );
}
