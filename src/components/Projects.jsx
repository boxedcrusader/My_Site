import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="flex flex-col items-center py-12 px-4 sm:px-6 md:px-8 w-full">
      <h3 className="text-3xl sm:text-4xl md:text-5xl mb-8 text-center underline underline-offset-8 md-underline-offset-6">
        Projects
      </h3>
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-center items-center w-full">
        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects;
