"use client";

import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { petCreateSchema } from "@/app/schemas/pet.schema";
import { PetModel } from "@/app/models/pet.model";

import {
  Name,
  Age,
  Breed,
  Weight,
  Category,
  Description,
  Image,
} from "./inputs";

const CreatePet = () => {
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
    try {
      console.log("Datos del form de create Pets: ", data);
    } catch (error) {
      console.error("Error al intentar crear una mascota", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] p-4 bg-hero_ligth_secondary">
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
          className="bg-hero_secondary px-5 py-2 rounded-lg text-center text-white font-medium"
          type="submit"
        >
          Crear Cuenta
        </button>
      </form>
    </div>
  );
};

export default CreatePet;
