import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  return (
    <main>
      <div
        className="flex justify-between mt-2 mx-3 p-2 shadow-lg  backdrop-blur-[1.00rem] fixed left-0 right-0 z-50"
      >
        <span className="flex items-center group">
          <Link href="/">
            <Image
              src="/asidrop2.png"
              alt="Asidrop Delivery"
              width="60"
              height="60"
              className="rounded-full group-hover:scale-110 active:scale-105 transition shadow-lg max-md:w-auto max-md:h-auto w-14 h-14"
            />
          </Link>
          <h1 className={`font-bold text-4xl ml-2 max-md:text-lg max-md:hidden`}>
            AsiDrop
          </h1>
        </span>

        <div className="flex gap-8 font-bold text-white items-center max-md:gap-2">
          <button
            className="border-4 border-black p-2 rounded-md bg-red-600 hover:scale-110 active:scale-105 shadow-md hover:bg-transparent hover:text-red-600 transition-all"
            aria-label="Sign In"
          >
            <Link href="/signin">Sign In</Link>
          </button>
          <button
            className="border-4 border-black bg-black p-2 rounded-md hover:scale-110 active:scale-105 shadow-md hover:bg-transparent hover:text-red-600 transition-all"
            aria-label="Sign Up"
          >
            <Link href="/signup">Sign Up</Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
