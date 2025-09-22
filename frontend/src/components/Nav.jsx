import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
            E
          </div>
          <span className="text-xl font-bold text-gray-800">EcommShop</span>
        </div>
         

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/products" className={linkClass}>
            Products
          </NavLink>
           <NavLink to="/admin/create-product" className={linkClass}>
            Create Products
          </NavLink>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <NavLink
            to="/login"
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Sign In
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center p-2 rounded hover:bg-gray-100"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4">
          <nav className="flex flex-col space-y-2">
            <NavLink
              to="/"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              to="/login"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 w-max"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
