"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
      className={`min-h-screen px-6 sm:px-8 lg:px-12 py-8 transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-br from-blue-50 to-white text-gray-900"
      }`}
    >
      {/* Dark Mode Toggle Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={toggleDarkMode}
          className="bg-gray-800 hover:bg-gray-700 text-white text-2xl p-3 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105"
        >
          {darkMode ? "🌞" : "🌙"}
        </Button>
      </div>

      <motion.section
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-4 text-center">
          Cari Tempat Parkir Terdekat
        </h1>
        <p className="text-center mb-6 text-gray-600 dark:text-gray-300">
          Temukan parkir terdekat hanya dalam beberapa detik.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center">
          <Input
            placeholder="Masukkan lokasi kamu..."
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
            className="w-full sm:w-3/4 p-3 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 transition duration-300"
          />
          <Button
            onClick={cariParkir}
            className={`w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg shadow-md transition-all duration-300 ${
              loading && "opacity-60 cursor-not-allowed"
            }`}
            disabled={loading}
          >
            {loading ? (
              <motion.div
                className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"
                aria-hidden="true"
              />
            ) : (
              <>
                <Search size={20} />
                Cari
              </>
            )}
          </Button>
        </div>

        <AnimatePresence>
          {hasil && !loading && (
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-2">
                🎉 Ditemukan: {hasil.nama}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Jarak: {hasil.jarak}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Harga: {hasil.harga}</p>
              <Button
                variant="outline"
                className="mt-4 flex items-center gap-2 text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900"
                onClick={() => window.open("https://www.google.com/maps", "_blank")}
              >
                <MapPin size={20} /> Navigasi ke Google Maps
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      <div className="text-center mt-16">
        <Link href="/download">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg transition-transform hover:scale-105">
            Kembali ke Beranda
          </Button>
        </Link>
      </div>
    </main>
  );
}
