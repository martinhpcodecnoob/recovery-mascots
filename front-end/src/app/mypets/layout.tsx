import { Inter } from "next/font/google";
import NavbarHome from "./home/components/NavbarHome";
import NavBarHomeTwo from "./home/components/NavBarHomeTwo";
import FooterbarHome from "./home/components/FooterbarHome";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
        children,
    }: {
        children: React.ReactNode
    }) {
        
    return (
    <>
            <header className='w-full h-16'>
                <NavbarHome/>
                <NavBarHomeTwo/>
            </header>
            {children}
            <footer className='md:invisible'>
                <FooterbarHome/>
            </footer>
    </>
    )
}