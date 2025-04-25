"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // For navigation

export default function SimulasiPembayaranPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [isPaymentStep, setIsPaymentStep] = useState(false);
  const router = useRouter();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setIsPaymentStep(false); // Reset step view when method changes
  };

  const handleStartPayment = () => {
    setIsPaymentStep(true); // Show payment steps after user confirms to proceed
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
          className="bg-gray-800 hover:bg-gray-700 text-white text-xl p-3 rounded-full shadow-md transition-all duration-300 ease-in-out"
        >
          {darkMode ? "🌞" : "🌙"}
        </Button>
      </div>

      {/* Heading Section */}
      <motion.section
        className="max-w-3xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-blue-600 dark:text-blue-400">
          Simulasi Pembayaran Digital
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Pilih Simulasi metode pembayaran dan ikuti panduan untuk melakukan transaksi.
        </p>
      </motion.section>

      {/* Payment Method Selection */}
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {walletOptions.map((wallet, index) => (
          <motion.div
            key={index}
            className="border rounded-xl p-6 flex flex-col items-center bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="text-4xl mb-4">{wallet.icon}</div>
            <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-gray-100">
              {wallet.nama}
            </h3>
            <p className="text-gray-500 dark:text-gray-300 text-sm">{wallet.deskripsi}</p>
            <Button
              onClick={() => handlePaymentMethodChange(wallet.nama)}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Pilih {wallet.nama}
            </Button>
          </motion.div>
        ))}
      </motion.section>

      {/* Payment Steps */}
      {paymentMethod && isPaymentStep && (
        <motion.section
          className="max-w-3xl mx-auto mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
            Langkah-langkah Pembayaran Menggunakan {paymentMethod}
          </h2>

          {paymentInstructions[paymentMethod].map((step, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 mb-4 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-medium mb-2">{step.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}

          <Button
            onClick={() => setIsPaymentStep(false)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Kembali ke Pilihan Metode Pembayaran
          </Button>
        </motion.section>
      )}

      {/* Start Payment Button */}
      {paymentMethod && !isPaymentStep && (
        <motion.section
          className="max-w-xl mx-auto mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            onClick={handleStartPayment}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
          >
            Mulai Pembayaran dengan {paymentMethod}
          </Button>
        </motion.section>
      )}
    </main>
  );
}

const walletOptions = [
  {
    icon: "💳",
    nama: "OVO",
    deskripsi: "Pembayaran cepat & aman dengan OVO.",
  },
  {
    icon: "📱",
    nama: "GoPay",
    deskripsi: "Bayar instan lewat aplikasi Gojek.",
  },
  {
    icon: "🏦",
    nama: "Bank Transfer",
    deskripsi: "Transfer melalui mobile banking kamu.",
  },
  {
    icon: "🪙",
    nama: "DANA",
    deskripsi: "Transaksi nontunai dengan DANA.",
  },
  {
    icon: "💰",
    nama: "ShopeePay",
    deskripsi: "Bayar belanja dan parkir dari Shopee.",
  },
];

const paymentInstructions = {
  DANA: [
    {
      title: "Langkah 1: Buka Aplikasi DANA",
      description: "Buka aplikasi DANA di ponsel Anda.",
    },
    {
      title: "Langkah 2: Pilih 'Bayar'",
      description: "Pilih menu 'Bayar' di aplikasi DANA.",
    },
    {
      title: "Langkah 3: Scan QR Code",
      description: "Gunakan fitur 'Scan QR' untuk memindai kode QR yang tersedia.",
    },
    {
      title: "Langkah 4: Konfirmasi Pembayaran",
      description: "Masukkan PIN DANA dan konfirmasi pembayaran.",
    },
  ],
  OVO: [
    {
      title: "Langkah 1: Buka Aplikasi OVO",
      description: "Buka aplikasi OVO di ponsel Anda.",
    },
    {
      title: "Langkah 2: Pilih 'Bayar'",
      description: "Pilih menu 'Bayar' untuk mulai transaksi.",
    },
    {
      title: "Langkah 3: Scan QR Code",
      description: "Gunakan fitur scan QR untuk melakukan pembayaran.",
    },
    {
      title: "Langkah 4: Selesai",
      description: "Pembayaran berhasil dan Anda akan menerima notifikasi.",
    },
  ],
  GoPay: [
    {
      title: "Langkah 1: Buka Aplikasi OVO",
      description: "Buka aplikasi OVO di ponsel Anda.",
    },
    {
      title: "Langkah 2: Pilih 'Bayar'",
      description: "Pilih menu 'Bayar' untuk mulai transaksi.",
    },
    {
      title: "Langkah 3: Scan QR Code",
      description: "Gunakan fitur scan QR untuk melakukan pembayaran.",
    },
    {
      title: "Langkah 4: Selesai",
      description: "Pembayaran berhasil dan Anda akan menerima notifikasi.",
    },
  ],
  "Bank Transfer": [
    {
      title: "Langkah 1: Buka Aplikasi OVO",
      description: "Buka aplikasi OVO di ponsel Anda.",
    },
    {
      title: "Langkah 2: Pilih 'Bayar'",
      description: "Pilih menu 'Bayar' untuk mulai transaksi.",
    },
    {
      title: "Langkah 3: Scan QR Code",
      description: "Gunakan fitur scan QR untuk melakukan pembayaran.",
    },
    {
      title: "Langkah 4: Selesai",
      description: "Pembayaran berhasil dan Anda akan menerima notifikasi.",
    },
  ],
  ShopeePay: [
    {
      title: "Langkah 1: Buka Aplikasi OVO",
      description: "Buka aplikasi OVO di ponsel Anda.",
    },
    {
      title: "Langkah 2: Pilih 'Bayar'",
      description: "Pilih menu 'Bayar' untuk mulai transaksi.",
    },
    {
      title: "Langkah 3: Scan QR Code",
      description: "Gunakan fitur scan QR untuk melakukan pembayaran.",
    },
    {
      title: "Langkah 4: Selesai",
      description: "Pembayaran berhasil dan Anda akan menerima notifikasi.",
    },
  ],
  // Tambahkan instruksi lainnya sesuai metode pembayaran yang ada
};
