import React from "react";
import CreatePet from "./components/CreatePet";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

async function getDataSession() {
  const data = await getServerSession(authOptions);

  return data;
}

const page = async () => {
  const sessionData = await getDataSession();
  if (sessionData) return <CreatePet session={sessionData} />;
};

export default page;
