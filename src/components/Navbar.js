"use client";
import { useState } from "react";
import { Menu, X, Sun, Moon, Search, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ darkMode, toggleDarkMode, userProfile }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ID");
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Produk", href: "/produk" },
    { name: "Perusahaan", href: "/perusahaan" },
    { name: "Hubungi Kami", href: "/hubungi" },
  ];

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setLanguageOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/rent_park.png"
            alt="ParkirinAja"
            width={120}
            height={30}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-blue-600 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border rounded-full py-2 px-4 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search
              size={20}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>

          {/* Download Button */}
          <Link
            href="/download"
            className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Download
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="hover:scale-110 transition-transform"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLanguageOpen((prev) => !prev)}
              className="flex items-center gap-1 hover:text-blue-500"
            >
              <Globe size={20} />
              <span className="text-sm">{selectedLanguage}</span>
            </button>
            {languageOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-white dark:bg-gray-800 shadow rounded text-sm z-50">
                {["ID", "EN"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-left"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Profile Menu */}
          <div className="relative">
            <button
              onClick={() => setProfileMenuOpen((prev) => !prev)}
              className="flex items-center space-x-2 group"
              aria-label="User Menu"
            >
              <Image
                src={userProfile?.image || "/lambang-unimma.png"}
                alt="User"
                width={36}
                height={36}
                className="rounded-full border border-gray-300 group-hover:border-blue-500 transition"
              />
              <span className="text-sm font-medium hidden lg:inline-block">
                {userProfile?.name || "Indra"}
              </span>
            </button>

            {profileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-xl rounded-lg border dark:border-gray-700 overflow-hidden z-50">
                <Link
                  href="/profile/edit"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Edit Profil
                </Link>
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Lihat Profil
                </Link>
                <hr className="border-gray-200 dark:border-gray-700" />
                <Link
                  href="/logout"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 focus:outline-none">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen py-4" : "max-h-0"
        } ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
      >
        {/* Mini Profile */}
        <div className="flex items-center gap-3 px-6 py-2 border-b dark:border-gray-700">
          <Image
            src={userProfile?.image || "/lambang-unimma.png"}
            alt="User"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">{userProfile?.name || "Indra"}</p>
            <Link href="/profile" className="text-xs text-blue-400 underline">
              Lihat Profil
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-6 mt-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium hover:text-blue-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/download"
            className="text-base font-medium bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            Download
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => {
              toggleDarkMode();
              setMenuOpen(false);
            }}
            className="flex items-center gap-2 text-base font-medium"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-800" />
            )}
            <span>{darkMode ? "Mode Terang" : "Mode Gelap"}</span>
          </button>

          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            <Globe size={20} />
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-transparent border px-2 py-1 rounded"
            >
              <option value="ID">ID</option>
              <option value="EN">EN</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
