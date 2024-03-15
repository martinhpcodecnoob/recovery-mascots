import { CreatePetsUserTSInput, CreatePetsUserTSOutput, InterfacePetsUser } from "@/interfaces/pets.interface"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const URL_BACK = process.env.NEXT_PUBLIC_BACKEND_URI

interface InterfacReturnData {
    status:number,
    data?:CreatePetsUserTSOutput,
    error?:string
}

const createPet = async(input:CreatePetsUserTSInput): Promise<InterfacReturnData> => {
    try {
        const response = await fetch(`${URL_BACK}/api/pets/pet/create`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(input)
        })
    
        const data = await response.json()
        return {
            status: response.status,
            data
        }
    } catch (error) {
        console.error(
            "Error del servidor al intentar crear un pet",
            error
        );
        return {
            status: 500,
            error: "Error del servidor al intentar crear un pet",
        };
    }
}

const useCreatePet = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn:createPet,
        onSuccess:(dateReturn:InterfacReturnData) => {
            queryClient.setQueryData(['getPetsUserss'],
                (prevPets?:InterfacePetsUser[])   => prevPets ? [
                    dateReturn.data,
                    ...prevPets
                ] : [dateReturn.data]
            )
        }
    })
}

export default useCreatePet