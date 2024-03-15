import React from 'react'
import { FaCat } from "react-icons/fa";
import { FaDog } from "react-icons/fa6";
import { StateCategories } from '../Home';

interface PropsCategories {
    setCategory:React.Dispatch<React.SetStateAction <StateCategories | undefined>>
    category?:StateCategories
}

const Categories = ({setCategory,category}:PropsCategories) => {
    return (
        <div className='flex space-x-5 text-white'>
            <div className='flex justify-center items-center space-x-3'>
                <button 
                    className={`flex justify-center items-center space-x-2 rounded-md  ${category?.cats ? 'bg-identipet':'bg-white'}`}
                    onClick={() => setCategory({cats:true})}
                >
                    <div className={`p-2 rounded-md  m-1 ${category?.cats ? 'bg-white text-identipet':'bg-slate-300 text-slate-500'}`}><FaCat/></div>
                    <div className={`pr-2 ${category?.cats ? '':'text-black'}`}>Gatos</div>
                </button>
                <button 
                    className={`px-3 ${category?.cats ? 'bg-violet-200 text-identipet':'bg-slate-300 text-slate-500'}  text-[1.5rem] rounded-md`}
                    disabled={category?.cats ? false:true}
                >
                    +
                </button>
            </div>
            <div className='flex justify-center items-center space-x-3'>
                <button 
                    className={`flex justify-center items-center space-x-2 rounded-md  ${category?.dogs ? 'bg-identipet':'bg-white'}`}
                    onClick={() => setCategory({dogs:true})}
                >
                    <div className={`p-2 rounded-md  m-1 ${category?.dogs ? 'bg-white text-identipet':'bg-slate-300 text-slate-500'}`}><FaDog/></div>
                    <div className={`pr-2 ${category?.dogs ? '':'text-black'}`}>Perros</div>
                </button>
                <button 
                    className={`px-3 ${category?.dogs ? 'bg-violet-200 text-identipet':'bg-slate-300 text-slate-500'}  text-[1.5rem] rounded-md`}
                    disabled={category?.dogs ? false:true}
                >
                    +
                </button>
            </div>
            
        </div>
    )
}

export default Categories