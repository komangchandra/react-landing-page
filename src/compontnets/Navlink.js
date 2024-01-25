import React from "react";

const Navlink = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-evenly ms-auto">
        <a
          href="#blog"
          className="block py-3 text-neutral-300 hover:text-neutral-100 lg:py-5">
          Blog
        </a>
        <a
          href="#Galery"
          className="block py-3 text-neutral-300 hover:text-neutral-100 lg:py-5">
          Galery
        </a>
        <a
          href="#About"
          className="block py-3 text-neutral-300 hover:text-neutral-100 lg:py-5">
          About
        </a>
      </div>
      <div className="flex flex-col lg:flex-row">
        <a
          href="#"
          className="block py-3 text-neutral-300 hover:text-neutral-100 lg:py-5">
          Login
        </a>
        <a
          href="#"
          className="block py-3 text-neutral-300 hover:text-neutral-100 lg:py-5">
          Register
        </a>
      </div>
    </>
  );
};

export default Navlink;
