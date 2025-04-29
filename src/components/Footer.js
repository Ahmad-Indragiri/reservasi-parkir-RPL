"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`w-full px-6 py-10 border-t transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900 border-gray-700 text-white"
          : "bg-white border-gray-200 text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-between">
        <p className="text-sm text-center md:text-left relative inline-block group">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300">
            RentParking
          </span>
          .
          <br className="md:hidden" />
          <span className="block md:inline text-xs mt-1 text-gray-500 dark:text-gray-400">
            Built by Ahmad Abdillah Indragiri.
          </span>
        </p>

        <div className="flex justify-center md:justify-end gap-5">
          <Link
            href="https://facebook.com"
            aria-label="Facebook"
            className="transform hover:scale-110 transition-all duration-300 hover:text-blue-500"
          >
            <Facebook size={22} />
          </Link>
          <Link
            href="https://instagram.com"
            aria-label="Instagram"
            className="transform hover:scale-110 transition-all duration-300 hover:text-pink-500"
          >
            <Instagram size={22} />
          </Link>
          <Link
            href="https://twitter.com"
            aria-label="Twitter"
            className="transform hover:scale-110 transition-all duration-300 hover:text-sky-400"
          >
            <Twitter size={22} />
          </Link>
          <Link
            href="https://github.com/Ahmad-Indragiri"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-all duration-300 hover:text-green-700"
          >
            <Github size={22} />
          </Link>
        </div>
      </div>

      {/* Shine Line */}
      <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40 animate-pulse" />
    </footer>
  );
}
