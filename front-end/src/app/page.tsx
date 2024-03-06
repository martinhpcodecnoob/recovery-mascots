import Image from "next/image";
import LandingPage from "./components/LandingPage";
import ButtonAuth from "@/components/ButtonAuth";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <LandingPage/>
      </main>
    </>
  )
  // return (
  //   <div>
  //     <h1>Home Page</h1>
  //     <ButtonAuth />
  //   </div>
  // )
}
