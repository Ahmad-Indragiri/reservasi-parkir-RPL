"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`w-full px-6 py-8 text-center border-t transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white border-gray-700" : "bg-white text-gray-800 border-gray-300"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
        <p className="text-sm">&copy; {new Date().getFullYear()} ParkirinAja. All rights reserved. Designed and developed by Ahmad Abdillah Indragiri.</p>
        <div className="flex gap-4 justify-center">
          <Link href="#" aria-label="Facebook" className="hover:text-blue-500">
            <Facebook size={20} />
          </Link>
          <Link href="#" aria-label="Instagram" className="hover:text-pink-500">
            <Instagram size={20} />
          </Link>
          <Link href="#" aria-label="Twitter" className="hover:text-blue-400">
            <Twitter size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
