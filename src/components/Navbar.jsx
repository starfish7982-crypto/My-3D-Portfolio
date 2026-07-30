import { NavLink } from "react-router-dom";
import { GITHUB_URL, LINKEDIN_URL } from "../constants";

const navLinkClass = ({ isActive }) =>
  isActive ? "text-blue-500" : "text-black hover:text-blue-500 transition-colors";

export const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md shrink-0"
      >
        <p className="blue-gradient_text">SL</p>
      </NavLink>

      <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm sm:text-lg font-medium">
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
        <NavLink to="/design" className={navLinkClass}>
          Design
        </NavLink>
        <NavLink to="/projects" className={navLinkClass}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>

        <span className="hidden sm:inline text-slate-300">|</span>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-500 transition-colors text-xs sm:text-lg"
        >
          GitHub
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-500 transition-colors text-xs sm:text-lg"
        >
          LinkedIn
        </a>
      </nav>
    </header>
  );
};
