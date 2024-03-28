import { useQuery } from "@tanstack/react-query";
import { InterfaceUserData } from "@/interfaces/user.interface";

const URL_BACK = process.env.NEXT_PUBLIC_BACKEND_URI;

interface InterfaceReturnData {
  status: number;
  data?: InterfaceUserData;
  error?: string;
}

const fetchUserData = async (
  userId: string,
  accessToken: string
): Promise<InterfaceReturnData> => {
  try {
    if (!userId || !accessToken) {
      throw new Error("UserId y accessToken son obligatorios.");
    }

    const response = await fetch(`${URL_BACK}/api/pets/user/user`, {
      method: "GET",
      headers: {
        "X-User-Id": `${userId}`,
        Authorization: `${accessToken}`,
      },
    });

    if (!response.ok) {
      let errorMessage = "No se pudieron obtener los datos del usuario.";
      try {
        const errorData = await response.json();
        if (errorData && errorData.message) {
          errorMessage = errorData.message;
        }
      } catch (error) {
        console.error("Error al analizar datos de error:", error);
      }

      return {
        status: response.status,
        error: errorMessage,
      };
    }

    const data = await response.json();
    return {
      status: response.status,
      data,
    };
  } catch (error) {
    console.error("Error al obtener los datos del usuario:", error);
    return {
      status: 500,
      error: "Error al obtener los datos del usuario.",
    };
  }
};

export const useUserData = (userId: string, accessToken: string) => {
  const userQuery = useQuery({
    queryKey: ["userData"],
    queryFn: () => fetchUserData(userId, accessToken),
    staleTime: 5000,
  });

  return userQuery;
};
