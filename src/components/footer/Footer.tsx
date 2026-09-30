import { Link } from "react-router";
import logo from "../../../public/logo-footer.svg";

const Footer = () => {
  return (
    <footer className="mt-[71px] mb-[48px] wrapper text-gray-700">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-12 pb-16">
        {/* Left Column: Logo & Newsletter */}
        <div className="max-w-lg">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <Link to={"/"}>
              <img
                src={logo}
                alt="ByteSpace Logo"
                className="h-auto w-[134px]"
              />
            </Link>
          </div>

          {/* Description */}
          <p className="text-[#242528] mb-[45px] text-sm font-normal">
            Stay Up to date with our latest features and releases by joining our
            newsletter.
          </p>

          {/* Newsletter Input Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-3 mb-6"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[320px] px-6 py-3.5 border border-gray-300 rounded-full text-base outline-none focus:border-gray-400 placeholder-[#242528]"
            />
            <button type="submit" className="btn-1">
              Search
            </button>
          </form>

          {/* Disclaimer */}
          <p className="text-xs text-[#242528] leading-relaxed">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16 pt-2">
          {/* Column 1 */}
          <div className="space-y-4 text-sm text-[#242528]">
            <p>
              <Link to="#" className="hover:text-blue transition-colors">
                Featured Courses
              </Link>
            </p>
            <p>
              <Link to="#" className="hover:text-blue transition-colors">
                Featured Categories
              </Link>
            </p>
            <p>
              <Link to="#" className="hover:text-blue transition-colors">
                Business
              </Link>
            </p>
            <p>
              <Link to="#" className="hover:text-blue transition-colors">
                IT
              </Link>
            </p>
            <p>
              <Link to="#" className="hover:text-blue transition-colors">
                Design
              </Link>
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-4 text-sm">
            <p>
              <Link to="#" className="hover:text-blue transition-colors">
                Development
              </Link>
            </p>
            <p>
              <Link to="#" className="hover:text-blue transition-colors">
                Marketing
              </Link>
            </p>
            <p>
              <Link to="#" className="hover:text-blue transition-colors">
                Photography
              </Link>
            </p>
            <p>
              <Link to="#" className="hover:text-blue transition-colors">
                Finance
              </Link>
            </p>
            <p>
              <Link to="#" className="hover:text-blue transition-colors">
                Sport
              </Link>
            </p>
          </div>

          {/* Column 3 */}
          <div className="space-y-4 text-sm">
            <p>
              <Link to="#" className="hover:text-blue transition-colors">
                Become a Creator
              </Link>
            </p>
            <p>
              <Link to="#" className="hover:text-blue transition-colors">
                Affiliate Program
              </Link>
            </p>
            <p>
              <Link to="#" className="hover:text-blue transition-colors">
                Contact
              </Link>
            </p>
            <p>
              <Link to="#" className="hover:text-blue transition-colors">
                Help
              </Link>
            </p>
            <p>
              <Link to="#" className="hover:text-blue transition-colors">
                About
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 mb-8" />

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#242528]">
        <p>@ 2023 ByteSpace. All rights reserved.</p>

        <div className="flex gap-6">
          <Link to="#" className="hover:text-blue transition-colors">
            Privacy Policy
          </Link>
          <Link to="#" className="hover:text-blue transition-colors">
            Terms of Service
          </Link>
          <Link to="#" className="hover:text-blue transition-colors">
            Cookies Settings
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
