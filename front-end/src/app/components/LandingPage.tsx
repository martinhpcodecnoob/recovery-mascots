"use client";

import React from "react";

const LandingPage = () => {
  return (
    <div className="w-full h-[100vh] bg-hero_primary ">
      <img
        src={"/images/dog.webp"}
        className="absolute top-0 right-0 z-10"
        alt="Dog"
      />
      <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-hero_ligth_secondary rounded-full w-48 h-48"></div>
      <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-hero_ligth_secondary rounded-full w-96 h-96"></div>
      <div className="absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2 bg-hero_ligth_secondary rounded-full w-96 h-96"></div>
      <div className="absolute -bottom-1/4 right-20 bg-hero_ligth_secondary rounded-full w-96 h-96"></div>
      <div className="flex h-full w-full items-center justify-center ">
        <div className="flex flex-col w-3/4 h-full justify-center items-center">
          <h1 className="max-w-md text-2xl md:text-sm lg:text-1xl xl:text-2xl font-semibold text-center leading-tight z-50 m-6">
            En Pet Hub, llevamos la seguridad de tus peludos
            amigos al siguiente nivel. Introducimos collares personalizados con
            QR, la forma más inteligente de cuidar a tus mascotas.
          </h1>
          <button className="py-3 px-4 bg-hero_secondary rounded-md text-white z-50">
            Mira nuestras mascotas
          </button>
        </div>
        <div className="w-full h-full" />
      </div>
    </div>
  );
};

export default LandingPage;
