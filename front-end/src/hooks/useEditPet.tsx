import { InterfacePetsUser } from "@/interfaces/pets.interface"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const URL_BACK = process.env.NEXT_PUBLIC_BACKEND_URI

interface InterfacReturnData {
    status:number,
    data?:InterfacePetsUser,
    error?:string
}

const editPet = async(pet:InterfacePetsUser):Promise<InterfacReturnData> => {
    try {
        const response = await fetch(`${URL_BACK}/api/pets/pet/update`,{
            method:'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(pet)
        })
        const data = await response.json()
        return {
            status: response.status,
            data
        }
    } catch (error) {
        console.error(
            "Error del servidor al intentar modificar un pet",
            error
        );
        return {
            status: 500,
            error: "Error del servidor al intentar modificar un pet",
        };
    }
}

const useEditPet = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:editPet,
        onSuccess:(dataReturn:InterfacReturnData) => {
            queryClient.setQueryData(['getPetsUserss'],
                (prevPets: InterfacePetsUser[] | undefined) => {
                    if (prevPets) {
                        prevPets.map((pet) => {
                            if (pet._id === dataReturn.data?._id) {
                                if (dataReturn.data) {
                                    pet = dataReturn.data
                                }
                            }
                            return pet
                        })
                    }
                }
            )
        }
    })
}

export default useEditPet