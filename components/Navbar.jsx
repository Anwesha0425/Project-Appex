import { useState } from "react";
import Link from "next/link";
import { Sling as Hamburger } from "hamburger-react";
import Image from "next/image";
import { RiMoonFill } from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(true); // true: Light Mode, false: Dark Mode

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <nav
      className={`${
        theme ? "bg-[#A0D9D6] text-[#160303]" : "bg-[#0c0d3f] text-[white]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                height={100}
                width={100}
                className="h-[80px] w-[80px] rounded-full bg-[white] m-1"
                src="https://img.playbook.com/cO9x7nkZ10OpDoJrb8YW1wotD7c8M-GyhBnSsQinYKE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2I4NzM0Yjli/LTE2OWItNGNlOC05/MDgyLTA4OGVhMDIz/Y2YxZg"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 ml-auto">
            <Link href="/about">
              <li
                className={`text-lg font-medium ${
                  theme
                    ? "text-[black]"
                    : "text-[white]"
                } hover:underline transition duration-300`}
              >
                About Us
              </li>
            </Link>
            <Link href="/project">
              <li
                className={`text-lg font-medium ${
                  theme
                     ? "text-[black]"
                    : "text-[white]"
                } hover:underline transition duration-300`}
              >
                Projects
              </li>
            </Link>
            <Link href="/fundraising">
              <li
                className={`text-lg font-medium ${
                  theme
                     ? "text-[black]"
                    : "text-[white]"
                } hover:underline transition duration-300`}
              >
                Fundraising
              </li>
            </Link>
            <Link href="/news">
              <li
                className={`text-lg font-medium ${
                  theme
                     ? "text-[black]"
                    : "text-[white]"
                } hover:underline transition duration-300`}
              >
                News and Events
              </li>
            </Link>
          </div>

          {/* Theme Toggle */}
          <button
            className="ml-4 p-2 rounded-full border-2 focus:outline-none"
            onClick={toggleTheme}
            title="Toggle Theme"
          >
            {theme ? (
              <RiMoonFill size={25} className="text-yellow-300" />
            ) : (
              <BsFillSunFill size={25} className="text-yellow-500" />
            )}
          </button>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Hamburger toggled={isOpen} toggle={setIsOpen} duration={0.9} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" onClick={() => setIsOpen(false)}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/about">
              <li
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  theme
                    ? "text-white hover:bg-[#00796B] hover:text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-gray-100"
                } transition duration-300`}
              >
                About Us
              </li>
            </Link>
            <Link href="/project">
              <li
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  theme
                    ? "text-white hover:bg-[#00796B] hover:text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-gray-100"
                } transition duration-300`}
              >
                Projects
              </li>
            </Link>
            <Link href="/fundraising">
              <li
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  theme
                    ? "text-white hover:bg-[#00796B] hover:text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-gray-100"
                } transition duration-300`}
              >
                Fundraising
              </li>
            </Link>
            <Link href="/news">
              <li
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  theme
                    ? "text-white hover:bg-[#00796B] hover:text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-gray-100"
                } transition duration-300`}
              >
                News and Events
              </li>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
