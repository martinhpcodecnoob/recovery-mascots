"use client";

import React from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { PetModel } from "@/app/models/pet.model";

type WeightProps = {
  control: Control<PetModel>;
  errors: FieldErrors<PetModel>;
  name: keyof PetModel;
};

const Weight = ({ control, errors, name }: WeightProps) => {
  return (
    <div className="w-[80%] h-[30%] mb-6 flex flex-col justify-center items-center md:w-[60%]">
      <p className=" w-full text-lg text-left font-medium m-2 ml-4 ">Peso</p>
      <div className="flex flex-col w-full items-center mb-2">
        <Controller
          name={name}
          control={control}
          defaultValue={10}
          render={({ field }) => (
            <input
              {...field}
              type="number"
              className="border rounded-lg py-2 px-3 bg-white w-full text-xl text-black"
              name={name}
              onChange={(e) => field.onChange(Number(e.target.value))}
              value={field.value ? Number(field.value) : undefined}
              min={10}
              max={999}
              id={name}
            />
          )}
        />
      </div>
      {errors && errors.weight ? (
        <p className="text-red-600 h-[15px] mb-3 2xl:h-[30px] 2xl:text-xl mr-auto">
          {errors.weight.message}
        </p>
      ) : (
        <div className=" h-[15px] mb-3  2xl:h-[30px] "></div>
      )}
    </div>
  );
};

export default Weight;
