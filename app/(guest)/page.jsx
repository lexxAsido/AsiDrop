"use client";
import { useEffect, useState } from "react";
import { Pacifico } from "next/font/google";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseConfig";


const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const HomePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); 
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <main className="h-screen bg-[url(/bg1.avif)] bg-cover bg-center flex justify-center items-center">
      <div className="text-center h-[15rem] p-4 bg-red-600 text-white rounded-md flex flex-col gap-5 pt-6 max-md:w-auto max-md:h-auto group hover:scale-110 active:scale-105 transition-all shadow-2xl shadow-red-600 hover:bg-black">
        <h1 className={`font-extrabold text-5xl group-hover:text-red-600 ${pacifico.className}`}>
          Welcome to AsiDrop!
        </h1>
        <h2 className="font-semibold">
          Seamless Delivery, Right at Your Doorstep – Fast, Reliable, and Always on Time!
        </h2>

        <span>
          <button className="m-3 bg-white text-black p-4 border-4 font-serif rounded-lg border-black group-hover:border-red-600 group-hover:font-semibold">
            <Link href={isAuthenticated ? "/bookings" : "/signin"}>
              Schedule A Delivery
            </Link>
          </button>

          <button className="m-3 bg-black p-4 border-4 font-sans rounded-lg border-black group-hover:bg-red-600 group-hover:font-semibold">
            <Link href="/about">Learn More</Link>
          </button>
        </span>
      </div>
    </main>
  );
};

export default HomePage;
