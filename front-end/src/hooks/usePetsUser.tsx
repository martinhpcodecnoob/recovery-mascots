//Traer todas las  mascotas
import { useQuery } from "@tanstack/react-query";
import { InterfacePetsUser } from "../interfaces/pets.interface";

const URL_BACK = process.env.NEXT_PUBLIC_BACKEND_URI

const getPetUser = async(userId:string):Promise<{ status: number; data?: InterfacePetsUser[]; error?: string }> => {
    try {
        const response = await fetch(`${URL_BACK}/api/pets/pet/getPets/${userId}`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
        }
        })
        
        const data = await response.json()
        // console.log("getpetuserss",data);
        return { 
            status: response.status,
            data
        }
    } catch (error) {
        console.error(
            "Error del servidor al intentar traer los pets",
            error
        );
        return {
            status: 500,
            error: "Error del servidor al intentar traer los pets",
        };
    }
}

export const usePetsUser = (userId:string) => {
    const petsUserQuery = useQuery({
        queryKey:['getPetsUserss'],
        queryFn:() => getPetUser(userId),
        // refetchOnWindowFocus:false
        staleTime: 5000
    })

    return petsUserQuery
}
