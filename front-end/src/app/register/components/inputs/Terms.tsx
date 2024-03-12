"use client";

import React from "react";
import Link from "next/link";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { RegisterModel } from "@/app/models/auth.model";

type TermsProps = {
  control: Control<RegisterModel>;
  errors: FieldErrors<RegisterModel>;
  name: keyof RegisterModel;
};

const Terms = ({ control, errors, name }: TermsProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:w-full">
      <div className="flex items-center justify-center w-full md:w-full">
        <label
          className="relative flex items-center py-3 rounded-full cursor-pointer"
          htmlFor="checkbox"
        >
          <Controller
            name={name}
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <input
                {...field}
                type="checkbox"
                className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border-[#D1D1D1] border-2 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#1A1A1A] checked:bg-[#1A1A1A] checked:before:bg-[#1A1A1A] hover:before:opacity-10 bg-white"
                name={name as string}
                id={name as string}
                value={field.value ? "true" : "false"}
              />
            )}
          />

          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
        <div className="ml-3">
          <span className="text-[#1A1A1A] text-xl lg:text-2xl font-medium flex md:flex-wrap">
            {" "}
            Acepto los{" "}
            <Link
              href={"/terms-and-conditions"}
              target="_blank"
              className="text-hero_accent underline"
            >
              Términos y Condiciones
            </Link>{" "}
            de Identipet
          </span>
        </div>
      </div>
      {errors && errors.acceptTerms ? (
        <p className="text-red-500 h-[15px]">{errors.acceptTerms.message}</p>
      ) : (
        <div className="h-[15px]"></div>
      )}
    </div>
  );
};

export default Terms;
