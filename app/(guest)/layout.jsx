
"use client"
import React, { useEffect, useState } from "react";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';


import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";

function Layout({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
      setUser(currentUser); 
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <>
      <Navbar user={user} />
      {children}
      <Footer/>
    </>
  );
}

export default Layout;
