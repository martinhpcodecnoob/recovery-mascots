"use client";

import React from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { PetModel } from "@/app/models/pet.model";

type ImageProps = {
  control: Control<PetModel>;
  errors: FieldErrors<PetModel>;
  name: keyof PetModel;
};

const Image = ({ control, errors, name }: ImageProps) => {
  return (
    <div className="w-[80%] h-[30%] mb-6 flex flex-col justify-center items-center md:w-[60%]">
      <p className=" w-full text-lg text-left font-medium m-2 ml-4 ">Selecciona una imagen</p>
      <div className="flex flex-col w-full items-center mb-2">
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="file"
              className="border rounded-lg py-2 px-3 bg-white w-full text-xl text-black"
              name={name}
              value={typeof field.value === "string" ? field.value : ""}
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

export default Image;
