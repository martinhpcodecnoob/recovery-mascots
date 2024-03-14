// import { usePetsUser } from "@/hooks/usePetsUser";
import Link from "next/link";
import LandingPage from "./components/LandingPage";

export default function Home() {
  // const petsUser = usePetsUser()
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
