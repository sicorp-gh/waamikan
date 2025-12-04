import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../components/Logo";
import AppName from "../components/AppName";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 w-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Section 1 — Logo + AppName + About Us */}
        <div>
          <Logo className="h-12 mb-2" />
          <AppName className="font-semibold text-white font-bold text-md mb-4 block" />
          <p className="text-sm leading-6">
            We deliver high-quality medical supplies and equipment with a focus
            on safety, compliance, and fast delivery.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/shop/medical-equipment" className="hover:text-white">
                Medical Equipment
              </a>
            </li>
            <li>
              <a href="/shop/ppe" className="hover:text-white">
                PPE & Safety
              </a>
            </li>
            <li>
              <a href="/shop/consumables" className="hover:text-white">
                Consumables
              </a>
            </li>
            <li>
              <a href="/shop/lab-supplies" className="hover:text-white">
                Laboratory Supplies
              </a>
            </li>
            <li>
              <a href="/shop/diagnostics" className="hover:text-white">
                Diagnostics
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/faq" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="/shipping" className="hover:text-white">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="/returns" className="hover:text-white">
                Returns & Refunds
              </a>
            </li>
            <li>
              <a href="/warranty" className="hover:text-white">
                Warranty
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-white">
                Contact Support
              </a>
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/disclaimer" className="hover:text-white">
                Medical Disclaimer
              </a>
            </li>
          </ul>
        </div>

        {/* Section 5 — Newsletter + Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Newsletter</h3>
          <p className="text-sm mb-3">
            Subscribe for product updates, offers and safety notices.
          </p>

          <form
            className="flex flex-col sm:flex-row items-stretch gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-lg bg-gray-800 text-gray-200 text-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mt-4 text-lg justify-start sm:justify-start md:justify-start lg:justify-start">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white p-2 rounded-full bg-gray-800"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white p-2 rounded-full bg-gray-800"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white p-2 rounded-full bg-gray-800"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-white p-2 rounded-full bg-gray-800"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-white p-2 rounded-full bg-gray-800"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} Your <AppName />. All rights reserved.
      </div>
    </footer>
  );
}
