"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function HubungiKami() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic (e.g., send data to an API or email)
    alert("Pesan Anda telah dikirim!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-12 min-h-screen">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">Hubungi Kami</h1>

        {/* Info Kontak */}
        <section className="grid gap-12 sm:grid-cols-1 lg:grid-cols-3 text-center mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <FaPhoneAlt className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Telepon</h3>
            <p className="text-lg text-gray-600 mt-2">+62 123 456 789</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <FaEnvelope className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Email</h3>
            <p className="text-lg text-gray-600 mt-2">contact@perusahaan.com</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <FaMapMarkerAlt className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Alamat</h3>
            <p className="text-lg text-gray-600 mt-2">Jl. Contoh No. 123, Jakarta, Indonesia</p>
          </div>
        </section>

        {/* Formulir Kontak */}
        <section className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Kirim Pesan</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold">Nama</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold">Pesan</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 text-lg"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </section>

        {/* Peta Lokasi */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Lokasi Kami</h2>
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63483.21737068452!2d106.795708457428!3d-6.2227887282262475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9c410080f57%3A0xc189da9a6a402d60!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1677391451809!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kami"
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
