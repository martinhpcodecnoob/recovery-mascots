"use client";

import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "@/app/schemas/auth.schema";
import { RegisterModel } from "@/app/models/auth.model";

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
  type RegisterSchema = z.infer<typeof registerSchema>;
  const {
    handleSubmit: handleRegisterSubmit,
    control: registerControl,
    setValue: setRegisterValue,
    formState: { errors: registerErrors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmitRegister = async (data: RegisterModel) => {
    try {
    } catch (error) {
      console.error("Error al intentar registrar una cuenta", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] p-4 bg-hero_ligth_secondary">
      <div className="flex flex-col justify-center  items-center w-full">
      <h1 className="bg-hero_secondary text-xl text-center text-white font-semibold w-full h-8">Registro de Usuario</h1>
      <div className="flex lg:flex-row flex-col justify-center items-center w-full h-full mt-4">
        <Name control={registerControl} errors={registerErrors} name="name" />
        <LastName
          control={registerControl}
          errors={registerErrors}
          name="lastName"
        />
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center w-full h-full">
        <Email control={registerControl} errors={registerErrors} name="email" />
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
      <button className="bg-hero_secondary px-5 py-2 rounded-lg text-center text-white font-medium">
        Crear Cuenta
      </button>
      </div>
    </div>
  );
};

export default Register;
