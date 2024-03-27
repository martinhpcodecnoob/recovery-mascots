"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";

import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineChangeCircle } from "react-icons/md";
import { CiSquareRemove } from "react-icons/ci";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/keyboard";

const Image = ({
  sendDataToParent,
}: {
  sendDataToParent: (files: File[] | undefined) => void;
}) => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImagesArray = Array.from(files);
      setSelectedImages((prevImages) => prevImages.concat(newImagesArray));
      sendDataToParent(newImagesArray);
    }
  };

  const handleRemoveImage = (index: number) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="relative flex justify-center items-center w-96 h-96 border-2">
        {selectedImages.length !== 0 ? (
          <div>
            <div>
              <Swiper
                navigation={true}
                modules={[Pagination, Navigation, Autoplay, Keyboard]}
                loop={false}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                slidesPerView={"auto"}
              >
                {selectedImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Selected Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <CiSquareRemove 
                      className="absolute top-1 right-1 w-8 h-8 text-white"
                      onClick={() => handleRemoveImage(index)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <input
              ref={inputFileRef}
              type="file"
              accept="image/*"
              multiple
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
            <p className="mt-4 text-center text-hero_secondary">
              Agrega una imagen de tu mascota
            </p>
            <input
              ref={inputFileRef}
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        )}
      </div>
      {selectedImages.length !== 0 ? (
        <button
          type="button"
          className="mt-2 w-48 h-10 rounded-full cursor-pointer bg-hero_secondary text-white"
          onClick={() => {
            if (inputFileRef.current) {
              inputFileRef.current.click();
            }
          }}
        >
          Agregar más imagenes
        </button>
      ) : (
        <div className="hidden"></div>
      )}
    </div>
  );
};

export default Image;
