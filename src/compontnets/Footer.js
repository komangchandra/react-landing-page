import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gelap text-center pt-10 pb-10 mt-20 text-xs">
      <p className="font-semibold text-gray-500">
        Dibuat dengan ❤️ oleh{" "}
        <span className="text-cerah_50">Komang Chandra Winata</span>
      </p>
      <p className="font-semibold text-gray-500">
        menggunakan{" "}
        <a
          href="https://legacy.reactjs.org/"
          className="text-cerah_50"
          target="_blank">
          ReactJS
        </a>
        {" & "}
        <a
          href="https://tailwindcss.com/"
          className="text-cerah_50"
          target="_blank">
          Tailwind CSS.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
