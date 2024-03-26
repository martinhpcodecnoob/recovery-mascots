import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import SessionAuthProvider from "./context/SessionAuthProvider";
import TanstackProvider from "./context/TanstackProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <SessionAuthProvider>
          <TanstackProvider>
            {children}
            {modal}
          </TanstackProvider>
        </SessionAuthProvider>
      </body>
    </html>
  );
}
