'use client'

import React from 'react';

const LandingPage = () => {
    return (
        <div>
          <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white text-center py-20">
            <h1 className="text-5xl font-extrabold mb-4">¡Bienvenido a PetLand!</h1>
            <p className="text-lg mb-6">Tu destino para todo lo relacionado con tus adorables mascotas.</p>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">Comienza ahora</button>
          </div>
          <section className="bg-gray-100 py-16">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-4">Acerca de nosotros</h2>
              <p className="text-gray-700">En PetLand, nos dedicamos a proporcionar productos y servicios de alta calidad para el cuidado y el disfrute de tus mascotas.</p>
            </div>
          </section>
          <section className="py-16">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-4">Explora nuestro mundo</h2>
              <p className="text-gray-700">Descubre una amplia variedad de productos y servicios diseñados para hacer felices a tus mascotas.</p>
            </div>
          </section>
          <section className="bg-gray-100 py-16">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-4">¡Empieza ahora!</h2>
              <p className="text-gray-700">Regístrate hoy para acceder a funciones exclusivas y aprovechar al máximo la experiencia PetLand.</p>
              <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">Regístrate</button>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-4">Descubre más con nuestras perspicacias</h2>
              <p className="text-gray-700">Mantente informado sobre las últimas tendencias y consejos para el cuidado de tus mascotas.</p>
            </div>
          </section>
        </div>
      );
};

export default LandingPage;
