import { useState } from "react";
import Link from "next/link";
import { Sling as Hamburger } from "hamburger-react";
import Image from "next/image";
import { RiMoonFill } from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";

export default function Navbar({ theme, settheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`${
        theme ? "bg-[#0c0d3f] text-[white]" : "bg-[#A0D9D6] text-[#160303]"
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
                className="h-[50px] w-[50px] sm:h-[80px] sm:w-[80px] rounded-full bg-[white] m-1"
                src="https://img.playbook.com/cO9x7nkZ10OpDoJrb8YW1wotD7c8M-GyhBnSsQinYKE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2I4NzM0Yjli/LTE2OWItNGNlOC05/MDgyLTA4OGVhMDIz/Y2YxZg"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 ml-auto">
            {[
              { href: "/about", label: "About Us" },
              { href: "/project", label: "Projects" },
              { href: "/fundraising", label: "Fundraising" },
              { href: "/news", label: "Gallary" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="cursor-pointer">
                <li
                  className={`text-lg font-medium ${
                    theme ? "text-[white]" : "text-[black]"
                  } hover:underline transition duration-300`}
                >
                  {label}
                </li>
              </Link>
            ))}
          </div>

          {/* Theme Toggle and Mobile Hamburger */}
          <div className="flex items-center md:space-x-4 m-2">
            {/* Theme Toggle */}
            <button
              className="p-2 rounded-full border-2 focus:outline-none"
              onClick={() => settheme(!theme)}
              title="Toggle Theme"
            >
              {theme ? <RiMoonFill size={25} /> : <BsFillSunFill size={25} />}
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" onClick={() => setIsOpen(false)}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              { href: "/about", label: "About Us" },
              { href: "/project", label: "Projects" },
              { href: "/fundraising", label: "Fundraising" },
              { href: "/news", label: "Gallary" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="cursor-pointer">
                <li
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    theme ? "hover:bg-[#a9abff]" : "hover:bg-[#00796B]"
                  } transition duration-300`}
                >
                  {label}
                </li>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
