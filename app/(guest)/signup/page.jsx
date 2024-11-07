"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { FaArrowUpRightFromSquare, FaThumbsUp, FaUser } from "react-icons/fa6";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseApp from '../../../firebaseConfig';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const auth = getAuth(firebaseApp);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");  
      console.log(createUserWithEmailAndPassword);
      
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  if (!isClient) return null; 

  return (
    <motion.section 
    initial={{opacity: 0, scale: 0}}
    animate={{opacity: 1, scale: 1}}
    traansition={{type: "tween", duration: 0.4,}}
    className="min-h-screen flex items-center justify-center  p-5">
      <div className="bg-slate-50 px-6 py-10 md:w-[30rem] max-w-md md:max-w-lg lg:max-w-xl rounded-md shadow-2xl shadow-black border-4 border-black mt-20">
        
        <div className="flex justify-center py-6 items-center gap-2">
          <h1 className="font-extrabold text-3xl md:text-4xl text-red-600">Welcome</h1>
          <FaUser className="text-3xl text-red-600" />
        </div>

        <form className="flex flex-col gap-3" onSubmit={handleSignUp}>

        <span className="flex flex-col">
            <label className="font-extrabold font-serif py-2 text-lg md:text-xl text-red-600">
              UserName:
            </label>
            <input
              type="text"
              placeholder="Create UserName"
              className="p-3 border-2 border-black rounded-lg hover:bg-red-600 font-extrabold bg-black text-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </span>


          {/* Email input */}
          <span className="flex flex-col">
            <label className="font-extrabold font-serif py-2 text-lg md:text-xl text-red-600">
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="p-3 border-2 border-black rounded-lg hover:bg-red-600 font-extrabold bg-black text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>

          {/* Password input */}
          <span className="flex flex-col">
            <label className="font-extrabold font-serif py-2 text-lg md:text-xl text-red-600">
              Password:
            </label>
            <input
              type="password"
              placeholder="Create Password"
              className="p-3 border-2 border-black rounded-lg hover:bg-red-600 font-extrabold bg-black text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>

          <button type="submit" className="mt-5 p-3 w-full bg-red-600 border-2 border-black rounded-lg font-extrabold text-lg flex justify-center items-center gap-2 md:text-xl text-white hover:bg-transparent hover:text-black">
            SignUp
            <FaArrowUpRightFromSquare />
          </button>
        </form>

        <div className="mt-8 flex flex-col items-center">
          <h3 className="text-sm md:text-base">Already have an account?</h3>
          <Link href="/signin" className="flex items-center gap-1 mt-2 p-2 text-red-600 font-bold hover:bg-red-600 hover:text-white rounded-md">
            <h3>Sign In Here</h3>
            <FaThumbsUp />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

export default SignUp;
