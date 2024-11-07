"use client";
import React, { useEffect, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { FiLoader } from "react-icons/fi";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { auth } from "../../firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/navigation';

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  const [status, setStatus] = useState("loading");
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setStatus("authenticated");
      } else {
        setUser(null);
        setStatus("unauthenticated");
      }
    });
    return () => unsubscribe(); 
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setStatus("unauthenticated");
      router.push('/'); 
    });
  };

  return (
    <motion.main
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 5, opacity: 1 }}
    >
      <div className="flex justify-between mt-2 mx-3 p-2 shadow-lg backdrop-blur-[1.00rem] fixed left-0 right-0 z-50">
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
          <h1 className={`font-bold text-4xl ml-2 max-md:text-lg max-md:hidden`}>AsiDrop</h1>
        </span>

        <div className="flex gap-8 font-bold text-white items-center max-md:gap-2">
          {status === "loading" ? (
            < FiLoader  className="animate-spin text-4xl m-2 text-red-600" />
          ) : status === "unauthenticated" ? (
            <>
              <button
                className="border-4 border-black p-2 rounded-md bg-red-600 hover:scale-110 active:scale-105 shadow-black hover:bg-transparent hover:text-red-600 transition-all shadow-md"
                aria-label="Sign In"
              >
                <Link href="/signin">Sign In</Link>
              </button>
              <button
                className="border-4 border-black bg-black p-2 rounded-md hover:scale-110 active:scale-105 shadow-md hover:bg-transparent hover:text-red-600 transition-all shadow-red-600"
                aria-label="Sign Up"
              >
                <Link href="/signup">Sign Up</Link>
              </button>
            </>
          ) : (
            <>
              <span className="text-black">Welcome! {user.email}</span>
              <button
                onClick={handleSignOut}
                className="bg-red-600 p-3 hover:bg-black rounded-md active:scale-x-75 transition-all"
              >
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>
    </motion.main>
  );
};

export default Navbar;
