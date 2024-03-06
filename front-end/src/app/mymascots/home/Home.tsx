import React from 'react'
import NavbarHome from './components/NavbarHome'
import FooterbarHome from './components/FooterbarHome'

const Home = () => {
    return (
        <>
            <header className='w-full mdx:invisible'>
                <NavbarHome/>
            </header>
            olaa
            <footer className='md:invisible'>
                <FooterbarHome/>
            </footer>
        </>
    )
}

export default Home