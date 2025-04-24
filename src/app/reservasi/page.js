"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ReservasiPage() {
  const [lokasi, setLokasi] = useState("");
  const [waktu, setWaktu] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [history, setHistory] = useState([]);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const lokasiList = [
    "Mall Harmoni",
    "Stasiun Bekasi",
    "Pasar Baru",
    "Bandara Soekarno-Hatta",
    "RS Hermina",
    "Gedung Graha Mandiri"
  ];

  // Ambil darkMode dan riwayat reservasi dari localStorage saat pertama kali load
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) setDarkMode(JSON.parse(savedMode));

    const savedHistory = JSON.parse(localStorage.getItem("reservasiHistory"));
    if (savedHistory) setHistory(savedHistory);
  }, []);

  // Simpan ke localStorage setiap kali darkMode atau history berubah
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    localStorage.setItem("reservasiHistory", JSON.stringify(history));
  }, [darkMode, history]);

  const handleReservasi = () => {
    if (!lokasi || !waktu) {
      alert("Mohon isi semua data terlebih dahulu.");
      return;
    }

    // Simulasi loading atau proses backend
    setTimeout(() => {
      // Tambahkan reservasi ke riwayat
      const newReservasi = { lokasi, waktu };
      const updatedHistory = [newReservasi, ...history].slice(0, 5); // Simpan 3-5 reservasi terakhir
      setHistory(updatedHistory);

      // Simpan ke localStorage
      localStorage.setItem("reservasiHistory", JSON.stringify(updatedHistory));

      alert(`✅ Reservasi berhasil!\n📍 Lokasi: ${lokasi}\n🕒 Waktu: ${waktu}`);
    }, 800);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

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
      {/* Tombol Toggle Dark Mode */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={toggleDarkMode}
          className="bg-gray-800 hover:bg-gray-700 text-white text-xl p-3 rounded-full shadow-md"
        >
          {darkMode ? "🌞" : "🌙"}
        </Button>
      </div>

      {/* Section Konten */}
      <motion.section
        className="max-w-xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4 text-center">
          Reservasi Tempat Parkir
        </h1>
        <p className="text-center mb-6 text-gray-600 dark:text-gray-300">
          Booking slot parkir sebelum kamu sampai tujuan.
        </p>

        <div className="space-y-4">
          {/* Input Lokasi */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2 mb-1">
              <MapPin size={16} /> Lokasi Parkir
            </label>
            <Input
              placeholder="Contoh: Mall Harmoni"
              value={lokasi}
              onChange={(e) => setLokasi(e.target.value)}
            />
          </div>

          {/* Input Waktu */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2 mb-1">
              <Calendar size={16} /> Waktu Reservasi
            </label>
            <Input
              type="datetime-local"
              value={waktu}
              onChange={(e) => setWaktu(e.target.value)}
            />
          </div>

          {/* Estimasi Waktu Tiba (Dummy) */}
          {lokasi && (
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-sm text-gray-800 dark:text-gray-200">
              <p><strong>Estimasi waktu tiba:</strong> sekitar 15 menit dari lokasi Anda</p>
            </div>
          )}

          {/* Tombol Reservasi */}
          <Button
            onClick={handleReservasi}
            className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Reservasi Sekarang
          </Button>
        </div>

        {/* Riwayat Reservasi */}
        {history.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
              Riwayat Reservasi
            </h2>
            <ul className="space-y-2">
              {history.map((item, index) => (
                <li key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>Lokasi:</strong> {item.lokasi}</p>
                  <p><strong>Waktu:</strong> {item.waktu}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Penilaian Lokasi */}
        {lokasi && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
              Penilaian Lokasi
            </h2>
            <div className="space-y-4">
              {/* Rating */}
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Button
                      key={star}
                      onClick={() => handleRatingChange(star)}
                      className={`p-2 ${rating >= star ? "text-yellow-500" : "text-gray-400"}`}
                    >
                      ★
                    </Button>
                  ))}
                </div>
              </div>

              {/* Review */}
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Review</label>
                <Input
                  value={review}
                  onChange={handleReviewChange}
                  placeholder="Tulis reviewmu tentang lokasi ini..."
                  rows={4}
                  className="resize-none"
                />
              </div>
            </div>
            <div className="mt-4">
              <Button
                onClick={() => alert(`Rating: ${rating} Bintang\nReview: ${review}`)}
                className="bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Kirim Penilaian
              </Button>
            </div>
          </div>
        )}
      </motion.section>
    </main>
  );
}
