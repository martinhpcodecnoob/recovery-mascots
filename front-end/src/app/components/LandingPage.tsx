"use client";

import React from "react";

const LandingPage = () => {
  return (
    <div className="w-full h-[100vh] bg-hero_primary overflow-hidden relative">
      <img
        src={"/images/dog.webp"}
        className="hidden lg:block absolute bottom-0 right-0 z-10 h-3/4"
        alt="Dog"
      />
      <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-hero_ligth_secondary rounded-full w-48 h-48"></div>
      <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-hero_ligth_secondary rounded-full w-96 h-96"></div>
      <div className="absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2 bg-hero_ligth_secondary rounded-full w-96 h-96"></div>
      <div className="absolute -bottom-1/4 right-20 bg-hero_ligth_secondary rounded-full w-96 h-96"></div>
      <div className="flex h-full w-full items-center justify-center ">
        <div className="flex flex-col w-full lg:w-3/4 h-full justify-center items-center lg:items-end">
          <h1 className="max-w-md text-2xl md:text-lg lg:text-2xl xl:text-3xl font-semibold font-sans text-balance leading-tight z-50 m-6 transform translate-x-20 duration-500 ease-out">
            En <span className="text-identipet">Pet Hub</span>, llevamos la
            seguridad de tus{" "}
            <span className="text-identipet">peludos amigos</span> al
            siguiente nivel. Introducimos{" "}
            <span className="text-identipet">collares personalizados</span>{" "}
            con <span className="text-identipet">QR</span>, la forma más
            inteligente de cuidar a tus mascotas.
          </h1>
          <button className="py-3 px-4 bg-hero_secondary rounded-md text-white font-semibold transition-transform transform hover:scale-105 hover:shadow-2xl shadow-lg z-50">
            Mira nuestras mascotas
          </button>
        </div>
        <div className="w-full h-full" />
      </div>
    </div>
  );
};

export default LandingPage;
