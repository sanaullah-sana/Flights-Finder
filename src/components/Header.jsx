import React from "react";
import { LuPlane } from "react-icons/lu";

const Header = () => (
  <header className="text-center mb-10 w-full max-w-4xl">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 flex items-center justify-center">
      <LuPlane className="mr-3 text-blue-500 transform -rotate-45" /> Flight Finder
    </h1>
    <p className="mt-3 text-lg sm:text-xl text-gray-600">
      Find the best flight deals for your next adventure.
    </p>
  </header>
);

export default Header;

