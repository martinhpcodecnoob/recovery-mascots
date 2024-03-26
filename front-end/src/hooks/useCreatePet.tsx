import { InterfacePetsUser } from "@/interfaces/pets.interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PetCreate } from "@/interfaces/pet.interface";
import { toast } from "react-toastify";

const URL_BACK = process.env.NEXT_PUBLIC_BACKEND_URI;

interface InterfacReturnData {
  status: number;
  data?: InterfacePetsUser;
  error?: string;
}

const createPet = async (formData: FormData): Promise<InterfacReturnData> => {
  try {
    const response = await fetch(`${URL_BACK}/api/pets/pet/create`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return {
      status: response.status,
      data,
    };
  } catch (error) {
    console.error("Error del servidor al intentar crear una mascota.", error);
    return {
      status: 500,
      error: "Error del servidor al intentar crear una mascota.",
    };
  }
};

const useCreatePet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPet,
    onSuccess: (dataReturn: InterfacReturnData) => {
        const successfulStatusCodes = [200, 201, 203];
        if (successfulStatusCodes.includes(dataReturn.status)) {
        toast.success("Mascota creada exitosamente");
      } else {
        toast.error(dataReturn.error || "Error del servidor");
      }

      queryClient.setQueryData(
        ["getPetsUserss"],
        (prevPets?: InterfacePetsUser[]) =>
          prevPets ? [dataReturn.data, ...prevPets] : [dataReturn.data]
      );
    },
  });
};

export default useCreatePet;
