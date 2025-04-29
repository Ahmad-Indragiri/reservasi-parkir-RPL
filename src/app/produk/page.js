"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaStar, FaHeart } from "react-icons/fa"; // For Rating and Wishlist

const produkList = [
  {
    id: 1,
    nama: "Produk A",
    deskripsi: "Deskripsi singkat produk A yang sangat menarik dan inovatif.",
    imageUrl: "/produk-a.jpg",
    harga: "Rp 1.000.000",
    rating: 4.5,
  },
  {
    id: 2,
    nama: "Produk B",
    deskripsi: "Produk B yang memiliki teknologi canggih dengan harga terjangkau.",
    imageUrl: "/produk-b.jpg",
    harga: "Rp 750.000",
    rating: 4.0,
  },
  {
    id: 3,
    nama: "Produk C",
    deskripsi: "Produk C menawarkan kualitas premium dengan harga bersaing.",
    imageUrl: "/produk-c.jpg",
    harga: "Rp 1.500.000",
    rating: 4.8,
  },
];

export default function Produk() {
  const [darkMode, setDarkMode] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) setDarkMode(JSON.parse(savedMode));
  }, []);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Handle add/remove from wishlist
  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main
        className={`transition-all duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-white to-blue-100 text-gray-900"
        } py-16 sm:py-20 px-4 sm:px-6 lg:px-12`}
      >
        <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-12">Produk Kami</h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {produkList.map((produk) => (
            <div
              key={produk.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative group">
                <Image
                  src={produk.imageUrl}
                  alt={produk.nama}
                  width={400}
                  height={250}
                  objectFit="cover"
                  className="w-full h-56 object-cover group-hover:opacity-75 transition-opacity"
                />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                  <Button className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm">Quick View</Button>
                </div>
              </div>
              <div className={`p-6 transition-all duration-300 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                <h3 className="text-xl font-semibold mb-3">{produk.nama}</h3>
                <p className="text-sm text-gray-600 mb-4">{produk.deskripsi}</p>
                <div className="flex items-center mb-4">
                  {/* Product Rating */}
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} className={`w-5 h-5 ${index < produk.rating ? "text-yellow-500" : ""}`} />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({produk.rating})</span>
                </div>
                <p className="text-lg font-semibold text-gray-800">{produk.harga}</p>
                <div className="flex justify-between items-center mt-4">
                  {/* Wishlist Button */}
                  <FaHeart
                    className={`cursor-pointer text-2xl ${wishlist.includes(produk.id) ? "text-red-600" : "text-gray-600"}`}
                    onClick={() => toggleWishlist(produk.id)}
                  />
                  <Button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-sm transition-all duration-300">
                    Beli Sekarang
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer darkMode={darkMode} />
    </>
  );
}
