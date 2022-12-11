import Image from "next/image";
import Link from "next/link";
import React from "react";
import mernImg from "../public/assets/projects/mern-ecommerce.png";
import movieImg from "../public/assets/projects/movie.jpg";
import nextShopImg from "../public/assets/projects/nextShop.jpg";
import igImg from "../public/assets/projects/instagram.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Mern Ecommerce"
            backgroundImg={mernImg}
            projectUrl="/mern"
            tech="React JS"
          />
          <ProjectItem
            title="Movie App"
            backgroundImg={movieImg}
            projectUrl="/movie"
            tech="React JS"
          />
          <ProjectItem
            title="Nextjs Shopping App"
            backgroundImg={nextShopImg}
            projectUrl="/nextshop"
            tech="Next JS"
          />
          <ProjectItem
            title="Instagram UI"
            backgroundImg={igImg}
            projectUrl="/instagram"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
