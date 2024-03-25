"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";

import { petCreateSchema } from "@/app/schemas/pet.schema";
import { PetModel } from "@/app/models/pet.model";

import "react-toastify/dist/ReactToastify.css";

import useCreatePet from "@/hooks/useCreatePet";
import { usePetsUser } from "@/hooks/usePetsUser";
import { Session } from "next-auth";

import {
  Name,
  Age,
  Breed,
  Weight,
  Category,
  Description,
  Image,
} from "./inputs";

const CreatePet = ({ session }: { session: Session }) => {
  const userId = session?.user?.id || "";

  const [loading, setLoading] = useState(false);
  const {
    mutate: createPetMutation,
    isSuccess,
    isError,
    error,
  } = useCreatePet();

  type CreatePetSchema = z.infer<typeof petCreateSchema>;
  const {
    handleSubmit: handleCreatePetSubmit,
    control: createPetControl,
    setValue: setCreatePetValue,
    formState: { errors: createPetErrors },
  } = useForm<CreatePetSchema>({
    resolver: zodResolver(petCreateSchema),
  });

  const onSubmitCreatePet = async (data: PetModel) => {
    setLoading(true);
    try {
      const createPetQuery = createPetMutation({
        ...data,
        images: ["image"],
        userId: "65f235de79d90941375e8417",
      });
      /* const createPetResponse = await createPet({...data, images: ["image"], userId:"65f235de79d90941375e8417"}); */

      if (isSuccess) {
        toast.success("Mascota creada exitosamente");
      }
      if (isError) {
        toast.error(error.message);
      }
    } catch (error) {
      toast.error(error ? error.toString() : "Error del servidor");
      console.error("Error al intentar crear una mascota", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-[95vh] p-4 bg-hero_ligth_secondary">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        limit={1}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />

      <form
        onSubmit={handleCreatePetSubmit(onSubmitCreatePet)}
        className="flex flex-col justify-center items-center w-full"
      >
        <h1 className="bg-hero_secondary text-xl text-center text-white font-semibold w-full h-8">
          Crear mascota
        </h1>
        <div className="flex lg:flex-row flex-col justify-center items-center w-full h-full mt-4">
          <Name
            control={createPetControl}
            errors={createPetErrors}
            name="name"
          />
          <Age control={createPetControl} errors={createPetErrors} name="age" />
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center w-full h-full">
          <Breed
            control={createPetControl}
            errors={createPetErrors}
            name="breed"
          />
          <Weight
            control={createPetControl}
            errors={createPetErrors}
            name="weight"
          />
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center w-full h-full">
          <Category
            control={createPetControl}
            errors={createPetErrors}
            name="category"
          />
          <Description
            control={createPetControl}
            errors={createPetErrors}
            name="description"
          />
        </div>
        {/* <Image
          control={createPetControl}
          errors={createPetErrors}
          name="images"
        /> */}
        <button
          type="submit"
          className={`rounded-full py-2 px-5 mt-4 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-hero_secondary text-white"
          } w-1/2 md:w-1/4`}
          disabled={loading}
        >
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-t-2" />
            </div>
          ) : (
            "Crear Mascota"
          )}
        </button>
      </form>
    </div>
  );
};

export default CreatePet;
