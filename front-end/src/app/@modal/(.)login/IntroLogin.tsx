import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const IntroLogin = () => {
    const router = useRouter();
    return (
        <>
            <button className="absolute top-0 left-0 pl-5 pt-4 text-[2rem] text-identipet" onClick={() => router.back()}><FaArrowLeft /></button>
            <div className="text-[3rem] font-bold text-identipet">Identipet</div>
            <div>Inicia Sesion</div>
        </>
    )
}

export default IntroLogin