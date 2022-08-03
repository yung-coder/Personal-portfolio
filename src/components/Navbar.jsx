import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="flex w-full font-semibold backdrop-blur-3xl text-slate-300">
        <div class="w-full px-2   backdrop-blur-3xl flex justify-center">
            <ul class="flex text-sm space-y-1 space-x-4">
              <li></li>
              <li className="hover:text-white">
                <a
                  href=""
                  class=" py-2 block"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="hover:text-white">
                <a
                  href=""
                  class="py-2 block"
                >
                  Projects
                </a>
              </li>
              <li className="hover:text-white">
                <a
                  href=""
                  class="py-2 block"
                >
                  About me
                </a>
              </li>
              <li className="hover:text-white">
                <a
                  href=""
                  class="py-2 block"
                >
                  Contact me
                </a>
              </li>
            </ul>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
