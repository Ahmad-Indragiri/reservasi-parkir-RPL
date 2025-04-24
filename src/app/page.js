"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import dynamic from "next/dynamic";

export default function Home() {
  const SocialReview = dynamic(() => import("@/components/SocialReview"), { ssr: false });
  const [darkMode, setDarkMode] = useState(false);
  const [lokasi, setLokasi] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const lokasiList = [
    "Mall Harmoni",
    "Stasiun Bekasi",
    "Pasar Baru",
    "Bandara Soekarno-Hatta",
    "RS Hermina",
    "Gedung Graha Mandiri"
  ];

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) setDarkMode(JSON.parse(savedMode));
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLokasiChange = (e) => {
    const input = e.target.value;
    setLokasi(input);
    if (input.length > 0) {
      const filtered = lokasiList.filter((item) =>
        item.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (lokasiDipilih) => {
    setLokasi(lokasiDipilih);
    setSuggestions([]);
  };

  useEffect(() => {
    const handleOffline = () => alert("Kamu sedang offline");
    window.addEventListener("offline", handleOffline);
    return () => window.removeEventListener("offline", handleOffline);
  }, []);
  

  return (
    <><Navbar />
    <main
      className={`transition-colors duration-300 min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-white to-blue-100 text-gray-900'} px-4 sm:px-6 lg:px-12 py-10`}
    >
      {/* Dark Mode Toggle Button */}
      <div className="fixed bottom-4 left-4">
        <Button
          className={`text-white bg-gray-800 hover:bg-gray-700 text-sm p-3 rounded-full shadow-md transition`}
          onClick={toggleDarkMode}
        >
          {darkMode ? '🌞' : '🌙'}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-block p-2 px-4 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4 shadow-sm">
          Solusi Parkir Modern
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
          Reservasi Parkir <span className="text-blue-600">Mudah & Cepat</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-200 mb-6">
          Cari, reservasi, dan navigasi ke lokasi parkir hanya dari ponselmu.
        </p>
        <Button
          className="text-white bg-blue-600 hover:bg-blue-700 text-lg px-6 py-3 rounded-xl shadow-md transform transition-transform hover:scale-105 focus:outline-none"
          asChild
        >
          <Link href="/pencarian">Cari Tempat Parkir</Link>
        </Button>
      </section>

      {/* Auto Suggest Input */}
      <section className="text-center max-w-xl mx-auto mb-16">
        <h2 className="text-xl font-semibold mb-4">🔍 Cari Lokasi Parkir</h2>
        <input
          type="text"
          value={lokasi}
          onChange={handleLokasiChange}
          placeholder="Ketik lokasi parkir..."
          className="w-full px-4 py-3 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" />
        {suggestions.length > 0 && (
          <ul className="border rounded mt-1 bg-white shadow-md text-sm max-h-40 overflow-y-auto z-50 relative text-left">
            {suggestions.map((saran, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(saran)}
                className="px-4 py-2 cursor-pointer hover:bg-blue-100"
              >
                {saran}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Peta Interaktif - Placeholder */}
      <section className="text-center my-16">
        <h2 className="text-3xl font-bold mb-10">Peta Lokasi Parkir</h2>
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2 dark:text-white">📍 Peta Lokasi Magelang</h2>
          <div className="w-full h-64 sm:h-96 rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Peta Magelang"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126406.57393787434!2d110.14304739616945!3d-7.476759219992282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a833a4bfbba8d%3A0x3027a76e352bc50!2sKota%20Magelang%2C%20Jawa%20Tengah!5e0!3m2!1sen!2sid!4v1713973960000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Fitur Section */}
      <section>
        <h2 className="text-3xl font-bold mb-10 text-center">🚀 Fitur Unggulan</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {fiturList.map((fitur, idx) => (
            <Link href={fitur.link} key={idx}>
              <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-lg hover:-translate-y-1 transition cursor-pointer">
                <div className="text-4xl mb-4">{fitur.icon}</div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-gray-200">{fitur.judul}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{fitur.deskripsi}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Pembayaran - Simulasi */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">💳 Panduan Penggunaan</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Pelajari cara menggunakan aplikasi reservasi parkir dengan mudah dan cepat.
        </p>
        <div className="w-full max-w-sm mx-auto">
          <Link href="/tutorial">
            <Button
              className="text-white bg-blue-600 hover:bg-blue-700 text-lg px-6 py-3 rounded-xl shadow-md transform transition-transform hover:scale-105 focus:outline-none"
            >
              Lihat Tutorial
            </Button>
          </Link>
        </div>
      </section>

      <SocialReview />

      <Chatbot/>

    </main><Footer/></>
  );
}

const fiturList = [
  {
    link: "/reservasi",
    icon: "🅿️",
    judul: "Reservasi Tempat Parkir",
    deskripsi: "Booking slot parkir sebelum sampai tujuan.",
  },
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
    link: "/review",
    icon: "⭐️⭐️⭐️",
    judul: "Rating & Review",
    deskripsi: "Penilaian dan ulasan dari pengguna.",
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
];
