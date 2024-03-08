import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { IoHeart } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const FooterbarHome = () => {
    return (
        <>
            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
                <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium text-gray-400">
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-identipet hover:text-white">
                        <MdHomeFilled size={25}/>
                        {/* <span className="text-sm text-gray-500 group-hover:text-blue-600">Home</span> */}
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-identipet hover:text-white">
                        <IoHeart size={25}/>
                        {/* <span className="text-sm text-gray-500 group-hover:text-blue-600">Wallet</span> */}
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-identipet hover:text-white">
                        <IoIosNotifications size={25}/>
                        {/* <span className="text-sm text-gray-500 group-hover:text-blue-600">Settings</span> */}
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-identipet hover:text-white">
                        <FaUserCircle size={25}/>
                        {/* <span className="text-sm text-gray-500 group-hover:text-blue-600">Profile</span> */}
                    </button>
                </div>
            </div>
        </>
    )
}

export default FooterbarHome