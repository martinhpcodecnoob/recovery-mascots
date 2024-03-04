import Image from "next/image";
import LandingPage from "./components/LandingPage";
import ButtonAuth from "@/components/ButtonAuth";

export default function Home() {
  // return <LandingPage />
  return (
    <div>
      <h1>Home Page</h1>
      <ButtonAuth />
    </div>
  )
}
