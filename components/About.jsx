import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About me
          </p>
          <h2 className="py-4">Who I Am</h2>

          <p className="py-2 text-gray-600">
            I am Pham Nhat Tien. I have started my journey with programming back
            in 2016 on University of Transport and Communication with C (basics)
            and LAD (Plc language), which I mainly use to design and simulate
            the results of various microprocessors and circuits. I have also
            have some experience in C programming to control microprocessors.
            Later, after 2 years working as an electronics engineer, I decided
            to go in the different direction. I was learning web development on
            my own. Since then, I have been working as Front-End React
            Developer.
          </p>

          <p className="py-2 text-gray-600">
            I specialize in building responsive front-end UI applications that
            connect with API and other backend technologies. I am passionate
            about learning new technologies and understand there is more than
            one way to accomplish a task. Though I am most proficient in
            building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
