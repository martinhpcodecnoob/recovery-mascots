import { UserLogin } from "@/interfaces/auth.interface";
const URL_BACK = process.env.NEXT_PUBLIC_BACKEND_URL

export const login  = async (input:UserLogin): Promise<{status:number, data?:any, error?:string}> => {
    try {
        const response = await fetch(`${URL_BACK}/api/mascots/auth/login`,{
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