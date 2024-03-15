// import { usePetsUser } from "@/hooks/usePetsUser";
'use client'
import Link from "next/link";
import LandingPage from "./components/LandingPage";
import useCreatePet from "@/hooks/useCreatePet";
import { usePetsUser } from "@/hooks/usePetsUser";

export default function Home() {
  // const petsUser = usePetsUser()
  const petsUser = usePetsUser('65e542cc0487e468c9e99bc4')
  console.log(petsUser);
  
  return (
    <>
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
