import { UserLogin, UserRegister } from "@/interfaces/auth.interface";
import { PetCreate, PetImage } from "@/interfaces/pet.interface";

const URL_BACK = process.env.NEXT_PUBLIC_BACKEND_URL

export const login  = async (input:UserLogin): Promise<{status:number, data?:any, error?:string}> => {
    try {
        const response = await fetch(`${URL_BACK}/api/pets/auth/login`,{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(input)
        })

        const data = await response.json()
        return {
            status: response.status,
            data
        }
    } catch (error) {
        console.error("Error del servidor al iniciar sesión", error);
        return {
            status: 500,
            error: "Error del servidor al iniciar sesión",
        };
    }
}

export const register  = async (input: UserRegister): Promise<{status:number, data?:any, error?:string}> => {
    try {
        const response = await fetch(`${URL_BACK}/api/pets/auth/register`,{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(input)
        })

        const data = await response.json()
        return {
            status: response.status,
            data
        }
    } catch (error) {
        console.error("Error del servidor al intentar registrar al usuario.", error);
        return {
            status: 500,
            error: "Error del servidor al intentar registrar al usuario.",
        };
    }
}

export const createPet  = async (input: PetCreate): Promise<{status:number, data?:any, error?:string}> => {
    try {
        const response = await fetch(`${URL_BACK}/api/pets/pet/create`,{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(input)
        })

        const data = await response.json()
        return {
            status: response.status,
            data
        }
    } catch (error) {
        console.error("Error del servidor al intentar crear una mascota.", error);
        return {
            status: 500,
            error: "Error del servidor al intentar crear una mascota.",
        };
    }
}

export const createImage  = async (input: any): Promise<{status:number, data?:any, error?:string}> => {
    try {

        const response = await fetch(`${URL_BACK}/api/pets/pet/image`,{
            method:'POST',
            body: input,

        })

        const data = await response.json()
        return {
            status: response.status,
            data
        }
    } catch (error) {
        console.error("Error del servidor al intentar crear una mascota.", error);
        return {
            status: 500,
            error: "Error del servidor al intentar crear una mascota.",
        };
    }
}