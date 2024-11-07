"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '@/firebaseConfig';


const Bookings = () => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropOffLocation: '',
    packageSize: '',
    packageWeight: '',
    deliveryType: 'standard',
  });
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        router.push('/'); 
      }
    });

    
    return () => unsubscribe();
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/'); 
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen ">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-50 p-8 rounded-lg max-w-md w-full shadow-lg shadow-black border-4 border-black"
      >
        <h2 className="text-2xl font-bold mb-6">Schedule Your Shipment</h2>

        <label className="block mb-2 font-medium">Pickup Location</label>
        <input
          type="text"
          name="pickupLocation"
          value={formData.pickupLocation}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Enter pickup location"
        />

        <label className="block mb-2 font-medium">Drop-Off Location</label>
        <input
          type="text"
          name="dropOffLocation"
          value={formData.dropOffLocation}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Enter drop-off location"
        />

        <label className="block mb-2 font-medium">Package Size</label>
        <input
          type="text"
          name="packageSize"
          value={formData.packageSize}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Enter package size (e.g., 10x10x10 cm)"
        />

        <label className="block mb-2 font-medium">Package Weight</label>
        <input
          type="text"
          name="packageWeight"
          value={formData.packageWeight}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Enter package weight (e.g., 2 kg)"
        />

        <label className="block mb-2 font-medium">Delivery Type</label>
        <select
          name="deliveryType"
          value={formData.deliveryType}
          onChange={handleChange}
          className="w-full p-2 mb-6 border rounded"
        >
          <option value="standard">Standard</option>
          <option value="express">Express</option>
        </select>

        <button
          type="submit"
          className="w-full font-serif text-xl py-3 bg-red-300 text-white rounded hover:bg-red-600 transition-all duration-300 active:scale-x-75"
        >
          Submit
        </button>
        
        {/* {isAuthenticated && (
          <button
            onClick={handleSignOut}
            className="w-full mt-4 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
          >
            Sign Out
          </button>
        )} */}
      </form>
    </main>
  );
};

export default Bookings;
