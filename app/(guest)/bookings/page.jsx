"use client";
import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { getFirestore, collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from '@/firebaseConfig';
import { FaArrowRight } from 'react-icons/fa6';


// Firebase initialization
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const validationSchema = Yup.object({
  pickupLocation: Yup.string().required('Pickup location is required'),
  dropOffLocation: Yup.string().required('Drop-off location is required'),
  packageSize: Yup.string().required('Package size is required'),
  packageWeight: Yup.string().required('Package weight is required'),
  deliveryType: Yup.string().required('Delivery type is required'),
});

const Bookings = () => {
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [bookings, setBookings] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); // State to hold the current user

  const handleSubmit = async (values) => {
    try {
      if (currentUser) {
        const bookingData = { ...values, uid: currentUser.uid }; // Include UID in the booking data
        await addDoc(collection(db, "bookings"), bookingData);

        setConfirmationMessage("Your package has been booked for shipping!");
        fetchBookings(); // Fetch updated bookings after new booking
      } else {
        console.error("User not authenticated");
      }
    } catch (error) {
      console.error("Error booking shipment:", error);
    }
  };

  const fetchBookings = async () => {
    if (currentUser) {
      try {
        const bookingsRef = collection(db, "bookings");
        const q = query(bookingsRef, where("uid", "==", currentUser.uid));
        const querySnapshot = await getDocs(q);
        const userBookings = querySnapshot.docs.map((doc) => doc.data());
        setBookings(userBookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    }
  };

  useEffect(() => {
    // Set up the auth state listener to track user authentication status
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (currentUser) {
      fetchBookings();
    }
  }, [currentUser]);

  return (
    <main className="flex items-center justify-center min-h-screen flex-col">
      <Formik
        initialValues={{
          pickupLocation: '',
          dropOffLocation: '',
          packageSize: '',
          packageWeight: '',
          deliveryType: 'standard',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="bg-slate-50 p-8 rounded-lg max-w-md w-full shadow-lg shadow-black border-4 border-black">
            <h2 className="text-2xl font-bold mb-6">Schedule Your Shipment</h2>
            {confirmationMessage && <p className="text-green-600 font-bold mb-4">{confirmationMessage}</p>}
            {/* Form fields here */}
            <div className="mb-4">
              <label className="block font-medium">Pickup Location</label>
              <Field
                type="text"
                name="pickupLocation"
                className="w-full p-2 mb-4 border rounded"
                placeholder="Enter pickup location"
              />
              <ErrorMessage name="pickupLocation" component="div" className="text-red-600" />
            </div>

            <div className="mb-4">
              <label className="block font-medium">Drop-Off Location</label>
              <Field
                type="text"
                name="dropOffLocation"
                className="w-full p-2 mb-4 border rounded"
                placeholder="Enter drop-off location"
              />
              <ErrorMessage name="dropOffLocation" component="div" className="text-red-600" />
            </div>

            <div className="mb-4">
              <label className="block font-medium">Package Size</label>
              <Field
                type="text"
                name="packageSize"
                className="w-full p-2 mb-4 border rounded"
                placeholder="Enter package size"
              />
              <ErrorMessage name="packageSize" component="div" className="text-red-600" />
            </div>

            <div className="mb-4">
              <label className="block font-medium">Package Weight</label>
              <Field
                type="text"
                name="packageWeight"
                className="w-full p-2 mb-4 border rounded"
                placeholder="Enter package weight"
              />
              <ErrorMessage name="packageWeight" component="div" className="text-red-600" />
            </div>

            <div className="mb-6">
              <label className="block font-medium">Delivery Type</label>
              <Field as="select" name="deliveryType" className="w-full p-2 mb-6 border rounded">
                <option value="standard">Standard</option>
                <option value="express">Express</option>
              </Field>
              <ErrorMessage name="deliveryType" component="div" className="text-red-600" />
            </div>

            <button
              type="submit"
              className="w-full font-serif text-xl py-3 bg-red-300 text-white rounded hover:bg-red-600 transition-all duration-300 active:scale-x-75"
            >
              Submit
            </button>
            <span className='flex items-center mt-4 active:scale-105 transition-all'>
            <a href='/'
            >RETURN TO HOMEPAGE 
            </a>
            <FaArrowRight/>
            </span>

          </Form>
        )}
      </Formik>

      <div className="bg-[#130404] flex items-center p-5 mt-8">
        <div className="flex items-center text-white gap-3">
          <h3 className="text-xl font-bold">Previous Bookings:</h3>
          {bookings.length > 0 ? (
            <ul>
              {bookings.map((booking, index) => (
                <li key={index} className="flex gap-4">
                  <p><strong className="text-red-600">Pickup:</strong> {booking.pickupLocation}</p>
                  <p><strong className="text-red-600">Drop-Off:</strong> {booking.dropOffLocation}</p>
                  <p><strong className="text-red-600">Size:</strong> {booking.packageSize}</p>
                  <p><strong className="text-red-600">Weight:</strong> {booking.packageWeight}</p>
                  <p><strong className="text-red-600">Delivery:</strong> {booking.deliveryType}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white">No previous bookings. Please book a delivery to see it here.</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Bookings;
