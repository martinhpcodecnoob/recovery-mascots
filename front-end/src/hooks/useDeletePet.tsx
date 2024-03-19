import { InterfacePetsUser } from "@/interfaces/pets.interface"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const URL_BACK = process.env.NEXT_PUBLIC_BACKEND_URI

interface InterfacReturnData {
    status:number,
    id:string,
    error?:string
}

const deletePet = async(id:string):Promise<InterfacReturnData> => {
    try {
        const response = await fetch(`${URL_BACK}/api/pets/pet/delete`,{
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(id)
        })

        const data = await response.json()
        return {
            status:response.status,
            id
        }
    } catch (error) {
        console.error(
            "Error del servidor al intentar eliminar un pet",
            error
        );
        return {
            status: 500,
            error: "Error del servidor al intentar eliminar un pet",
            id
        };
    }
}

const useDeletePet = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:deletePet,
        onSuccess:(dataReturn:InterfacReturnData) => {
            queryClient.setQueryData(['getPetsUserss'],
                (prevPets?:InterfacePetsUser[] | undefined) => prevPets ? 
                    prevPets.filter(pet => pet._id !== dataReturn.id)
                    :
                    prevPets
            )
        }
    })
}

export default useDeletePet