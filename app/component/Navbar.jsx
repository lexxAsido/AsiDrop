"use client";
import React, { useEffect, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { FiLoader } from "react-icons/fi";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db, auth } from "@/firebaseConfig";
import { TbLoader3 } from "react-icons/tb";
import { GrLogin } from "react-icons/gr";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  const [status, setStatus] = useState("loading");
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [signingOut, setSigningOut] = useState(false);
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log("User data:", userData);
  
            if (userData.username) {
              setUser({ ...currentUser, username: userData.username });
            } else {
              console.warn("Username not found in Firestore document.");
              setUser(currentUser); // fallback if no username is found
            }
          } else {
            console.warn("User document not found in Firestore.");
            setUser(currentUser);
          }
          setStatus("authenticated");
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUser(null);
        setStatus("unauthenticated");
      }
    });
    return () => unsubscribe(); 
  }, []);
  

  // const handleSignOut = () => {
  //   setSigningOut(false); // Show loader
  //   signOut(auth).then(() => {
  //     setUser(null);
  //     setStatus("unauthenticated");
  //     router.push('/');
  //   }).finally(() => {
  //     setSigningOut(true); // Hide loader after sign-out completes
  //   });
  // };

  const handleSignOut = () => {
    setSigningOut(true); // Show loader
    setTimeout(() => {
      signOut(auth)
        .then(() => {
          setUser(null);
          setStatus("unauthenticated");
          router.push('/');
        })
        .finally(() => {
          setSigningOut(false); // Hide loader after sign-out completes
        });
    }, 4000); // 4-second delay
  };
  

  return (
    <motion.main initial={{ y: -50, opacity: 0 }} animate={{ y: 5, opacity: 1 }}>
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
            <FiLoader className="animate-spin text-4xl m-2 text-red-600" />
          ) : status === "unauthenticated" ? (
            <>
              <button className="border-4 border-black md:p-2 p-2 gap-1 flex items-center rounded-md bg-red-600 hover:scale-110 active:scale-105 shadow-black hover:bg-transparent hover:text-red-600 transition-all shadow-md">
                <Link href="/signin"> Login</Link>
                <GrLogin className="text-black "/>
              </button>
              <button className="border-4 border-black bg-black md:p-2 p-1 rounded-md hover:scale-110 active:scale-105 shadow-md hover:bg-transparent hover:text-red-600 transition-all shadow-red-600">
                <Link href="/signup">Sign Up</Link>
              </button>
            </>
          ) : (
            <>
              {/* <span className="text-black">Welcome! {user.username || user.email}</span>
              <button
                onClick={handleSignOut}
                disabled={signingOut}
                className="bg-red-600 p-3 hover:bg-black rounded-md active:scale-x-75 transition-all group flex gap-2">
                Sign Out
                {signingOut && <TbLoader3 className='animate-spin text-2xl text-black group-hover:text-red-600'/>} 
              </button> */}

                <DropdownMenu>
                  <DropdownMenuTrigger className="mx-5 outline-none text-black flex items-center"> 
                    Welcome!!
                  <Avatar className=" bg-red-600 border-4 p-1">
                    
                    <AvatarImage src="/user.png" />
                    <AvatarFallback></AvatarFallback>
                  </Avatar>
                    


                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-black text-white p-5">
                    <DropdownMenuLabel className="text-lg">{user.username || user.email}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="hover:bg-red-600 font-bold">
                      <Link href="#">Profile</Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem className="hover:bg-red-600 font-bold">
                      <Link href="/contact">Contact Us</Link>
                      </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-red-600 font-bold">
                      <Link href="/about">About Us</Link>
                      </DropdownMenuItem>
                    <DropdownMenuItem>
                                  <button
                              onClick={handleSignOut}
                              disabled={signingOut}
                              className="bg-red-600 p-3 hover:bg-white text-black font-bold hover:text-red-600 rounded-md active:scale-x-75 transition-all group flex gap-2">
                              Sign Out
                              {signingOut && <TbLoader3 className='animate-spin text-2xl text-black group-hover:text-red-600'/>} 
                            </button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

            </>
          )}
        </div>
      </div>
    </motion.main>
  );
};

export default Navbar;
