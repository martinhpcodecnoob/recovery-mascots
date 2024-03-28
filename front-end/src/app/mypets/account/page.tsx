import React from "react";
import { getServerSession } from "next-auth";

import Account from "./components/Account";

import { authOptions } from "@/utils/authOptions";

async function getDataSession() {
  const data = await getServerSession(authOptions);
  return data;
}

const page = async () => {
  const sessionData = await getDataSession();
  if (sessionData) return <Account session={sessionData} />;
};

export default page;
