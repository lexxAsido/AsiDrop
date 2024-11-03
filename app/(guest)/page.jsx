import Image from 'next/image'

import React from 'react'

const page = () => {
  return (
    <main className='h-screen bg-[url(/bg1.avif)] bg-cover bg-center flex justify-center items-center'>
        <div className='text-center h-[15rem] p-4 bg-red-600 text-white rounded-md flex flex-col gap-5 pt-6'>
                <h1 className='font-extrabold text-3xl'>Welcome TO AsiDrop!</h1>
            <h2 className=''>Seamless Delivery, Right at Your Doorstep – Fast, Reliable, and Always on Time! </h2>
            
            <span className=''>

            <button className='m-3 bg-white text-black p-4 border-4 font-serif rounded-lg border-black'>Schedule A Delivery</button>
            <button className='m-3 bg-black  p-4 border-4 font-sans rounded-lg border-black'>Get A Quote</button>

            </span>
           
        </div>
    </main>
  )
}

export default page