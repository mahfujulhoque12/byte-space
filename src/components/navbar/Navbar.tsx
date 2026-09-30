import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../../public/logo.svg";
import { CartIcon } from "../../icons/Icon";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-opacity transition-all duration-300 text-base hover:text-lime ${
      isActive ? "font-medium" : "font-normal"
    }`;

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="bg-brand relative"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    >
      <div className="wrapper flex items-center justify-between py-4 text-white">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <img src={logo} alt="logo" />
        </Link>

        {/* Desktop Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/courses" className={navLinkClass}>
            Courses
          </NavLink>
          <NavLink to="/creators" className={navLinkClass}>
            Creators
          </NavLink>
        </nav>

        {/* Desktop Right Action Items */}
        <div className="hidden md:flex items-center gap-6 text-base font-normal">
          <NavLink to="/signin" className={navLinkClass}>
            Sign In
          </NavLink>
          <NavLink to="/join" className={navLinkClass}>
            Join Us
          </NavLink>
          <NavLink
            to="/cart"
            aria-label="Shopping Cart"
            className={navLinkClass}
          >
            <CartIcon />
          </NavLink>
        </div>

        {/* Mobile Toggle & Cart Icon */}
        <div className="flex md:hidden items-center gap-4">
          <NavLink
            to="/cart"
            aria-label="Shopping Cart"
            className={navLinkClass}
            onClick={closeMenu}
          >
            <CartIcon />
          </NavLink>
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-white cursor-pointer hover:text-lime transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with Smooth Transition */}
      <div
        className={`md:hidden bg-brand border-t border-white/10 px-4 flex flex-col gap-4 text-white overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[400px] py-6 opacity-100"
            : "max-h-0 py-0 opacity-0 border-t-0"
        }`}
        style={{
          backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
          backgroundSize: "80px 80px",
        }}
      >
        <NavLink to="/" className={navLinkClass} onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/courses" className={navLinkClass} onClick={closeMenu}>
          Courses
        </NavLink>
        <NavLink to="/creators" className={navLinkClass} onClick={closeMenu}>
          Creators
        </NavLink>
        <div className="border-t border-white/10 pt-4 flex flex-col gap-4">
          <NavLink to="/signin" className={navLinkClass} onClick={closeMenu}>
            Sign In
          </NavLink>
          <NavLink to="/join" className={navLinkClass} onClick={closeMenu}>
            Join Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
