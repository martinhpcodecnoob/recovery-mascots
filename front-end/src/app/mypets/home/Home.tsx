import React from 'react'
import NavbarHome from './components/NavbarHome'
import FooterbarHome from './components/FooterbarHome'
import NavBarHomeTwo from './components/NavBarHomeTwo'
import Categories from './components/Categories'

const Home = () => {
    return (
        <>
            <header className='w-full h-16'>
                <NavbarHome/>
                <NavBarHomeTwo/>
            </header>
            <main className='top-44 h-16 mx-3'>
                <h1 className='text-[1.4rem]'>
                    Mis Mascotas
                </h1>
                <Categories/>
            </main>
            <footer className='md:invisible'>
                <FooterbarHome/>
            </footer>
        </>
    )
}

export default Home