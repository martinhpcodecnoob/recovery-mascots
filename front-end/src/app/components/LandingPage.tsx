"use client";

import React from "react";

const LandingPage = () => {
  return (
    <div className="w-full h-[100vh] bg-hero_primary overflow-hidden relative">
      <img
        src={"/images/dog.webp"}
        className="hidden md:block absolute bottom-0 right-0 z-10 h-3/4"
        alt="Dog"
      />
      <div className="absolute top-2/3 left-2/3 md:block md:top-1/4 md:left-1/3 transform md:-translate-x-1/2 md:-translate-y-1/2 bg-hero_ligth_secondary rounded-full w-48 h-48"></div>
      <div className="absolute top-0 left-1/2 md:block md:top-1/2 md:left-0 transform md:-translate-x-1/2 md:-translate-y-1/2 bg-hero_ligth_secondary rounded-full w-96 h-96"></div>
      <div className="absolute -bottom-32 right-1/2 md:block md:bottom-0 md:right-0 bg-hero_ligth_secondary rounded-full w-96 h-96"></div>
      <div className="absolute -top-16 right-2/3 md:block md:bottom-0 md:right-1/4 bg-hero_ligth_secondary rounded-full w-96 h-96"></div>
      <div className="flex h-full w-full items-center justify-center ">
        <div className="flex flex-col w-full h-full md:w-3/4 justify-center items-center md:items-center">
          <h1 className="max-w-md text-2xl md:text-lg lg:text-2xl xl:text-3xl font-semibold font-sans text-center leading-tight z-50 m-6">
            En <span className="text-identipet">Pet Hub</span>, llevamos la
            seguridad de tus{" "}
            <span className="text-identipet">peludos amigos</span> al
            siguiente nivel. Introducimos{" "}
            <span className="text-identipet">collares personalizados</span>{" "}
            con <span className="text-identipet">QR</span>, la forma más
            inteligente de cuidar a tus mascotas.
          </h1>
          <button className="py-3 px-4 bg-hero_secondary rounded-md text-white font-semibold hover:scale-105 hover:shadow-2xl shadow-lg z-50">
            Mira nuestras mascotas
          </button>
        </div>
        <div className="md:w-full md:h-full" />
      </div>
    </div>
  );
};

export default LandingPage;
