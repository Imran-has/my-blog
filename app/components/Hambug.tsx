"use client"
import { useState } from "react";
import Link from "next/link";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        className=" absolute right-0 text-3xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Navigation Menu */}
      <nav
        className={`absolute top-12 right-0 w-48 bg-white border rounded shadow-lg ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-2">
          <li>
            <Link href="/" className="block text-gray-700 hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/About" className="block text-gray-700 hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="block text-gray-700 hover:text-blue-500">
              Services
            </Link>
          </li>
          <li>
            <Link href="#" className="block text-gray-700 hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}