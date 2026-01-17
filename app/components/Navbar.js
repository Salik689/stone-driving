"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="h-[70px] fixed w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all backdrop-blur-md bg-white/10 shadow-md ">

      {/* LOGO */}
      <Link href="/" className="text-indigo-600">
        <Image src="/image/logo.png" alt="Logo" width={157} height={40} />
      </Link>

      {/* DESKTOP MENU */}
      <ul className="md:flex hidden items-center gap-10 text-xl font-bold ">
        <li><Link href="/" className="hover:text-orange-500/80 transition">Home</Link></li>
        <li><Link href="/about" className="hover:text-orange-500/80 transition">About</Link></li>
        <li><Link href="/contact" className="hover:text-orange-500/80 transition">Contact</Link></li>
        <li><Link href="/courses" className="hover:text-orange-500/80 transition">Courses</Link></li>
      </ul>



      {/* MOBILE MENU BUTTON */}
      <button
        aria-label="menu-btn"
        type="button"
        className="inline-block md:hidden active:scale-90 transition"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#000">
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg>
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu absolute font-bold top-[70px] left-0 w-full bg-white p-6 md:hidden">
          <ul className="flex flex-col space-y-4 text-lg">
            <li><Link href="/" className="hover:text-orange-500/80 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-orange-500/80 transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-orange-500/80 transition">Contact</Link></li>
            <li><Link href="/courses" className="hover:text-orange-500/80 transition">Courses</Link></li>
          </ul>


        </div>
      )}
    </nav>
  );
}
