import Link from "next/link";
import React from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { FaThumbsUp } from "react-icons/fa6";
import { GrLogin } from "react-icons/gr";

const SignIn = () => {
  return (
    <section className="min-h-dvh flex items-center justify-center">
      <div className=" bg-slate-50 px-5 md:w-[30rem] max-sm:w-full md:h-[40rem] max-sm:m-5 rounded-md shadow-xl shadow-black border-4 border-black">
        <span className="flex justify-center py-6  px-3 font-serif items-center gap-2 mt-8">
          <h1 className="font-extrabold text-4xl text-red-600">Login</h1>
          <GrLogin className="text-3xl text-red-600" />
        </span>

        <span className="flex flex-col">
          <label className="font-extrabold font-serif py-3 text-xl text-red-600">
            Email:
          </label>
          <input
            type="name"
            placeholder="Enter Email"
            className="p-4 border-4 border-black rounded-lg hover:bg-red-600 font-extrabold bg-black text-white"
          />
        </span>
        <span className="flex flex-col">
          <label className="font-extrabold font-serif py-3 text-xl text-red-600">
            Password:
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="p-4 border-4 border-black rounded-lg hover:bg-red-600 font-extrabold bg-black text-white"
          />
        </span>

        <button className="font-serif p-4 border-4 flex justify-center w-full mt-5 bg-red-600 rounded-lg font-extrabold text-white text-xl items-center gap-2 hover:bg-transparent hover:text-black border-black">
          SignIn
          {/* <BiLoaderCircle className='animate-spin'/> */}
        </button>

        <div className="mt-15 flex flex-col gap-2 capitalize items-center">
          <h3>Don't have an account yet?</h3>
          <Link href={"#"} className="flex rounded-md p-3 hover:bg-red-600 hover:text-white font-bold items-center gap-1 group">
          <h3>signup here</h3>
          <FaThumbsUp className="text-red-600 group-hover:text-white"/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
