"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SocialReview = dynamic(() => import("@/components/SocialReview"), { ssr: false });

const fiturList = [
  {
    link: "/reservasi",
    icon: "🅿️",
    judul: "Reservasi Parkir",
    deskripsi: "Dapatkan tempat parkir dengan mudah hanya dalam beberapa klik.",
  },
  {
    link: "/pencarian",
    icon: "📍",
    judul: "Temukan Lokasi Parkir",
    deskripsi: "Cari lokasi parkir terdekat dengan akurat dan cepat.",
  },
  {
    link: "/pembayaran",
    icon: "💳",
    judul: "Pembayaran Digital",
    deskripsi: "Bayar parkir dengan e-wallet atau kartu kredit.",
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) setDarkMode(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const mainBg = darkMode
    ? "bg-gray-900 text-white"
    : "bg-gradient-to-br from-white to-blue-100 text-gray-900";

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`transition-all duration-300 min-h-screen ${mainBg} px-4 sm:px-6 lg:px-12 py-10`}
      >
        {/* Hero Section */}
        <motion.section
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="inline-block p-2 px-4 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Solusi Parkir Modern
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Nikmati Kemudahan Parkir{" "}
            <span className={darkMode ? "text-gray-100" : "text-blue-600"}>
              Dengan Mudah & Cepat
            </span>
          </motion.h1>

          <motion.p
            className={`text-lg md:text-xl mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Parkir Ojo Sak-sak e Kang Ngebaki Dalan, Ngerti Ora? Marai Macet!!!
          </motion.p>

          <Button
            className="text-white bg-blue-600 hover:bg-blue-700 text-lg px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-transform"
            asChild
          >
            <Link href="/reservasi">Mulai Reservasi</Link>
          </Button>
        </motion.section>

        {/* Fitur Unggulan */}
        <motion.section
          className="text-center max-w-6xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-10">🚀 Fitur Unggulan Kami</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {fiturList.map((fitur, idx) => (
              <Link href={fitur.link} key={idx}>
                <motion.div
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl border dark:border-gray-600 shadow-lg hover:shadow-xl transition-transform hover:-translate-y-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 * idx, duration: 0.8 }}
                >
                  <div className="text-4xl mb-4">{fitur.icon}</div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-gray-200">
                    {fitur.judul}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {fitur.deskripsi}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6">Siap Untuk Kemudahan?</h2>
          <p className="text-lg mb-8 text-gray-300 dark:text-gray-600">
            Segera mulai reservasi parkir dan nikmati pengalaman parkir yang lebih mudah dan cepat.
          </p>
          <Button
            className="text-white bg-green-600 hover:bg-green-700 text-lg px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-transform"
            asChild
          >
            <Link href="/reservasi">Coba Sekarang</Link>
          </Button>
        </motion.section>

        {/* Testimonials */}
        <section className="px-4 sm:px-8 lg:px-16 mb-20">
          <SocialReview />
        </section>

        <Footer darkMode={darkMode} />
      </motion.main>
    </>
  );
}
