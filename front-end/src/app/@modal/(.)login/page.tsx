'use client'
import LoginForm from "./LoginForm";
import {Modal} from "./modal";
import IntroLogin from "./IntroLogin";

export default function page() {
    
    return (
        <Modal>
            <div className="w-[20rem] h-[35rem] relative flex flex-col justify-center items-center bg-white rounded-[3rem]">
                <IntroLogin/>
                <LoginForm/>
            </div>
        </Modal>
    )
}
