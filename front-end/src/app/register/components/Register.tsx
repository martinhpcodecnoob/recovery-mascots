"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "@/app/schemas/auth.schema";
import { RegisterModel } from "@/app/models/auth.model";

import { register } from "@/utils/api";

import {
  Name,
  LastName,
  Email,
  CellPhone,
  Password,
  ConfirmPassword,
  Terms,
} from "./inputs";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  type RegisterSchema = z.infer<typeof registerSchema>;
  const {
    handleSubmit: handleRegisterSubmit,
    control: registerControl,
    formState: { errors: registerErrors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmitRegister = async ({ acceptTerms, confirmPassword, ...restData }: RegisterModel) => {
    setLoading(true);
    try {
      const registerResponse = await register(restData);
      if (registerResponse.status === 200) setSuccess(true);
      else setError(true);
    } catch (error) {
      setError(true);
      console.error("Error al intentar registrar una cuenta", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] p-4 bg-hero_ligth_secondary">
      <form
        className="flex flex-col justify-center items-center w-full"
        onSubmit={handleRegisterSubmit(onSubmitRegister)}
      >
        <h1 className="bg-hero_secondary text-xl text-center text-white font-semibold w-full h-8">
          Registro de Usuario
        </h1>
        <div className="flex lg:flex-row flex-col justify-center items-center w-full h-full mt-4">
          <Name control={registerControl} errors={registerErrors} name="name" />
          <LastName
            control={registerControl}
            errors={registerErrors}
            name="lastName"
          />
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center w-full h-full">
          <Email
            control={registerControl}
            errors={registerErrors}
            name="email"
          />
          <CellPhone
            control={registerControl}
            errors={registerErrors}
            name="cellPhone"
          />
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center w-full h-full">
          <Password
            control={registerControl}
            errors={registerErrors}
            name="password"
          />
          <ConfirmPassword
            control={registerControl}
            errors={registerErrors}
            name="confirmPassword"
          />
        </div>
        <Terms
          control={registerControl}
          errors={registerErrors}
          name="acceptTerms"
        />
        <button
          className="bg-hero_secondary px-5 py-2 rounded-lg text-center text-white font-medium relative"
          disabled={loading}
        >
          {loading && (
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <div className="w-6 h-6 border-2 border-white rounded-full border-t-white animate-spin"></div>
            </div>
          )}
          {!loading && success && (
            <span className="absolute px-5 py-2 rounded-lg top-0 left-0 w-full h-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
          )}
          {!loading && error && (
            <span className="absolute px-5 py-2 rounded-lg top-0 left-0 w-full h-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          )}
          {!loading && !success && !error && "Crear Cuenta"}
        </button>
      </form>
    </div>
  );
};

export default Register;
