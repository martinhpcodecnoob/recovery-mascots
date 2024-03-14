import { useQuery } from "@tanstack/react-query";
import { InterfacePetsUser } from "../interfaces/pets.interface";

const URL_BACK = process.env.NEXT_PUBLIC_BACKEND_URI

const getPetUser = async():Promise<{ status: number; data?: InterfacePetsUser[]; error?: string }> => {
    const response = await fetch(`${URL_BACK}/api/pets/pet/getPets/65e542cc0487e468c9e99bc4`,{
    method:'GET',
    headers:{
        'Content-Type': 'application/json',
    }
    })
    
    const data = await response.json()
    console.log(data);
    return { 
    status: response.status,
    data
    }
}

export const usePetsUser = () => {
    const petsUserQuery = useQuery({
        queryKey:['getPetsUserss'],
        queryFn:getPetUser,
        // refetchOnWindowFocus:false
        staleTime: 5000
    })

    return petsUserQuery
}
