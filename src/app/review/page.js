"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ReviewPage() {
  const [nama, setNama] = useState("");
  const [komentar, setKomentar] = useState("");
  const [rating, setRating] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const [reviews, setReviews] = useState([
    { nama: "Andi", rating: 5, komentar: "Sangat membantu dan praktis!" },
    { nama: "Dewi", rating: 4, komentar: "Mudah digunakan, lokasi parkir akurat." },
  ]);

  const handleSubmit = () => {
    if (nama && komentar && rating > 0) {
      setReviews([{ nama, rating, komentar }, ...reviews]);
      setNama("");
      setKomentar("");
      setRating(0);
    } else {
      alert("Isi semua kolom dan berikan rating.");
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main
      className={`min-h-screen px-4 py-10 sm:px-6 lg:px-12 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      {/* Toggle Dark Mode Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={toggleDarkMode}
          className="bg-gray-800 hover:bg-gray-700 text-white text-xl p-3 rounded-full shadow-md transition-all duration-300 ease-in-out"
        >
          {darkMode ? "🌞" : "🌙"}
        </Button>
      </div>

      <section className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center dark:text-blue-400">
          Rating & Review
        </h1>
        <p className="text-center mb-6 text-gray-600 dark:text-gray-300">
          Lihat penilaian dan ulasan dari pengguna lain atau tinggalkan reviewmu sendiri.
        </p>

        <div className="mb-10 space-y-4">
          <Input
            placeholder="Nama Anda"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          <Textarea
            placeholder="Tulis ulasan Anda..."
            value={komentar}
            onChange={(e) => setKomentar(e.target.value)}
            className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />

          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((bintang) => (
              <Star
                key={bintang}
                className={`w-6 h-6 cursor-pointer transition duration-200 ${
                  rating >= bintang
                    ? "text-yellow-500 fill-yellow-400"
                    : "text-gray-400 hover:text-yellow-500"
                }`}
                onClick={() => setRating(bintang)}
              />
            ))}
            <span className="text-sm text-gray-600 ml-2 dark:text-gray-400">{rating} / 5</span>
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Kirim Review
          </Button>
        </div>

        <div className="space-y-4">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              className="border rounded-xl p-4 shadow-sm dark:bg-gray-800 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">{r.nama}</h3>
              <div className="flex items-center text-yellow-500 mb-1">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{r.komentar}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
