"use client";

import React from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { PetModel } from "@/app/models/pet.model";

type NameProps = {
  control: Control<PetModel>;
  errors: FieldErrors<PetModel>;
  name: keyof PetModel;
};

const Name = ({ control, errors, name }: NameProps) => {
  return (
    <div className="mb-6 md:mb-0 flex flex-col justify-center items-center w-full h-full px-4">
      <p className=" w-full text-lg text-left font-medium m-2 ml-4 ">Nombre</p>
      <div className="flex flex-col w-full items-center md:mb-0 mb-2">
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              className="border rounded-lg py-2 px-3 bg-white w-full text-xl text-black"
              name={name}
              value={typeof field.value === "string" ? field.value : ""}
              placeholder="Nombre de la mascota"
              id={name}
            />
          )}
        />
      </div>
      {errors && errors.name ? (
        <p className="text-red-600 h-[15px] mb-3 2xl:h-[30px] 2xl:text-xl mr-auto">
          {errors.name.message}
        </p>
      ) : (
        <div className=" h-[15px] mb-3  2xl:h-[30px] "></div>
      )}
    </div>
  );
};

export default Name;
