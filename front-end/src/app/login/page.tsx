// 'use client'
import LoginForm from "../@modal/(.)login/LoginForm";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";


export default function page() {
    
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div className="w-[20rem] h-[35rem] relative flex flex-col justify-center items-center bg-white rounded-[3rem]">
                <Link href={'/'} className="absolute top-0 left-0 pl-5 pt-4 text-[2rem] text-identipet"><FaArrowLeft /></Link>
                <div className="text-[3rem] font-bold text-identipet">Identipet</div>
                <div>Inicia Sesion</div>
                <LoginForm/>
            </div>
        </div>
    )
}

