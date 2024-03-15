'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { IoHeart } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { usePathname } from 'next/navigation';

const NavbarHome = () => {

    const pathname = usePathname()
    // console.log();
    
    return (
        <nav className='fixed z-50 mdx:invisible w-full h-14 shadow-xl bg-hero_ligth_secondary'>
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                {/* <Link href={"/"}>
                    <Image
                    src={vercel}
                    alt="logo"
                    className="cursor-pointer h-7 w-[9rem]"
                    priority
                    />
                </Link> */}
                <div className="text-identipet text-2xl font-bold">Identipet</div>
                <div className="hidden sm:flex text-white">
                    <ul className="hidden sm:flex space-x-4">
                        <Link href={"/mypets"} className='flex items-center justify-center'>
                            <MdHomeFilled size={20}/>
                            <li className="ml-1 hover:border-b text-[1.1rem]">
                            Home
                            </li>
                        </Link>
                        <Link href={"#about"} className='flex items-center justify-center'>
                            <IoHeart size={20}/>
                            <li className="ml-1 hover:border-b text-[1.1rem]">
                            Mis favoritos
                            </li>
                        </Link>
                        <Link href={"/mypets/notification"} className='flex items-center justify-center'>
                            <IoIosNotifications size={20}/>
                            <li className="ml-1 hover:border-b text-[1.1rem]">
                            Notificationes
                            </li>
                        </Link>
                        <Link href={"/mypets/account"} className='flex items-center justify-center'>
                            <FaUserCircle size={20}/>
                            <li className="ml-1 hover:border-b text-[1.1rem]">
                            Mi cuenta
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarHome