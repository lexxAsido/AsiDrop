import { Pacifico } from 'next/font/google';
import React from 'react';

const pacifico = Pacifico({
    subsets: ['latin'],
    weight: '400', 
})


const Navbar = () => {
  return (
    <section>
        <div className='flex justify-between mt-2 mx-3 p-2 shadow-lg'>
        <h1 className=' font-bold text-500 text-4xl'>AsiDrop</h1>

        <div className='flex gap-8 font-bold text-white'>
            <h3 className='border-4 border-black p-2 rounded-md bg-red-600 '>Sign In</h3>
            <h3 className='border-4 border-black  bg-black p-2 rounded-md'>Sign Up</h3>
        </div>
        </div>
      
    </section>
  );
}

export default Navbar;
