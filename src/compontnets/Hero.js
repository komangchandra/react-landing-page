import React from "react";
import Bumi from "./../asset/bumi.jpg";

const Hero = () => {
  return (
    <div id="hero" className="px-0 w-full py-20 lg:p-0">
      <div className="container w-10/12 items-center flex flex-col lg:flex-row mx-auto lg:h-screen">
        <div className="basis-1/2">
          <img src={Bumi} alt="gambar" />
        </div>
        <div className="basis-1/2 lg:mt-0 mt-5 flex flex-col">
          <div>
            <h3 className="font-light lg:text-7xl text-4xl text-cerah_50 lg:text-left text-center">
              Kekuatan Untuk Bumi,
              <span className="font-bold">Tanggung Jawab Kita.</span>
            </h3>
          </div>
          <div className="mt-5 flex items-center justify-center lg:justify-start">
            <button className="bg-cerah_50 rounded-3xl py-2 px-4 focus:outline-none me-4 hover:bg-cerah_100 hover:text-cerah_50">
              Lindungi Sekarang
            </button>
            <button className="bg-transparent border border-cerah_50 rounded-3xl py-2 px-4 focus:outline-none text-cerah_50 hover:border-cerah_100 hover:text-slate-900 hover:bg-cerah_50">
              Ikuti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
