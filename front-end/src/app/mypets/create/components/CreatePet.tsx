"use client";

import React, { useState, useRef } from "react";
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
  const accessToken = session?.user?.accessToken || "";
  const submitButtonRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<File []| null>(null);

  const {
    mutate: createPetMutation,
    isSuccess,
    isError,
    data: createPetResponse,
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
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (files && files.length > 0) {
        files.forEach((image, index) => {
          formData.append(`image${index}`, image);
        });
      }

       createPetMutation({formData, userId, accessToken});
      
    } catch (error) {
      toast.error(error ? error.toString() : "Error del servidor");
      console.error("Error al intentar crear una mascota", error);
    } finally {
      setLoading(false);
    }
  };

  const receiveDataFromChild = async (file: File[] | undefined) => {
    if (file) {
      setFiles(file);
    } else {
      setFiles(null);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full p-4 bg-hero_ligth_secondary md:bg-hero_primary">
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
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="w-full h-full">
            <div className="flex flex-col justify-center items-center w-full mt-4">
              <Name
                control={createPetControl}
                errors={createPetErrors}
                name="name"
              />
              <Age
                control={createPetControl}
                errors={createPetErrors}
                name="age"
              />
            </div>
            <div className="flex flex-col justify-center items-center w-full">
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
            <div className="flex flex-col justify-center items-center w-full">
              <Description
                control={createPetControl}
                errors={createPetErrors}
                name="description"
              />
              <Category
                control={createPetControl}
                errors={createPetErrors}
                name="category"
              />
            </div>
          </div>
          <div className="w-full">
            <Image sendDataToParent={receiveDataFromChild} />
          </div>
        </div>
        <button
          type="submit"
          ref={submitButtonRef}
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
