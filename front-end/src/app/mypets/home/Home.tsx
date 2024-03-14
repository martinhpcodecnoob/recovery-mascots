'use client'
import React, { useState } from 'react'
import NavbarHome from './components/NavbarHome'
import FooterbarHome from './components/FooterbarHome'
import NavBarHomeTwo from './components/NavBarHomeTwo'
import Categories from './components/Categories'
import CardCategory from './components/CardCategory'
import CardsCats from './components/CardsCats'
import CardsDogs from './components/CardsDogs'

export interface StateCategories {
    cats?:boolean
    dogs?:boolean
}
const Home = () => {
    const [category, setCategory] = useState<StateCategories | undefined>({cats:true})
    return (
        <>
            <main className='mx-3 mb-[5rem]'>
                <div>
                    <h1 className='text-[1.4rem]'>
                        Mis Mascotas
                    </h1>
                    <div className='space-y-2 w-full flex flex-col items-center'>
                        <h1 className='font-bold'>Categorias</h1>
                        <Categories
                            setCategory={setCategory}
                            category={category}
                        />
                    </div>
                    <div className='space-y-2 w-full flex flex-col'>
                        {
                            category?.cats ? (
                                <>
                                    <h1 className='font-bold'>Mis Gatijos</h1>
                                    <CardsCats/>                          
                                </>
                            ) : null
                        }
                        {
                            category?.dogs ? (
                                <>
                                    <h1 className='font-bold'>Mis Perrijos</h1>
                                    <CardsDogs/>   
                                </>
                            ) : null
                        }
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home