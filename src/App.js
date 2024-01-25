import React from "react";
import Navbar from "./compontnets/Navbar";
import Hero from "./compontnets/Hero";
import Card from "./compontnets/Card";
import Footer from "./compontnets/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="produk" className="px-0 w-full py-20 bg-air">
        <div className="container w-10/12 items-center flex flex-col mx-auto lg:h-screen">
          {/* Judul */}
          <div className="flex flew-row mx-auto items-center">
            <svg className="stroke-white stroke-2 h-5 w-5">
              <line x1={0} y1="10px" x2="10px" y2="10px" />
            </svg>
            <h1 className="text-cerah_50 font-light text-xl lg:text-3xl">
              Produk <span className="font-bold">Kami</span>
            </h1>
          </div>

          {/* Produk Card*/}
          <div className="grid gap-10 px-4 md:grid-cols-3 md:px-0 mt-20">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
