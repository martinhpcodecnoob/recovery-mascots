import { InterfacePetsUser } from '@/interfaces/pets.interface'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import catdog from '../../../../../public/images/catdog.jpg'

const CardCategory = ({pet}:{pet:InterfacePetsUser}) => {
    if ( pet ) {
        return (
            <>
                <div className='bg-white w-[12rem] h-[13rem] flex flex-col items-center justify-center rounded-[1rem] shadow-xl cardCategories'>
                    <Image 
                        alt='ola' 
                        width={500}
                        height={500}
                        src={pet.images ? pet.images[0] : catdog} 
                        className='object-cover w-[10rem] h-[8rem] rounded-[1rem] mt-3 mb-2'
                    />
                    <div className='flex items-center justify-between w-full px-3 text-[0.7rem]'>
                        <div>
                            <div className='font-bold text-[0.9rem]'>{pet.name}</div>
                            <div className='text-gray-500'>{pet.breed}</div>
                        </div>
                        <div className='bg-violet-200 p-2 rounded-[10px] font-bold text-identipet'>{pet.age} Yrs</div>
                    </div>
                </div>
            </>
        )
    }
}

export default CardCategory