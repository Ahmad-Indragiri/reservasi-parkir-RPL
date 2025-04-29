"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import dynamic from "next/dynamic";

const SocialReview = dynamic(() => import("@/components/SocialReview"), { ssr: false });

const fiturList = [
  {
    link: "/pencarian",
    icon: "📍",
    judul: "Pencarian Lokasi Parkir",
    deskripsi: "Temukan tempat parkir terdekat secara instan.",
  },
  {
    link: "/sensor",
    icon: "📡",
    judul: "Sensor Parkir",
    deskripsi: "Pantau ketersediaan secara real-time.",
  },
  {
    link: "/reservasi",
    icon: "🅿️",
    judul: "Reservasi Tempat Parkir",
    deskripsi: "Booking slot parkir sebelum sampai tujuan.",
  },
  {
    link: "/pembayaran",
    icon: "💳",
    judul: "Pembayaran Digital",
    deskripsi: "Bayar dengan e-wallet atau metode digital lainnya.",
  },
  {
    link: "/navigasi",
    icon: "🗺️",
    judul: "Navigasi Lokasi Anda",
    deskripsi: "Arahkan ke lokasi parkir dengan Google Maps.",
  },
  {
    link: "/review",
    icon: "⭐️⭐️⭐️",
    judul: "Rating, Review, & Kritikan",
    deskripsi: "Penilaian dan ulasan dari pengguna. Bisa Juga Bacoti Developer",
  },
];

const lokasiList = [
  "Artos",
  "Kampus Unimma 1",
  "Kampus Unimma 2",
  "Rindam 4 Diponegoro",
  "Matahari Alum-alun",
  "Teko kono sak-sak ee jenengan",
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [lokasi, setLokasi] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const userProfile = {
    name: "Indra",
    image: "/lambang-unimma.png",
  };

  // Load dark mode preference
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Offline warning
  useEffect(() => {
    const handleOffline = () => alert("Kamu sedang offline");
    window.addEventListener("offline", handleOffline);
    return () => window.removeEventListener("offline", handleOffline);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  const handleLokasiChange = useCallback((e) => {
    const input = e.target.value;
    setLokasi(input);
    setSuggestions(
      input.length > 0
        ? lokasiList.filter((item) =>
          item.toLowerCase().includes(input.toLowerCase())
        )
        : []
    );
  }, []);

  const handleSuggestionClick = useCallback((lokasiDipilih) => {
    setLokasi(lokasiDipilih);
    setSuggestions([]);
  }, []);

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} userProfile={userProfile} />
      <main
        className={`transition-colors duration-300 min-h-screen pt-20 ${darkMode
            ? "bg-gray-900 text-white"
            : "bg-gradient-to-br from-white to-blue-100 text-gray-900"
          } px-4 sm:px-6 lg:px-12 pb-10`}
      >

        {/* Toggle Dark Mode */}
        <div className="fixed bottom-4 left-4 z-50">
          <Button
            className="text-white bg-gray-800 hover:bg-gray-700 text-sm p-3 rounded-full shadow-md"
            onClick={toggleDarkMode}
          >
            {darkMode ? "🌞" : "🌙"}
          </Button>
        </div>

        {/* Hero Section */}
        <section className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block p-2 px-4 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4 shadow-sm">
            Solusi Parkir Modern
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
            Reservasi Parkir{" "}
            <span className={darkMode ? "text-gray-100" : "text-blue-600"}>
              Mudah & Cepat
            </span>
          </h1>
          <p className={`text-lg md:text-xl mb-6 ${darkMode ? "text-gray-200" : "text-gray-600"}`}>
            Cari, reservasi, dan navigasi ke lokasi parkir hanya dari ponselmu.
          </p>
        </section>

        {/* Input Lokasi */}
        <section className="text-center max-w-xl mx-auto mb-16 relative z-50">
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? "text-gray-200" : "text-gray-900"}`}>
            🔍 Cari Lokasi Parkir
          </h2>
          <input
            type="text"
            value={lokasi}
            onChange={handleLokasiChange}
            placeholder="Ketik lokasi parkir..."
            className={`w-full px-4 py-3 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? "bg-gray-800 text-white border-gray-600" : ""
              }`}
          />
          {suggestions.length > 0 && (
            <ul className="absolute left-0 w-full border rounded mt-1 bg-white dark:bg-gray-800 shadow-md text-sm max-h-40 overflow-y-auto">
              {suggestions.map((saran, idx) => (
                <li
                  key={idx}
                  onClick={() => handleSuggestionClick(saran)}
                  className={`px-4 py-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-700 ${darkMode ? "text-white" : "text-gray-900"
                    }`}
                >
                  {saran}
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Peta Lokasi */}
        <section className="text-center my-16">
          <h2 className={`text-3xl font-bold mb-10 ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
            Peta Lokasi Parkir
          </h2>
          <div className="w-full h-64 sm:h-96 rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Peta Magelang"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19907.47019732115!2d110.22876463155714!3d-7.4733120561096465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7055c5b0a80157%3A0x62f6a4a8702d77e1!2sMagelang%2C%20Central%20Java%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1677391451809!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* Fitur Unggulan */}
        <section>
          <h2 className="text-3xl font-bold mb-10 text-center">🚀 Fitur Unggulan</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {fiturList.map((fitur, idx) => (
              <Link href={fitur.link} key={idx}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border dark:border-gray-600 shadow-sm hover:shadow-lg hover:-translate-y-1 transition cursor-pointer">
                  <div className="text-4xl mb-4">{fitur.icon}</div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-gray-200">
                    {fitur.judul}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{fitur.deskripsi}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Panduan Penggunaan */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">💳 Panduan Penggunaan</h2>
          <p className="text-gray-300 dark:text-gray-600 mb-8">
            Pelajari cara menggunakan aplikasi reservasi parkir dengan mudah dan cepat.
          </p>
          <div className="w-full max-w-sm mx-auto">
            <Link href="/tutorial">
              <Button className="text-white bg-blue-600 hover:bg-blue-700 text-lg px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-transform">
                Lihat Tutorial
              </Button>
            </Link>
          </div>
        </section>

        {/* Komponen Tambahan */}
        <SocialReview />
        <Chatbot />
      </main>
      <Footer darkMode={darkMode} />
    </>
  );
}
