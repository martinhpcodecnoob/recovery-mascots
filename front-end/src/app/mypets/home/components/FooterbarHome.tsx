'use client'
import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { IoHeart } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import Link from 'next/link';


const FooterbarHome = () => {
    
    const pathname = usePathname()
    const arrayPath = pathname.split('/')

    return (
        <>
            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
                <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium text-gray-400">
                    <Link 
                        href={'/mypets'} 
                        className={`inline-flex flex-col items-center justify-center px-5 ${arrayPath[1] === 'mypets' && arrayPath.length === 2 ? 'bg-identipet text-white':'hover:bg-violet-200'}`}
                    >
                        <MdHomeFilled size={25}/>
                        {/* <span className="text-sm text-gray-500 group-hover:text-blue-600">Home</span> */}
                    </Link>
                    <button 
                        type="button" 
                        className={`inline-flex flex-col items-center justify-center px-5 ${arrayPath[2] === 'myfavorites' ? 'bg-identipet text-white':'hover:bg-violet-200'}`}
                    >
                        <IoHeart size={25}/>
                        {/* <span className="text-sm text-gray-500 group-hover:text-blue-600">Wallet</span> */}
                    </button>
                    <Link 
                        href={'/mypets/notification'} 
                        className={`inline-flex flex-col items-center justify-center px-5 ${arrayPath[2] === 'notification' ? 'bg-identipet text-white':'hover:bg-violet-200'}`}
                    >
                        <IoIosNotifications size={25}/>
                        {/* <span className="text-sm text-gray-500 group-hover:text-blue-600">Settings</span> */}
                    </Link>
                    <Link 
                        href={'/mypets/account'} 
                        className={`inline-flex flex-col items-center justify-center px-5 ${arrayPath[2] === 'account' ? 'bg-identipet text-white':'hover:bg-violet-200'}`}
                    >
                        <FaUserCircle size={25}/>
                        {/* <span className="text-sm text-gray-500 group-hover:text-blue-600">Profile</span> */}
                    </Link>
                </div>
            </div>
        </>
    )
}

export default FooterbarHome