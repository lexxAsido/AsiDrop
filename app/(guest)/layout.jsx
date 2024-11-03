import React from 'react';
import Navbar from '../component/Navbar';

const layout = ({children}) => {
  return (
    <main>
        <Navbar/>
        {children}
    </main>
  );
}

export default layout;
