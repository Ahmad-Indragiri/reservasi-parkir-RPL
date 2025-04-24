"use client"; // Menandakan bahwa ini adalah komponen client

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main
      className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-white to-blue-100 text-gray-900'} px-4 sm:px-6 lg:px-12 py-10`}
    >
      {/* Dark Mode Toggle Button */}
      <div className="fixed bottom-4 right-4">
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

      {/* Peta Interaktif - Placeholder */}
      <section className="text-center my-16">
        <h2 className="text-3xl font-bold mb-10">Peta Lokasi Parkir</h2>
        <div className="w-full h-64 bg-gray-300 rounded-xl shadow-md">
          {/* Placeholder for map (can integrate Google Maps API later) */}
          <p className="text-center text-gray-600 dark:text-gray-200 py-20">Peta akan muncul di sini</p>
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

    </main>
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
