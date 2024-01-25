import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-10 bg-transparent px-2 lg:px-0">
      <div className="container mx-auto mt-4 flex w-full lg:w-10/12 flex-col items-center rounded-3xl bg-gradient-to-r from-cerah_50  to-air lg:flex-row">
        {/* Brand & Menu Button Wrap */}
        <div className="flex w-full items-center justify-between  px-5 py-3 lg:basis-1/4">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="text-gray-200 hover:text-gray-400 flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 me-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </a>
          </div>
          {/* Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus: outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } ms-auto w-full items-center px-5 py-3 lg:flex lg:basis-2/3 lg:flex-row mt-2 lg:mt-0`}>
          <div className="flex flex-col lg:flex-row">
            <a
              href="#produk"
              className="py-2 font-normal uppercase text-gray-200 hover:text-gray-400 lg:mx-8 lg:py-0">
              Produk
            </a>
            <a
              href="#"
              className="py-2 font-normal uppercase text-gray-200 hover:text-gray-400 lg:mx-8 lg:py-0">
              Servis
            </a>
            <a
              href="#"
              className="py-2 font-normal uppercase text-gray-200 hover:text-gray-400 lg:mx-8 lg:py-0">
              Tentang Kami
            </a>
            <a
              href="#"
              className="py-2 font-normal uppercase text-gray-200 hover:text-gray-400 lg:mx-8 lg:py-0">
              Kontak
            </a>
          </div>
          <div className="ms-auto flex flex-col lg:flex-row">
            <a
              href="#"
              className="py-2 font-semibold uppercase text-gray-200 hover:text-gray-400 lg:py-0">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
