import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav class="flex w-full font-semibold backdrop-blur-3xl text-slate-300">
        <div class="w-full px-2   backdrop-blur-3xl flex justify-center">
            <ul class="flex text-sm space-y-1 space-x-4">
              <li></li>
              <li className="hover:text-white">
                <Link
                  to="/"
                  class=" py-2 block"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="hover:text-white">
                <Link
                  to="/projects"
                  class="py-2 block"
                >
                  Projects
                </Link>
              </li>
              <li className="hover:text-white">
                <Link
                  to="/About"
                  class="py-2 block"
                >
                  About me
                </Link>
              </li>
              <li className="hover:text-white">
                <Link
                  to="/Contact"
                  class="py-2 block"
                >
                  Contact me
                </Link>
              </li>
            </ul>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
