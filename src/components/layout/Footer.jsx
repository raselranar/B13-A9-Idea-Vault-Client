import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import {
  LuFacebook,
  LuGithub,
  LuInstagram,
  LuLinkedin,
  LuMail,
  LuSend,
  LuZap,
} from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 dark:bg-slate-950 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-linear-to-br from-orange-500 to-pink-500 p-2 rounded-xl">
                <LuZap className="w-7 h-7 text-white" fill="currentColor" />
              </div>
              <div>
                <span className="text-xl font-black">IDEA</span>
                <span className="text-xl font-black text-orange-400">
                  VAULT
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Empowering innovators to share, collaborate, and transform
              brilliant ideas into successful startups.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2.5 bg-slate-800 rounded-lg hover:bg-linear-to-r hover:from-orange-500 hover:to-pink-500 transition-all">
                <LuFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-slate-800 rounded-lg hover:bg-linear-to-r hover:from-orange-500 hover:to-pink-500 transition-all">
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-slate-800 rounded-lg hover:bg-linear-to-r hover:from-orange-500 hover:to-pink-500 transition-all">
                <LuLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-slate-800 rounded-lg hover:bg-linear-to-r hover:from-orange-500 hover:to-pink-500 transition-all">
                <LuGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-black text-lg mb-5 text-orange-400">EXPLORE</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/ideas"
                  className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                  Browse Ideas
                </Link>
              </li>
              <li>
                <Link
                  href="/ideas"
                  className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                  Trending Now
                </Link>
              </li>
              <li>
                <Link
                  href="/add-idea"
                  className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                  Submit Idea
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-black text-lg mb-5 text-orange-400">COMPANY</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-black text-lg mb-5 text-orange-400">SUPPORT</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                  contact@ideavault.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-slate-300">
              &copy; 2026{" "}
              <span className="text-orange-400 font-bold">IdeaVault</span>. All
              rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-gray-500 dark:text-slate-300">
              <a href="#" className="hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
