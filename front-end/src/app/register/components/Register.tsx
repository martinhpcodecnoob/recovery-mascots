"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";

import { registerSchema } from "@/app/schemas/auth.schema";
import { RegisterModel } from "@/app/models/auth.model";

import { register } from "@/utils/api";

import "react-toastify/dist/ReactToastify.css";

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
  const [error, setError] = useState(false);

  type RegisterSchema = z.infer<typeof registerSchema>;
  const {
    handleSubmit: handleRegisterSubmit,
    control: registerControl,
    formState: { errors: registerErrors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmitRegister = async ({
    acceptTerms,
    confirmPassword,
    ...restData
  }: RegisterModel) => {
    setLoading(true);
    try {
      const registerResponse = await register(restData);
      if (registerResponse.status === 200) {
        toast.success("Cuenta registrada exitosamente");
        await signIn('credentials', {email: restData.email, password:restData.password})
      }
      if (registerResponse.status === 409) {
        toast.error(registerResponse.data.error);
      } else {
        toast.error(registerResponse.data.error);
        setError(true);
      }
    } catch (error) {
      toast.error(error ? error.toString() : "Error del servidor");
      setError(true);
      console.error("Error al intentar registrar una cuenta", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] p-4 bg-hero_ligth_secondary">
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
          type="submit"
          className={`rounded-full py-2 px-5 ${
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
            "Crear Cuenta"
          )}
        </button>
      </form>
    </div>
  );
};

export default Register;
