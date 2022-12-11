import Image from "next/image";
import React from "react";
import ecommerceImg from "../public/assets/projects/mern-ecommerce.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const mern = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ecommerceImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">MERN ECOMMERCE PROJECT</h2>
          <h3> MongoDb / Express Js / React JS / Node Js</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="my-2">Project Overview</h2>

          <ul className="font-medium">
            This app was built using MongoDb, Express Js, React JS, Node Js and
            is hosted on Render.com .I had build a completely customized
            eCommerce application with the MERN stack with the following
            functionality :
            <li className="my-1 ml-2">- Full featured shopping cart</li>
            <li className="my-1 ml-2">- Product pagination</li>
            <li className="my-1 ml-2">- User profile with orders</li>
            <li className="my-1 ml-2">- Admin product management</li>
            <li className="my-1 ml-2">- Admin user management</li>
            <li className="my-1 ml-2">- Admin Order details page</li>
            <li className="my-1 ml-2">
              - Checkout process (shipping, payment method, etc)
            </li>
          </ul>
          <a
            href="https://github.com/TienPham98/mern-project"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://mern-ecom-app.onrender.com"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bootstrap
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default mern;
