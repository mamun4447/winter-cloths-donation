import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-base-200 to-white text-base-content mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12  grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Site Info */}
        <div>
          <h2 className="text-2xl font-bold text-[#13221b] mb-2">
            Winter Donation
          </h2>
          <p className="text-sm leading-relaxed">
            A platform to bring warmth to lives. We connect donors and
            volunteers to deliver winter clothing to people in need across
            Bangladesh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-title text-[#13221b]">Quick Links</h3>
          <ul className="space-y-2 mt-2">
            <li>
              <a href="/" className="link link-hover">
                Home
              </a>
            </li>
            <li>
              <a href="/campaigns" className="link link-hover">
                Donation Campaigns
              </a>
            </li>
            <li>
              <a href="/how-to-help" className="link link-hover">
                How to Help
              </a>
            </li>
            <li>
              <a href="/dashboard" className="link link-hover">
                Dashboard
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="footer-title text-[#13221b]">Contact</h3>
          <p className="mt-2">
            Email:{" "}
            <a
              href="mailto:help@winterdonation.org"
              className="link link-hover"
            >
              help@winterdonation.org
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+880123456789" className="link link-hover">
              +880 1234-56789
            </a>
          </p>
          <p>Address: Dhanmondi, Dhaka, Bangladesh</p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="footer-title text-[#13221b]">Follow Us</h3>
          <div className="flex items-center gap-4 mt-4">
            <a
              href="#"
              className="text-xl text-gray-600 hover:text-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-xl text-gray-600 hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-xl text-gray-600 hover:text-sky-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-xl text-gray-600 hover:text-blue-700 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-base-300 py-4 text-center text-sm text-gray-500 bg-base-100">
        © {new Date().getFullYear()} Winter Donation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
