import React from 'react'
import { FaCat } from "react-icons/fa";
import { FaDog } from "react-icons/fa6";

const Categories = () => {
    return (
        <div className='flex space-x-5 text-white'>
            <div className='flex justify-center items-center space-x-3'>
                <div className='flex justify-center items-center space-x-2 rounded-md bg-identipet'>
                    <div className='p-2 rounded-md bg-hero_ligth_secondary m-1'><FaCat/></div>
                    <div className='pr-2'>Gatos</div>
                </div>
                <div className='px-3 bg-hero_ligth_secondary text-identipet text-[1.5rem] rounded-md'>
                    +
                </div>
            </div>
            <div className='flex justify-center items-center space-x-3'>
                <div className='flex justify-center items-center space-x-2 rounded-md bg-identipet'>
                    <div className='p-2 rounded-md bg-hero_ligth_secondary m-1'><FaDog/></div>
                    <div className='pr-2'>Perros</div>
                </div>
                <div className='px-3 bg-hero_ligth_secondary text-identipet text-[1.5rem] rounded-md'>
                    +
                </div>
            </div>
            
        </div>
    )
}

export default Categories