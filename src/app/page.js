import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-900 px-4 sm:px-6 lg:px-12 py-10">
      {/* Hero Section */}
      <section className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Reservasi Parkir <span className="text-blue-600">Mudah & Cepat</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Cari, reservasi, dan navigasi ke lokasi parkir hanya dari ponselmu.
        </p>
        <Button className="text-white bg-blue-600 hover:bg-blue-700 text-lg px-6 py-3 rounded-xl shadow-md transition">
          Cari Tempat Parkir
        </Button>
      </section>

      {/* Fitur Unggulan */}
      <section>
        <h2 className="text-3xl font-semibold mb-10 text-center">
          🚀 Fitur Unggulan
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {fiturList.map((fitur, idx) => (
            <Link href={fitur.link} key={idx}>
              <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer">
                <div className="text-4xl mb-4">{fitur.icon}</div>
                <h3 className="text-lg font-bold mb-2">{fitur.judul}</h3>
                <p className="text-gray-600 text-sm">{fitur.deskripsi}</p>
              </div>
            </Link>
          ))}
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
    deskripsi: "Pantau ketersediaan secara Real-Time.",
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
