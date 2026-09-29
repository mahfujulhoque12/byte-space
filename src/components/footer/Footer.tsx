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
            <img src={logo} alt="ByteSpace Logo" className="h-auto w-[134px]" />
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
              <a href="#" className="hover:text-blue transition-colors">
                Featured Courses
              </a>
            </p>
            <p>
              <a href="#" className="hover:text-blue transition-colors">
                Featured Categories
              </a>
            </p>
            <p>
              <a href="#" className="hover:text-blue transition-colors">
                Business
              </a>
            </p>
            <p>
              <a href="#" className="hover:text-blue transition-colors">
                IT
              </a>
            </p>
            <p>
              <a href="#" className="hover:text-blue transition-colors">
                Design
              </a>
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-4 text-sm">
            <p>
              <a href="#" className="hover:text-blue transition-colors">
                Development
              </a>
            </p>
            <p>
              <a href="#" className="hover:text-blue transition-colors">
                Marketing
              </a>
            </p>
            <p>
              <a href="#" className="hover:text-blue transition-colors">
                Photography
              </a>
            </p>
            <p>
              <a href="#" className="hover:text-blue transition-colors">
                Finance
              </a>
            </p>
            <p>
              <a href="#" className="hover:text-blue transition-colors">
                Sport
              </a>
            </p>
          </div>

          {/* Column 3 */}
          <div className="space-y-4 text-sm">
            <p>
              <a href="#" className="hover:text-blue transition-colors">
                Become a Creator
              </a>
            </p>
            <p>
              <a href="#" className="hover:text-blue transition-colors">
                Affiliate Program
              </a>
            </p>
            <p>
              <a href="#" className="hover:text-blue transition-colors">
                Contact
              </a>
            </p>
            <p>
              <a href="#" className="hover:text-blue transition-colors">
                Help
              </a>
            </p>
            <p>
              <a href="#" className="hover:text-blue transition-colors">
                About
              </a>
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
          <a href="#" className="hover:text-blue transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue transition-colors">
            Cookies Settings
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
