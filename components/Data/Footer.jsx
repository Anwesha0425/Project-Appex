import { FaFacebookF, FaInstagram, FaTwitter, FaStarOfLife } from "react-icons/fa";
import Link from "next/link";


const Footer = () => {
  return (
    <div className="bg-[#A0D9D6] font-medium sm:text-center">
      <div className="flex justify-around sm:flex-wrap sm:gap-6 text-gray-800 pt-16 pb-12">
        {/* About Section */}
        <div>
          <h4 className="text-xl font-semibold text-[#006B5D]">About Appex Guide Line</h4>
          <div className="pt-2">
            <ul className="flex flex-col gap-1">
              <li>
                Berhampur, Ganjam<br />
                Odisha, India - 760003
              </li>
              <br />
              <li>
                Contact: &nbsp;
                <a href="tel:+91-661-2462021" className="text-[#006B5D] hover:underline">
                  +91-661-2462021
                </a>
              </li>
              <br />
              <li>
                Email: &nbsp;
                <a href="mailto:appexfcc@gmail.com" className="text-[#006B5D] hover:underline">
                  appexfcc@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <br />
          {/* Social Media Icons */}
          <div className="font-semibold flex justify-start sm:justify-center items-center">
            <span>Follow Us:</span>
            <div className="flex items-center ml-3 space-x-3">
              <a href="#" className="text-[#006B5D] hover:text-gray-600 transition-all duration-300">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-[#006B5D] hover:text-gray-600 transition-all duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-[#006B5D] hover:text-gray-600 transition-all duration-300">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h1 className="text-xl font-semibold text-[#006B5D]">Quick Links</h1>
          <div className="pt-2">
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="hover:text-[#004D40] transition-all duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#004D40] transition-all duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-[#004D40] transition-all duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/fundraising" className="hover:text-[#004D40] transition-all duration-300">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#004D40] transition-all duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Subscription Section */}
        <div>
          <h1 className="text-xl font-semibold text-[#006B5D]">Get Subscribed</h1>
          <h1 className="pt-2">Don't miss our latest updates!</h1>
          <br />
          <form className="flex flex-col gap-4">
            <div>
              <label className="flex items-center">
                Name: &nbsp;
                <FaStarOfLife size={6} className="text-[#FF6F91]" />
              </label>
              <input
                type="text"
                className="border-b-2 w-full bg-[#A0D9D6] focus:outline-none border-gray-600 text-gray-800"
              />
            </div>
            <div>
              <label className="flex items-center">
                Email: &nbsp;
                <FaStarOfLife size={6} className="text-[#FF6F91]" />
              </label>
              <input
                type="email"
                className="border-b-2 w-full bg-[#A0D9D6] focus:outline-none border-gray-600 text-gray-800"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg p-2 bg-[#006B5D] text-white hover:bg-[#004D40] transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
