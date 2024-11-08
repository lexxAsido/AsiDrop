"use client";
import firebaseApp from "@/firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GrLogin } from "react-icons/gr";
import { motion } from "framer-motion";
import * as yup from "yup";

// Define validation schema
const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password can't be longer than 20 characters")
    .required("Password is required"),
});

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState("");
  const router = useRouter();
  const auth = getAuth(firebaseApp);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({});
    setAuthError("");

    // Validate form inputs
    try {
      await validationSchema.validate({ email, password }, { abortEarly: false });

      // Sign in with Firebase if validation passes
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      if (err.name === "ValidationError") {
        // If Yup validation error, map errors to state
        const newErrors = {};
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      } else {
        // Firebase error
        setAuthError("Invalid email or password. Please try again.");
      }
    }
  };

  if (!isClient) return null; 

  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "tween", duration: 0.4 }}
      className="min-h-dvh flex items-center justify-center"
    >
      <div className="bg-slate-50 px-5 md:w-[30rem] max-sm:w-full md:h-[40rem] max-sm:m-5 rounded-md shadow-xl shadow-black border-4 border-black">
        <span className="flex justify-center py-6 px-3 font-serif items-center gap-2 mt-8">
          <h1 className="font-extrabold text-4xl text-red-600">Login</h1>
          <GrLogin className="text-3xl text-red-600" />
        </span>

        <form onSubmit={handleSignIn}>
          <span className="flex flex-col">
            <label className="font-extrabold font-serif py-3 text-xl text-red-600">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="p-4 border-4 border-black rounded-lg hover:bg-red-600 font-extrabold bg-black text-white"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </span>

          <span className="flex flex-col">
            <label className="font-extrabold font-serif py-3 text-xl text-red-600">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="p-4 border-4 border-black rounded-lg hover:bg-red-600 font-extrabold bg-black text-white"
            />
            {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
          </span>

          <button
            type="submit"
            className="font-serif p-4 border-4 flex justify-center w-full mt-5 bg-red-600 rounded-lg font-extrabold text-white text-xl items-center gap-2 hover:bg-transparent hover:text-black border-black"
          >
            SignIn
          </button>

          {authError && <p className="text-red-600 mt-2 text-sm">{authError}</p>}
        </form>

        <div className="mt-15 flex flex-col gap-2 capitalize items-center">
          <h3>Don't have an account yet?</h3>
          <Link href={"/signup"} className="flex rounded-md p-3 hover:bg-red-600 hover:text-white font-bold items-center gap-1 group">
            <h3>signup here</h3>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default SignIn;
