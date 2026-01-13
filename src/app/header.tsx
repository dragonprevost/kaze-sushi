"use client";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="px-6 mx-auto flex items-center justify-between py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <span className="font-heading text-2xl text-primary tracking-wider">
              KA-ZE
            </span>
            <span className="block text-xs text-gray-500 tracking-widest uppercase">
              Sushi and Beyond
            </span>
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-black"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLinks />
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-white">
          <NavLinks vertical />
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ vertical = false }: { vertical?: boolean }) => {
  const baseClass = "text-gray-600 hover:text-primary transition-colors text-sm tracking-wide";
  const layout = vertical ? "block" : "";
  const reservationLayout = "bg-primary text-white hover:bg-primaryDark";
  return (
    <>
      <a href="/" className={`${baseClass} ${layout}`}>
        Home
      </a>
      <a href="/about" className={`${baseClass} ${layout}`}>
        About
      </a>
      <a href="/menu" className={`${baseClass} ${layout}`}>
        Menu
      </a>
      <a href="/contact" className={`${baseClass} ${layout}`}>
        Contact
      </a>
      <a
        href="tel:+16049384565"
        className={`inline-flex items-center gap-2 px-4 py-2 rounded text-sm transition-colors ${layout} ${reservationLayout}`}
      >
        <Phone className="h-4 w-4" />
        Reservations
      </a>
    </>
  );
};

export default Header;
