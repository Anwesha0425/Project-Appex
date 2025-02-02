import { FaFacebookF, FaInstagram, FaStarOfLife } from "react-icons/fa";
import Link from "next/link";


const Footer = ({ theme}) => {
  return (
    <main className={"font-medium sm:text-center " + `${theme ? "bg-[#0c0d3f] text-[white] " : " bg-[#A0D9D6] text-[black]"}`}>
      <div className="flex justify-around sm:flex-wrap sm:gap-6 text-gray-800 pt-16 pb-12">
        {/* About Section */}
        <div>
          <h4 className={"text-xl font-semibold " + `${theme ? "text-[#adaef9]" : "text-[#006B5D]"}`}>About Appex Guide Line</h4>
          <div className="pt-2">
            <ul className="flex flex-col gap-1">
              <li>
                Berhampur, Ganjam<br />
                Odisha, India - 760003
              </li>
              <br />
              <li>
                Contact: &nbsp;
                <a href="tel:+91-9861086564" className={"hover:underline" + `${theme ? "text-[#adaef9]" : "text-[#006B5D]"}`}>
                  +91-9861086564 
                </a>
              </li>
              <br />
              <li>
                Email: &nbsp;
                <a href="mailto:appexfcc@gmail.com" className={"hover:underline" + `${theme ? "text-[#adaef9]" : "text-[#006B5D]"}`}>
                  appex29@yahoo.co.in
                </a>
              </li>
            </ul>
          </div>
          <br />
          {/* Social Media Icons */}
          <div className="font-semibold flex justify-start sm:justify-center items-center">
            <span>Follow Us:</span>
            <div className="flex items-center ml-3 space-x-3">
              <a href="#" className={"transition-all duration-300 " + `${theme ? "text-[#adaef9]" : "text-[#006B5D]"}`}>
                <FaFacebookF size={20} />
              </a>
              <a href="#" className={"transition-all duration-300 " + `${theme ? "text-[#adaef9]" : "text-[#006B5D]"}`}>
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h1 className={"text-xl font-semibold " + + `${theme ? "text-[#adaef9]" : "text-[#006B5D]"}`}>Quick Links</h1>
          <div className="pt-2">
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className={"transition-all duration-300 " + `${theme ? "hover:text-[#adaef9]" : "hover:text-[#006B5D]"}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={"transition-all duration-300 " + `${theme ? "hover:text-[#adaef9]" : "hover:text-[#006B5D]"}`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/news" className={"transition-all duration-300 " + `${theme ? "hover:text-[#adaef9]" : "hover:text-[#006B5D]"}`}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/fundraising" className={"transition-all duration-300 " + `${theme ? "hover:text-[#adaef9]" : "hover:text-[#006B5D]"}`}>
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/about" className={"transition-all duration-300 " + `${theme ? "hover:text-[#adaef9]" : "hover:text-[#006B5D]"}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Subscription Section */}
        <div>
          <h1 className={"text-xl font-semibold " + `${theme ? "text-[#adaef9]" : "text-[#006B5D]"}`}>Get Subscribed</h1>
          <h1 className="pt-2">Don&apos;t miss our latest updates!</h1>
          <br />
          <form className="flex flex-col gap-4">
            <div>
              <label className="flex items-center">
                Name: &nbsp;
                <FaStarOfLife size={6} className="text-[#FF6F91]" />
              </label>
              <input
                type="text"
                className={"border-b-2 w-full focus:outline-none " + `${theme ? " bg-[#adaef9] ": " bg-[#A0D9D6] "}`}
              />
            </div>
            <div>
              <label className="flex items-center">
                Email: &nbsp;
                <FaStarOfLife size={6} className="text-[#FF6F91]" />
              </label>
              <input
                type="email"
                className={"border-b-2 w-full focus:outline-none " + `${theme ? " bg-[#adaef9] ": " bg-[#A0D9D6] "}`}
              />
            </div>
            <button
              type="submit"
              className={"rounded-lg p-2 transition-all duration-300 " + `${theme ? " bg-[#adaef9] hover:bg-[#7779f7]": " bg-[#A0D9D6] hover:bg-[#004D40] "}`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Footer;
