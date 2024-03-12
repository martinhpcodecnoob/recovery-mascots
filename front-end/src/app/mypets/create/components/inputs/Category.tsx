"use client";

import React from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { PetModel } from "@/app/models/pet.model";

type CategoryProps = {
  control: Control<PetModel>;
  errors: FieldErrors<PetModel>;
  name: keyof PetModel;
};

const Category = ({ control, errors, name }: CategoryProps) => {
  return (
    <div className="w-[80%] h-[30%] mb-6 flex flex-col justify-center items-center md:w-[60%]">
      <p className=" w-full text-lg text-left font-medium m-2 ml-4 ">Categorias</p>
      <div className="flex flex-col w-full items-center mb-2">
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div>
              <button
                className={`${
                  field.value === "Gato"
                    ? "bg-blue-500"
                    : "bg-gray-300"
                } text-white py-2 px-12 rounded-full mr-2`}
                onClick={() => field.onChange("Gato")}
              >
                Gato
              </button>
              <button
                className={`${
                  field.value === "Perro"
                    ? "bg-blue-500"
                    : "bg-gray-300"
                } text-white py-2 px-12 rounded-full`}
                onClick={() => field.onChange("Perro")}
              >
                Perro
              </button>
            </div>
          )}
        />
      </div>
      {errors && errors.category ? (
        <p className="text-red-600 h-[15px] mb-3 2xl:h-[30px] 2xl:text-xl mr-auto">
          {errors.category.message}
        </p>
      ) : (
        <div className=" h-[15px] mb-3  2xl:h-[30px] "></div>
      )}
    </div>
  );
};

export default Category;
