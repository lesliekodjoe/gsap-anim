import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between mx-10 my-4">
      <Link to="/">
        <div className="w-[8em]">
          <img
            src="https://assets.codepen.io/2621168/logo_1.svg"
            className="w-full h-full"
            alt="SkillForm Logo"
          ></img>
        </div>
      </Link>
      <div className="hidden lg:flex gap-x-5">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/Contact" className="hover:underline">
          Contact
        </Link>
        <Link to="/Footer" className="hover:underline">
          Footer
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
