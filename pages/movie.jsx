import Image from "next/image";
import React from "react";
import movieImg from "../public/assets/projects/movie.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const movie = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={movieImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Movie App</h2>
          <h3>React JS / Redux Toolkit</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="my-4">Project Overview</h2>
          <p>
            I built this app to demonstrate knowledge working in React JS and
            React-Redux using Redux toolkit. Besides,i have build this project
            with Axios for API calls, React Router DOM for Routing and Node-SASS
            for our SCSS compile to CSS. In this we will see how we can convert
            a synchronous action creator into a asynchronous action creator
            using Redux Middleware Thunk and build the Search filter using
            Middleware Thunk in redux toolkit so that we can search for
            different movies or shows. Another feature we will add is Movie Card
            Slider or Carousel component. We will use react-slick library and
            build a responsive movie carousel.
          </p>
          <a
            href="https://github.com/TienPham98/movie-app-with-redux-toolkit"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://movie-app-with-redux-toolkit.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux Toolkit
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bootstrap
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Axios API
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

export default movie;
