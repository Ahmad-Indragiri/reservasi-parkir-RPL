"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Pencarian", href: "/pencarian" },
    { name: "Reservasi", href: "/reservasi" },
    { name: "Review", href: "/review" },
    { name: "Tutorial", href: "/tutorial" },
  ];

  return (
    <nav
      className={`w-full sticky top-0 z-50 shadow-md py-4 px-6 flex items-center justify-between ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } transition-colors duration-300`}
    >
      <Link href="/" className="text-xl font-bold tracking-wide">
        ParkirinAja
      </Link>

      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <ul
        className={`md:flex md:items-center md:gap-8 absolute md:static left-0 w-full md:w-auto bg-inherit transition-all duration-300 ease-in-out ${
          menuOpen
            ? "top-full opacity-100 visible p-6"
            : "top-[-500px] opacity-0 invisible"
        }`}
      >
        {navLinks.map((link, idx) => (
          <li key={idx} className="my-2 md:my-0">
            <Link
              href={link.href}
              className="hover:text-blue-600 block text-base font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
