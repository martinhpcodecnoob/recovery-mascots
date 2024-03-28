"use client";

import React from "react";
import { Session } from "next-auth";

import { useUserData } from "@/hooks/useUserData";

const Account = ({ session }: { session: Session }) => {
  const { data: response } = useUserData(
    session?.user?.id,
    session?.user?.accessToken
  );
  console.log("Valor de la data:", response?.data);
  return <div>Account</div>;
};

export default Account;
