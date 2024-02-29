'use client'

import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-[#FFF1E0] p-4 flex justify-between items-center fixed w-full z-20">
          <div className="text-identipet text-2xl font-bold">Identipet</div>
          <div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2">Register</button>
            <button className="bg-green-500 text-white py-2 px-4 rounded-md">Login</button>
          </div>
        </nav>
      );
}

export default Navbar