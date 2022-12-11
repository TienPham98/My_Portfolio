import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Tien Pham | Resume</title>
        <meta
          name="description"
          content="I'm a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Tien Pham</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/ti%E1%BA%BFn-ph%E1%BA%A1m-nh%E1%BA%ADt-b078b0229/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/TienPham98"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Web Development{" "}
              <span className="px-1">| Electronic Engineer</span>{" "}
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Electronic Engineer</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          I am Pham Nhat Tien. I have started my journey with programming back
          in 2016 on University of Transport and Communication with C (basics)
          and LAD (Plc language), which I mainly use to design and simulate the
          results of various microprocessors and circuits. I have also have some
          experience in C programming to control microprocessors. Later, after 2
          years working as an electronics engineer, I decided to go in the
          different direction. I was learning web development on my own. Since
          then, I have been working as Front-End React Developer.
        </p>
        <p>
          I am passionate about learning new technologies and understand there
          is more than one way to accomplish a task. Though I am most proficient
          in building front-end applications using HTML, CSS, Javascript, and
          React, I am a quick learner and can pick up new tech stacks as needed.
          I believe that being a great developer is not using one specific
          language, but choosing the best tool for the job.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Node JS
            <span className="px-2">|</span>Express JS
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>NoSQL
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Bootstrap
            <span className="px-2">|</span> Firebase
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Web Developer</span>
            <span className="px-2">|</span>Bellsystem24-HoaSao (2022 - Now)
          </p>
          <p className="py-1 italic">Front-end Developer</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Redesign the model to suit the requirements of each customer on
              Viettel electronic invoice system.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Fix errors that arise during the use of customer accounts, then
              find and report errors to handle.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Electronic Engineer</span>
            <span className="px-2">|</span>PSMART JSC
          </p>
          <p className="py-1 italic">R&D Engineer (2020 - 2022)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Update and process information and production data during testing
              of new products.
            </li>
            <li>
              Report the progress of new tests, arising errors and solutions.
            </li>
            <li>
              Receive requests to build and deploy information to other
              departments in the company.
            </li>
            <li>
              Collaborated with chinese engineers to find design solutions
              suitable for each actual condition as needed.
            </li>
            <li>
              Using practical knowledge combined with real experience needs to
              find the right solution for future designs
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
