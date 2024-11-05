import React from 'react';

const Page = () => {
  return (
    <main className="h-auto min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="bg-slate-50 px-5 w-full max-w-[90rem]  rounded-md shadow-xl shadow-black border-4 border-black flex flex-wrap text-justify max-md:h-auto max-md:mt-20">
        <article className="p-5 sm:p-10 w-full">
          <em>
            <b className="font-sans text-2xl md:text-4xl">AsiDrop</b> is a local delivery service focused on making item shipping within Nigeria easy, fast, and reliable. With a user-friendly platform, Asidrop allows individuals and businesses to submit delivery requests from anywhere in Nigeria, ensuring that packages reach their destinations safely and on time. Whether you’re sending a personal gift, business package, or bulk delivery, Asidrop is designed to handle various delivery needs while maintaining transparency and efficiency.
          </em>

          <h1 className="font-extrabold text-xl md:text-2xl pt-6">Key Features of Asidrop Delivery Service:</h1>

          <ul className="list-decimal list-inside space-y-3 pt-4">
            <li><strong>Flexible Shipping Options:</strong> Asidrop offers multiple delivery types, including standard and express options, to cater to different time-sensitive needs. Users can choose the service level based on urgency, giving them control over delivery speed and cost.</li>
            <li><strong>User-Friendly Booking Process:</strong> The Asidrop website allows customers to easily submit their items for delivery. Through a simple form, users provide details like pickup and drop-off locations, package size, and weight, making it straightforward to schedule a shipment.</li>
            <li><strong>Real-Time Tracking:</strong> Customers can track their packages in real time, knowing exactly where their items are during transit. This builds trust by keeping customers informed every step of the way, from dispatch to delivery.</li>
            <li><strong>Local Expertise:</strong> As a locally focused delivery service, Asidrop is familiar with the nuances of Nigerian logistics, including common routes, potential delays, and local regulations. This local expertise helps to ensure prompt deliveries, even in challenging areas.</li>
            <li><strong>Secure and Reliable Service:</strong> Asidrop prioritizes package safety, using secure handling methods to minimize damage or loss risks. Every delivery is managed with care, and packages are protected throughout their journey.</li>
            <li><strong>Customer Support:</strong> With dedicated customer service, Asidrop is committed to resolving any issues that arise during the delivery process, providing a positive experience for all users.</li>
          </ul>

          <h2 className="font-extrabold text-xl md:text-2xl pt-6">Why Choose Asidrop?</h2>
          <p className="pt-4">
            Asidrop’s mission is to create a seamless and stress-free delivery experience by combining local expertise with innovative logistics solutions. Whether you're an individual or a business, Asidrop aims to make intra-Nigerian deliveries more accessible and reliable. Choose Asidrop for its speed, transparency, and customer-centered approach, redefining how deliveries are handled within Nigeria.
          </p>
          <p className="font-bold mt-6 text-xl md:text-2xl">Asidrop—bringing convenience to your doorstep, one delivery at a time.</p>
        </article>
      </div>
    </main>
  );
}

export default Page;
