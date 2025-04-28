"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import BookingButton from "@/components/BookingButton";
import toast from "react-hot-toast";
import Link from "next/link";

export default function ReservasiPage() {
  const [lokasi, setLokasi] = useState("");
  const [waktu, setWaktu] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [history, setHistory] = useState([]);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const lokasiList = [
    "Artos",
    "Kampus Unimma 1",
    "Kampus Unimma 2",
    "Rindam 4 Diponegoro",
    "Matahari Alum-alun",
    "Teko kono sak-sak ee jenengan",
  ];

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) setDarkMode(JSON.parse(savedMode));

    const savedHistory = JSON.parse(localStorage.getItem("reservasiHistory"));
    if (savedHistory) setHistory(savedHistory);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    localStorage.setItem("reservasiHistory", JSON.stringify(history));
  }, [darkMode, history]);

  const handleReservasi = () => {
    if (!lokasi || !waktu) {
      toast.error("Mohon isi semua data terlebih dahulu.");
      return;
    }

    toast.loading("Memproses reservasi...", { id: "reservasi" });

    setTimeout(() => {
      const newReservasi = { lokasi, waktu };
      const updatedHistory = [newReservasi, ...history].slice(0, 5);
      setHistory(updatedHistory);
      localStorage.setItem("reservasiHistory", JSON.stringify(updatedHistory));
      toast.success("Reservasi berhasil!", { id: "reservasi" });
    }, 800);
  };

  const handleRatingChange = (newRating) => setRating(newRating);
  const handleReviewChange = (e) => setReview(e.target.value);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleHapusRiwayat = () => {
    toast(
      (t) => (
        <span>
          Apakah kamu yakin ingin menghapus semua riwayat?
          <div className="mt-2 flex justify-end gap-2">
            <Button
              onClick={() => toast.dismiss(t.id)}
              variant="ghost"
              size="sm"
            >
              Batal
            </Button>
            <Button
              onClick={() => {
                setHistory([]);
                localStorage.removeItem("reservasiHistory");
                toast.success("Riwayat berhasil dihapus");
                toast.dismiss(t.id);
              }}
              variant="destructive"
              size="sm"
            >
              Hapus
            </Button>
          </div>
        </span>
      ),
      { duration: 8000 }
    );
  };

  const handleKirimReview = () => {
    if (rating === 0 || review.trim() === "") {
      toast.error("Harap isi rating dan review terlebih dahulu.");
      return;
    }

    toast.success(`Review terkirim! (${rating} ⭐️)`, { duration: 3000 });
    setRating(0);
    setReview("");
  };

  return (
    <main
      className={`min-h-screen px-4 sm:px-6 lg:px-12 py-10 transition-colors duration-500 ${darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-br from-white to-blue-100 text-gray-900"
        }`}
    >
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
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4 text-center">
          Reservasi Tempat Parkir
        </h1>
        <p className="text-center mb-6 text-gray-600 dark:text-gray-300">
          Booking slot parkir sebelum kamu sampai tujuan.
        </p>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium flex items-center gap-2 mb-1">
              <MapPin size={16} /> Lokasi Parkir
            </label>
            <select
              value={lokasi}
              onChange={(e) => setLokasi(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Pilih Lokasi
              </option>
              {lokasiList.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium flex items-center gap-2 mb-1">
              <Calendar size={16} /> Waktu Reservasi
            </label>
            <Input
              type="datetime-local"
              value={waktu}
              onChange={(e) => setWaktu(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {lokasi && (
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-sm text-gray-900 dark:text-white">
              <p>
                <strong>Estimasi waktu tiba:</strong> sekitar 15 menit dari lokasi Anda
              </p>
            </div>
          )}

          <div onClick={handleReservasi}>
            <BookingButton />
          </div>
        </div>

        {history.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
              Riwayat Reservasi
            </h2>
            <ul className="space-y-2">
              {history.map((item, index) => (
                <li
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-sm text-gray-900 dark:text-white"
                >
                  <p>
                    <strong>Lokasi:</strong> {item.lokasi}
                  </p>
                  <p>
                    <strong>Waktu:</strong> {item.waktu}
                  </p>
                </li>
              ))}
            </ul>

            <div className="text-center mt-6">
              <Button
                onClick={handleHapusRiwayat}
                className="bg-red-600 text-white hover:bg-red-700 transition"
              >
                Hapus Semua Riwayat
              </Button>
            </div>
          </div>
        )}

        {/* Penilaian Lokasi */}
        {lokasi && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
              Penilaian Lokasi
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Button
                        onClick={() => handleRatingChange(star)}
                        className={`p-2 ${rating >= star ? "text-yellow-500" : "text-gray-400"}`}
                      >
                        ★
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2">Review</label>
                <Input
                  value={review}
                  onChange={handleReviewChange}
                  placeholder="Tulis reviewmu tentang lokasi ini..."
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <Button
                onClick={handleKirimReview}
                className="bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Kirim Review
              </Button>
            </div>
          </div>
        )}
      </motion.section>

      <div className="text-center mt-16">
        <Link href="/download">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg transition-transform hover:scale-105">
            Kembali ke Beranda
          </Button>
        </Link>
      </div>
    </main>
  );
}
