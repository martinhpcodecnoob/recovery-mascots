/* "use client";

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
 */
"use client";

import React, { useState, useEffect, useRef } from "react";
import { createImage } from "@/utils/api";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineChangeCircle } from "react-icons/md";

const Image = ({
  sendDataToParent,
}: {
  sendDataToParent: (file: File | undefined) => void;
}) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);
  /* useEffect(() => {
    const handleImageUpload = async () => {
      try {
        if (isCreated && selectedImage) {
          const formData = new FormData();
          formData.append("file", selectedImage);
          formData.append("petId", petId);
          const response = await createImage(formData);
          if (response.status === 200) {
            const data = await response.data();
            const secureUrl = data.secure_url;
            setImageUrl(secureUrl);
          } else {
            console.error("Error al subir la imagen");
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    handleImageUpload();
  }, [isCreated, petId]); */

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Obtener el primer archivo seleccionado
    if (file) {
      sendDataToParent(file);
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };

  /* const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedImage(file);
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  }; */

  /*   const handleImageUpload = async () => {
    try {
      if (selectedImage) {
        const formData = new FormData();
        formData.append("file", selectedImage);
        formData.append("petId", petId);
        const response = await createImage(formData);
        if (response.status === 200) {
          const data = await response.data();
          const secureUrl = data.secure_url;
          setImageUrl(secureUrl);
        } else {
          console.error("Error al subir la imagen");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }; */

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="relative flex justify-center items-center w-96 h-96 border-2">
        {imageUrl ? (
          <div>
            <img src={imageUrl} alt="Imagen seleccionada" />
            <MdOutlineChangeCircle
              className="absolute bottom-5/6 left-1/2 w-12 h-12 cursor-pointer text-hero_secondary"
              onClick={() => {
                if (inputFileRef.current) {
                  inputFileRef.current.click();
                }
              }}
            />
            <input
              ref={inputFileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <button
              className="hidden"
              type="button"
              onClick={() => inputFileRef.current?.click()}
            >
              Subir imagen
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <IoIosAddCircleOutline
              className="w-24 h-24 cursor-pointer text-hero_secondary"
              onClick={() => {
                if (inputFileRef.current) {
                  inputFileRef.current.click();
                }
              }}
            />
            <p className="mt-4 text-center text-hero_secondary">Agrega una imagen de tu mascota</p>
            <input
              ref={inputFileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Image;
