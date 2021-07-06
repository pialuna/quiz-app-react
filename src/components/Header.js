import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="px-4 py-4 sticky top-0 flex flex-row items-center uppercase font-extrabold text-purple-200 shadow-md bg-gradient-to-r from-purple-800 to-purple-500">
      <Link to="/" className="flex-shrink-0 mr-4 text-purple-50">
        Quiz Game
      </Link>
    </nav>
  );
};

export default Header;
