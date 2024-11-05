import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full shadow-black mt-20 border-4 border-black ">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-600">Contact Us</h2>
        <p className="text-center text-gray-700 mb-6">
          Have questions or need help with your delivery? Reach out to us, and we'll get back to you promptly.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-red-600">Full Name</label>
            <input
              type="text"
              className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-black"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-red-600">Email Address</label>
            <input
              type="email"
              className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-black"
              placeholder="Your email address"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-red-600">Phone Number</label>
            <input
              type="tel"
              className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-black"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-red-600">Message</label>
            <textarea
              rows="4"
              className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-black"
              placeholder="Type your message here"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center text-gray-600">
          <p>Or reach us directly at:</p>
          <p className="font-semibold">Email: support@asidrop.com</p>
          <p className="font-semibold">Phone: +234-810-371-7215</p>
          <p className="mt-4">We look forward to assisting you!</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
