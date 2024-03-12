"use client";

import React from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { RegisterModel } from "@/app/models/auth.model";

type LastNameProps = {
  control: Control<RegisterModel>;
  errors: FieldErrors<RegisterModel>;
  name: keyof RegisterModel;
};

const LastName = ({ control, errors, name }: LastNameProps) => {
  return (
    <div className="w-[80%] h-[30%] mb-6 flex flex-col justify-center items-center md:w-[60%]">
      <div className="flex flex-col w-full items-center mb-2">
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              className="border rounded-lg py-2 px-3 bg-white w-full text-xl text-black "
              name={name}
              value={typeof field.value === "string" ? field.value : ""}
              placeholder="Apellidos"
              id={name}
            />
          )}
        />
      </div>
      {errors && errors.lastName ? (
        <p className="text-red-600 h-[15px] mb-3 2xl:h-[30px] 2xl:text-xl mr-auto">
          {errors.lastName.message}
        </p>
      ) : (
        <div className=" h-[15px] mb-3  2xl:h-[30px] "></div>
      )}
    </div>
  );
};

export default LastName;
