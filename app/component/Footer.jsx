import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrDeliver } from "react-icons/gr";
import {
  FaCopyright,
  FaInstagram,
  FaMoneyCheckDollar,
  FaPinterest,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { BiSolidHappyHeartEyes } from "react-icons/bi";
import { FaTrophy, FaWhatsapp, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-black text-white py-8 px-4">
      <div className="flex flex-wrap justify-around items-center gap-6 mb-4">
        <span className="flex flex-col items-center gap-2 w-1/2 sm:w-auto">
          <GrDeliver className="text-6xl text-red-600 sm:text-4xl hover:scale-150 transition-all" />
          <h3 className="font-semibold capitalize text-center text-sm sm:text-base">
            Fast NationWide Delivery
          </h3>
        </span>

        <span className="flex flex-col items-center gap-2 w-1/2 sm:w-auto">
          <FaMoneyCheckDollar className="text-6xl text-red-600 sm:text-4xl hover:scale-150 transition-all" />
          <h3 className="font-semibold capitalize text-center text-sm sm:text-base">
            Create an account with AsiDrop and get 10% off
          </h3>
        </span>

        <span className="flex flex-col items-center gap-2 w-1/2 sm:w-auto">
          <BiSolidHappyHeartEyes className="text-6xl text-red-600 sm:text-4xl hover:scale-150 transition-all" />
          <h3 className="font-semibold capitalize text-center text-sm sm:text-base">
            Be Happy Returns
          </h3>
        </span>

        <span className="flex flex-col items-center gap-2 w-1/2 sm:w-auto">
          <FaTrophy className="text-6xl text-red-600 sm:text-4xl hover:scale-150 transition-all" />
          <h3 className="font-semibold capitalize text-center text-sm sm:text-base">
            Best In Class Warranty
          </h3>
        </span>
      </div>

      <div className="mt-4 border-t-4 pt-4 border-red-600 flex flex-wrap justify-around items-center gap-8">
        <span className="flex flex-col sm:flex-row items-center gap-4 group">
          <Image
            src="/asidrop2.png"
            alt="Asidrop Delivery"
            width={100}
            height={100}
            className="rounded-lg group-hover:scale-110 transition"
          />
          <Link href="/contact" className="flex flex-col items-center sm:items-start gap-2">
            <h1 className="capitalize font-bold text-center sm:text-left">
              Let's Make A Delivery For You
            </h1>
            <button className="bg-red-600 py-2 px-4 rounded-lg capitalize font-bold hover:bg-white hover:text-red-600 hover:scale-110">
              Contact us here
            </button>
          </Link>
        </span>

        <div className="bg-red-600 w-full sm:w-[23rem] flex flex-col items-center p-4">
          <h2 className="font-bold text-center flex flex-row items-center gap-1">
            Download <p className="text-black font-bold text-2xl">AsiDrop</p> App Now
          </h2>
          <div className="flex items-center justify-center gap-4 mt-2">
            <Link href="https://play.google.com/store/apps?hl=en">
              <Image src="/google-play-badge.png" alt="PlayStore" width={120} height={40} className="hover:scale-150 transition-all"/>
            </Link>
            <Link href="https://www.apple.com/app-store/">
              <Image src="/app-store2.png" alt="AppStore" width={100} height={30} className="hover:scale-150 transition-all" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="capitalize font-bold">Follow us on social media</h2>
          <div className="flex gap-3 mt-2">
            <Link href="https://www.instagram.com">
              <FaInstagram className="text-4xl text-[#e6399b] hover:shadow-lg hover:scale-150 transition-all" />
            </Link>
            <Link href="https://www.x.com">
              <FaSquareXTwitter className="text-4xl hover:shadow-lg hover:scale-150 transition-all" />
            </Link>
            <Link href="https://www.whatsapp.com">
              <FaWhatsapp className="text-4xl text-[#26e600] hover:shadow-xl hover:scale-150 transition-all shadow-red-600" />
            </Link>
            <Link href="https://www.facebook.com">
              <FaFacebookSquare className="text-4xl text-[#2300e6] hover:shadow-lg hover:scale-150 transition-all" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t-4 border-black bg-white text-red-600 p-3 flex items-center justify-center gap-1 mt-4">
        <FaCopyright />
        <h2 className="font-extrabold capitalize">Designed by HonchoLex</h2>
      </div>
    </section>
  );
};

export default Footer;
