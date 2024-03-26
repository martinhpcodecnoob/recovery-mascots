//Traer todas las  mascotas
import { useQuery } from "@tanstack/react-query";
import { InterfacePetsUser } from "../interfaces/pets.interface";

/* const URL_BACK = process.env.NEXT_PUBLIC_BACKEND_URI  */
const URL_BACK = process.env.NEXT_PUBLIC_BACKEND_URL

const getPetUser = async(userId:string,accessToken:string):Promise<{ status: number; data?: InterfacePetsUser[]; error?: string }> => {
    try {
        const response = await fetch(`${URL_BACK}/api/pets/pet/getPets`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'X-User-Id': `${userId}`,
            'Authorization': `${accessToken}`,
        }
        })
        
        const data = await response.json()
        return { 
            status: response.status,
            data
        }
    } catch (error) {
        console.error(
            "Error del servidor al intentar traer las mascotas de un usuario",
            error
        );
        return {
            status: 500,
            error: "Error del servidor al intentar traer las mascotas de un usuario",
        };
    }
}

export const usePetsUser = (userId:string,accessToken:string) => {
    const petsUserQuery = useQuery({
        queryKey:['getPetsUserss'],
        queryFn:() => getPetUser(userId,accessToken),
        // refetchOnWindowFocus:false
        staleTime: 5000
    })

    return petsUserQuery
}
