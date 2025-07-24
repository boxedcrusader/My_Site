import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      url: "/images/rec_book.png",
      title: "Recipe Book",
      description:
        "A simple recipebook web-app which makes use of spoonacular API to display recipes.",
      gihublink: "https://github.com/boxedcrusader/recipe",
      link: "https://recipe-book-phi-seven.vercel.app/"
    },
    {
      url: "/images/ecoshop.png",
      title: "EcoShop",
      description:
        "An e-commerce web-app that allows users to buy and sell eco-friendly products.",
      githublink: "https://github.com/boxedcrusader/Ecoshop",
      link: "https://ecoshop-pied.vercel.app/"
    },
  ];

  return (
    <div className="flex flex-col items-center py-12 px-4 sm:px-6 md:px-8 w-full">
      <h3 className="text-3xl sm:text-4xl md:text-5xl mb-8 text-center">Projects</h3>
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-center items-center w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
