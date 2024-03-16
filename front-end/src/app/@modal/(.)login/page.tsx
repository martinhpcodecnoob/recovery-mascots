'use client'
import LoginForm from "./LoginForm";
import {Modal} from "./modal";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

export default function page() {
    const router = useRouter();
    return (
        <Modal>
            <div className="w-[20rem] h-[35rem] relative flex flex-col justify-center items-center bg-white rounded-[3rem]">
                <button className="absolute top-0 left-0 pl-5 pt-4 text-[2rem] text-identipet" onClick={() => router.back()}><FaArrowLeft /></button>
                <div className="text-[3rem] font-bold text-identipet">Identipet</div>
                <div>Inicia Sesion</div>
                <LoginForm/>
            </div>
        </Modal>
    )
}
