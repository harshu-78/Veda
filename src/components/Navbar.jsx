import { useState } from "react";
import {
  FaUser,
  FaBars,
  FaAngleDown,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
import "./Navbar.css"; 
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div>
      {/*  Top Offer Bar */}
      <div className="bg-yellow-500 text-white text-sm py-1 overflow-hidden">
        <div className="scroll-text">
          Book online Pooja services and get 10% off{" "}
          <span className="font-semibold">RABBIT30</span> at Checkout — Ends
          Soon! ⏳
        </div>
      </div>

      {/*  Middle Section (Logo + Search + Icons) */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <img src="images/logo.png" alt="Logo" className="h-10 md:h-12" />
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center w-1/2 max-w-xl bg-white shadow-md rounded-full overflow-hidden border border-gray-200 focus-within:ring-2 focus-within:ring-yellow-400">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 px-3 py-2 outline-none text-gray-700"
          />
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 shadow-md transform hover:scale-105 transition">
            <FaSearch className="text-white text-lg" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 text-gray-700">
          {/* Account */}
          <a
            href="#"
            className="hidden md:flex items-center gap-1 hover:text-yellow-600"
          >
            <FaUser /> <span>Account</span>
          </a>

          {/* Cart */}
          <a href="#" className="relative hover:text-yellow-600">
            <FaShoppingCart className="text-xl" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              2
            </span>
          </a>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {/*  Mobile Search */}
      <div className="md:hidden px-4 py-2 bg-white border-b border-gray-200">
        <div className="flex items-center w-full bg-white shadow-md rounded-full overflow-hidden border border-gray-200 focus-within:ring-2 focus-within:ring-yellow-400">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 px-3 py-2 outline-none text-gray-700"
          />
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 shadow-md transform hover:scale-105 transition">
            <FaSearch className="text-white text-lg" />
          </button>
        </div>
      </div>

      {/* 🔸 Desktop Navbar */}
      <nav className="bg-white border-b border-gray-200 hidden md:block"   >
        <ul className="flex flex-wrap items-center justify-center space-x-6 text-gray-800 text-sm font-medium tracking-wide py-3">
          <li><a href="/" className="hover:text-yellow-600 px-2">Home</a></li>

          {/* Puja Essentials */}
          <li className="relative group">
            <button className="hover:text-yellow-600 flex items-center gap-1 px-2">
              Puja Essentials <FaAngleDown />
            </button>
            <div className="dropdown hidden absolute left-0 top-full bg-white shadow-lg border rounded-md w-40 z-10 group-hover:block">
              <a href="#" className="block px-4 py-2 hover:bg-yellow-100">Puja Samagri</a>
              <a href="#" className="block px-4 py-2 hover:bg-yellow-100">Yantras</a>
              <a href="#" className="block px-4 py-2 hover:bg-yellow-100">Incense & Diyas</a>
            </div>
          </li>

          <li><a href="#" className="hover:text-yellow-600 px-2"> <Link to="/astrosati">Astrology</Link></a></li>

          {/* Healing Remedies */}
          <li className="relative group">
            <button className="hover:text-yellow-600 flex items-center gap-1 px-2">
              Healing Remedies <FaAngleDown />
            </button>
            <div className="dropdown hidden absolute left-0 top-full bg-white shadow-lg border rounded-md w-44 z-10 group-hover:block">
              <a href="#" className="block px-4 py-2 hover:bg-yellow-100">Spiritual Fragrances</a>
              <a href="#" className="block px-4 py-2 hover:bg-yellow-100">Energy Cleansing</a>
              <a href="#" className="block px-4 py-2 hover:bg-yellow-100">Ayurvedic Oils</a>
            </div>
          </li>

          <li><a href="#" className="hover:text-yellow-600 px-2">  <Link to="/Puja">Puja</Link>
</a></li>

          {/* Veda Store */}
          <li className="relative group">
            <button className="hover:text-yellow-600 flex items-center gap-1 px-2">
              Veda Store <FaAngleDown />
            </button>
            <div className="dropdown hidden absolute left-0 top-full bg-white shadow-lg border rounded-md w-44 z-10 group-hover:block">
              <a href="#" className="block px-4 py-2 hover:bg-yellow-100">All Products</a>
              <Link to="/rudraksha" className="block px-4 py-2 hover:bg-yellow-100">Rudraksha</Link>
              <a href="#" className="block px-4 py-2 hover:bg-yellow-100">Gems</a>
              <Link to="/Bracelet" className="block px-4 py-2 hover:bg-yellow-100">Bracelet</Link>
            </div>
          </li>

          {/* Support */}
          <li className="relative group">
            <button className="hover:text-yellow-600 flex items-center gap-1 px-2">
              Support <FaAngleDown />
            </button>
            <div className="dropdown hidden absolute left-0 top-full bg-white shadow-lg border rounded-md w-44 z-10 group-hover:block">
              <Link to="/Contact" className="block px-4 py-2 hover:bg-yellow-100">Contact Us</Link>
            </div>
          </li>

          <li><a href="#" className="hover:text-yellow-600 px-2">Rewards</a></li>
          <li><a href="#" className="hover:text-yellow-600 px-2">Veda Wisdom</a></li>
        </ul>
      </nav>

      {/* 🔸 Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-3 space-y-2">
          <a href="/" className="block py-1 hover:text-yellow-600">Home</a>

          {/* Puja Essentials */}
          <div>
            <button onClick={() => toggleDropdown("puja")} className="flex justify-between w-full py-1 hover:text-yellow-600">
              Puja Essentials <FaAngleDown />
            </button>
            {openDropdown === "puja" && (
              <div className="pl-4 space-y-1">
                <a href="#" className="block hover:text-yellow-600">Puja Samagri</a>
                <a href="#" className="block hover:text-yellow-600">Yantras</a>
                <a href="#" className="block hover:text-yellow-600">Incense & Diyas</a>
              </div>
            )}
          </div>

          <a href="#" className="block py-1 hover:text-yellow-600">Astrology</a>

          {/* Healing Remedies */}
          <div>
            <button onClick={() => toggleDropdown("healing")} className="flex justify-between w-full py-1 hover:text-yellow-600">
              Healing Remedies <FaAngleDown />
            </button>
            {openDropdown === "healing" && (
              <div className="pl-4 space-y-1">
                <a href="#" className="block hover:text-yellow-600">Spiritual Fragrances</a>
                <a href="#" className="block hover:text-yellow-600">Energy Cleansing</a>
                <a href="#" className="block hover:text-yellow-600">Ayurvedic Oils</a>
              </div>
            )}
          </div>

          <a href="#" className="block py-1 hover:text-yellow-600">Idols & Statues</a>

          {/* Veda Store */}
          <div>
            <button onClick={() => toggleDropdown("veda")} className="flex justify-between w-full py-1 hover:text-yellow-600">
              Veda Store <FaAngleDown />
            </button>
            {openDropdown === "veda" && (
              <div className="pl-4 space-y-1">
                <a href="#" className="block hover:text-yellow-600">All Products</a>
                <Link to="/rudraksha" className="block hover:text-yellow-600">Rudraksha</Link>
                <a href="#" className="block hover:text-yellow-600">Gems</a>
                <Link to="/Bracelet" className="block hover:text-yellow-600">Bracelet</Link>
              </div>
            )}
          </div>

          {/* Support */}
          <div>
            <button onClick={() => toggleDropdown("support")} className="flex justify-between w-full py-1 hover:text-yellow-600">
              Support <FaAngleDown />
            </button>
            {openDropdown === "support" && (
              <div className="pl-4 space-y-1">
             <Link to="/Contact" className="block px-4 py-2 hover:bg-yellow-100">Contact Us</Link>
              </div>
            )}
          </div>

          <a href="#" className="block py-1 hover:text-yellow-600">Rewards</a>
          <a href="#" className="block py-1 hover:text-yellow-600">Veda Wisdom</a>
        </div>
      )}
    </div>
  );
}