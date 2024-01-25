import React from "react";

const Card = () => {
  return (
    <div className="rounded-lg bg-cerah_50 shadow-lg">
      <div className="flex flex-col items-center p-10">
        <div className="h-10 w-10 p-2 bg-air rounded-2xl text-white">
          {/* <img className="w-full" src="public/img/Laravel.svg" alt="" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
            />
          </svg>
        </div>
        <h4 className="text-black mt-5">Pohon</h4>
        <p className="text-center font-light text-sm mt-2 text-gray">
          "Sebagai penjaga hidup, pohon hela nafas bumi dengan elok."
        </p>
      </div>
    </div>
  );
};

export default Card;
