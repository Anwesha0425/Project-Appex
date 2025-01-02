import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#A0D9D6] text-white"> {/* Ocean Mist Color */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                width="auto"
                height="auto"
                src="https://img.playbook.com/6MeRmsLAPaHeWVysxfssWU1IhU7ivBsGUQ6GS5Ttceg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzYyNDVlODlm/LTQ1OTMtNDY0MS1i/NGRmLWViYTY0ODUw/NGEwZQ"
                alt="Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 ml-auto"> {/* Aligned to the right */}
            <Link href="/about">
              <li className="text-lg font-medium text-white hover:text-gray-200 hover:underline transition duration-300">
                About Us
              </li>
            </Link>
            <Link href="/project">
              <li className="text-lg font-medium text-white hover:text-gray-200 hover:underline transition duration-300">
                Projects
              </li>
            </Link>
            <Link href="/fundraising">
              <li className="text-lg font-medium text-white hover:text-gray-200 hover:underline transition duration-300">
                Fundraising
              </li>
            </Link>
            <Link href="/news-and-events">
              <li className="text-lg font-medium text-white hover:text-gray-200 hover:underline transition duration-300">
                News and Events
              </li>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/about">
              <li className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#00796B] hover:text-white transition duration-300">
                About Us
              </li>
            </Link>
            <Link href="/project">
              <li className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#00796B] hover:text-white transition duration-300">
                Projects
              </li>
            </Link>
            <Link href="/fundraising">
              <li className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#00796B] hover:text-white transition duration-300">
                Fundraising
              </li>
            </Link>
            <Link href="/news-and-events">
              <li className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#00796B] hover:text-white transition duration-300">
                News and Events
              </li>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
