import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const layout = ({children}) => {
  return (
    <main>
        <Navbar/>
        {children}
        <Footer/>
    </main>
  );
}

export default layout;
