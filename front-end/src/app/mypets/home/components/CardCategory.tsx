import Image, { StaticImageData } from 'next/image'
import React from 'react'

const CardCategory = ({pet}:{pet:StaticImageData}) => {
    return (
        <>
            <div className='bg-white w-[12rem] h-[13rem] flex flex-col items-center justify-center rounded-[1rem] shadow-xl cardCategories'>
                <Image 
                    alt='ola' 
                    src={pet} 
                    className='object-cover w-[10rem] h-[8rem] rounded-[1rem] mt-3 mb-2'
                />
                <div className='flex items-center justify-between w-full px-3 text-[0.7rem]'>
                    <div>
                        <div className='font-bold text-[0.9rem]'>Ceniza</div>
                        <div className='text-gray-500'>Mestiza</div>
                    </div>
                    <div className='bg-violet-200 p-2 rounded-[10px] font-bold text-identipet'>12 Yrs</div>
                </div>
            </div>
        </>
    )
}

export default CardCategory