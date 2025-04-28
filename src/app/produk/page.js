"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaRegThumbsUp } from "react-icons/fa";

const produkList = [
  {
    id: 1,
    nama: "Produk A",
    deskripsi: "Deskripsi singkat produk A yang sangat menarik dan inovatif.",
    imageUrl: "/produk-a.jpg",
    harga: "Rp 1.000.000",
  },
  {
    id: 2,
    nama: "Produk B",
    deskripsi: "Produk B yang memiliki teknologi canggih dengan harga terjangkau.",
    imageUrl: "/produk-b.jpg",
    harga: "Rp 750.000",
  },
  {
    id: 3,
    nama: "Produk C",
    deskripsi: "Produk C menawarkan kualitas premium dengan harga bersaing.",
    imageUrl: "/produk-c.jpg",
    harga: "Rp 1.500.000",
  },
];

export default function Produk() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-12 min-h-screen">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">Produk Kami</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {produkList.map((produk) => (
            <div
              key={produk.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              <Image
                src={produk.imageUrl}
                alt={produk.nama}
                width={400}
                height={250}
                objectFit="cover"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{produk.nama}</h3>
                <p className="text-sm text-gray-600 mt-2">{produk.deskripsi}</p>
                <p className="text-lg font-semibold text-gray-800 mt-4">{produk.harga}</p>
                <Button className="mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 rounded-full py-2 px-6 text-sm">
                  Beli Sekarang
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
