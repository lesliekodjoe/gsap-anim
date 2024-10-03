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
      <div className="hidden lg:block">
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Footer">Footer</Link>
      </div>
    </nav>
  );
};

export default Navbar;
