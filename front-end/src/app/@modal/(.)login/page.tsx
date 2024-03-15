import LoginForm from "./LoginForm";
import {Modal} from "./modal";

export default function page() {
    return (
        <Modal>
            <div className="w-[20rem] h-[35rem] flex flex-col justify-center items-center">
                <div className="text-[3rem] font-bold text-identipet">Identipet</div>
                <div>Inicia Sesion</div>
                <LoginForm/>

            </div>
        </Modal>
    )
}
