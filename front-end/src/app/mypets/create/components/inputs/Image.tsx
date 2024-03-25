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

const Image = ({ isCreated, petId }: { isCreated: boolean; petId: string }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isCreated) {
      handleImageUpload();
    }
  }, [isCreated]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedImage(file);
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };

  const handleImageUpload = async () => {
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
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="relative flex justify-center items-center w-96 h-96 border-2">
        {imageUrl ? (
          <div>
            <img src={imageUrl} alt="Imagen seleccionada" />
            <MdOutlineChangeCircle
              className="absolute bottom-0 left-0 w-12 h-12 cursor-pointer"
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
              onChange={handleImageChange}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <IoIosAddCircleOutline
              className="w-24 h-24 cursor-pointer"
              onClick={() => {
                if (inputFileRef.current) {
                  inputFileRef.current.click();
                }
              }}
            />
            <p className="mt-4">Agrega una imagen de tu mascota</p>
            <input
              ref={inputFileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Image;
