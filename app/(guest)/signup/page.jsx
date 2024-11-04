import React from 'react';
import Link from "next/link";
import { BiLoaderCircle } from "react-icons/bi";
import { FaArrowUpRightFromSquare, FaThumbsUp, FaUser } from "react-icons/fa6";

const SignUp = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-slate-50 px-6 py-10 w-full max-w-md md:max-w-lg lg:max-w-xl rounded-md shadow-2xl shadow-black border-4 border-black mt-10 md:mt-20">
        
        <div className="flex justify-center py-6 items-center gap-2">
          <h1 className="font-extrabold text-3xl md:text-4xl text-red-600">Welcome</h1>
          <FaUser className="text-3xl text-red-600" />
        </div>

        <form className="flex flex-col gap-3">
          <span className="flex flex-col">
            <label className="font-extrabold font-serif py-2 text-lg md:text-xl text-red-600">
              FirstName:
            </label>
            <input
              type="text"
              placeholder="Enter FirstName"
              className="p-3 border-2 border-black rounded-lg hover:bg-red-600 font-extrabold bg-black text-white"
            />
          </span>

          <span className="flex flex-col">
            <label className="font-extrabold font-serif py-2 text-lg md:text-xl text-red-600">
              LastName:
            </label>
            <input
              type="text"
              placeholder="Enter LastName"
              className="p-3 border-2 border-black rounded-lg hover:bg-red-600 font-extrabold bg-black text-white"
            />
          </span>

          <span className="flex flex-col">
            <label className="font-extrabold font-serif py-2 text-lg md:text-xl text-red-600">
              UserName:
            </label>
            <input
              type="text"
              placeholder="Create UserName"
              className="p-3 border-2 border-black rounded-lg hover:bg-red-600 font-extrabold bg-black text-white"
            />
          </span>

          <span className="flex flex-col">
            <label className="font-extrabold font-serif py-2 text-lg md:text-xl text-red-600">
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="p-3 border-2 border-black rounded-lg hover:bg-red-600 font-extrabold bg-black text-white"
            />
          </span>

          <span className="flex flex-col">
            <label className="font-extrabold font-serif py-2 text-lg md:text-xl text-red-600">
              Password:
            </label>
            <input
              type="password"
              placeholder="Create Password"
              className="p-3 border-2 border-black rounded-lg hover:bg-red-600 font-extrabold bg-black text-white"
            />
          </span>

          <button className="mt-5 p-3 w-full bg-red-600 border-2 border-black rounded-lg font-extrabold text-lg flex justify-center items-center gap-2 md:text-xl text-white hover:bg-transparent hover:text-black">
            SignUp
            <FaArrowUpRightFromSquare/>
          </button>
        </form>

        <div className="mt-8 flex flex-col items-center">
          <h3 className="text-sm md:text-base">Already have an account?</h3>
          <Link href="#" className="flex items-center gap-1 mt-2 p-2 text-red-600 font-bold hover:bg-red-600 hover:text-white rounded-md">
            <h3>Sign In Here</h3>
            <FaThumbsUp />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SignUp
