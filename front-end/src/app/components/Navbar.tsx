import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'
import UserOptionsPopper from './UserOptionsPopper';

const Navbar = () => {
    const {data:session} = useSession()
    console.log(session);
    
    return (
        <nav className="bg-[#FFF1E0] p-4 flex justify-between items-center fixed w-full z-20">
          <div className="text-identipet text-2xl font-bold">Identipet</div>
          <div>
            {
              session ? (
                <>
                  <UserOptionsPopper/>
                </>
              ) : (
                <>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2">Register</button>
                  <Link href={'/login'} className="bg-green-500 text-white py-2 px-4 rounded-md">Login</Link>
                </>
              )
            }
          </div>
        </nav>
      );
}

export default Navbar