"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar({ darkMode, userProfile }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProfileMenu = () => setProfileMenuOpen(!profileMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
      if (window.innerWidth > 768) setProfileMenuOpen(false);
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
      className={`w-full sticky top-0 z-50 py-4 px-6 flex items-center justify-between ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } transition-colors duration-300 shadow-md`}
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
          menuOpen ? "top-full opacity-100 visible p-6" : "top-[-500px] opacity-0 invisible"
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

        {/* Profile Section */}
        <li className="my-2 md:my-0 relative">
          <button
            onClick={toggleProfileMenu}
            className="flex items-center space-x-2 text-base font-medium"
          >
            {/* Profile Image with hover effect */}
            <Image
              src={userProfile?.image || "/lambang-unimma.png"} // Default image if no user image
              alt="User Profile"
              width={40}
              height={40}
              className="rounded-full border-2 border-gray-300 hover:border-blue-500 transition-all duration-300"
            />
            <span className="hidden md:block">{userProfile?.name || "User"}</span>
          </button>

          {/* Profile Dropdown Menu */}
          {profileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-lg border border-gray-200 z-10 transition-all duration-300 ease-in-out">
              <Link
                href="/profile/edit"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-t-lg"
              >
                Edit Profil
              </Link>
              <Link
                href="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Lihat Profil
              </Link>
              <hr className="my-1 border-gray-200" />
              <Link
                href="/logout"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-lg"
              >
                Logout
              </Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}
