import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="w-96 bg-white border border-gray-300 rounded-xl p-6 m-4 flex flex-col items-center shadow-md hover:shadow-xl transition-shadow duration-300">
      <img
        src={project.url}
        alt={project.title}
        className="mb-4 rounded-lg h-48 w-80 object-cover"
      />

      <h3 className="text-2xl font-semibold mt-2 underline decoration-gray-500 text-center">
        {project.title}
      </h3>

      <p className="text-gray-700 mt-2 text-center">{project.description}</p>

      <div className="flex gap-6 mt-4">

        <a
          href={project.githublink}
          target="_blank"
          rel="noopener noreferrer"
          title="View source on GitHub"
          className="text-gray-600 hover:text-black transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={28}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2a10 10 0 00-3.162 19.493c.5.092.683-.217.683-.482v-1.684c-2.782.604-3.369-1.34-3.369-1.34-.454-1.152-1.11-1.46-1.11-1.46-.909-.621.07-.609.07-.609 1.005.071 1.534 1.033 1.534 1.033.892 1.527 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.946 0-1.092.39-1.986 1.029-2.684-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.706.115 2.504.337 1.91-1.295 2.748-1.026 2.748-1.026.545 1.376.202 2.393.1 2.646.64.698 1.027 1.592 1.027 2.684 0 3.846-2.338 4.69-4.566 4.938.36.309.682.919.682 1.852v2.747c0 .268.18.578.688.48A10.001 10.001 0 0012 2z"
            />
          </svg>
        </a>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          title="Visit live site"
          className="text-gray-600 hover:text-black transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={28}
            viewBox="0 0 48 48"
          >
            <g fill="none" stroke="currentColor" strokeWidth={3}>
              <path
                strokeLinejoin="round"
                d="M3 24a21 21 0 1 0 42 0a21 21 0 1 0-42 0"
              />
              <path
                strokeLinejoin="round"
                d="M15 24a9 21 0 1 1 18 0a9 21 0 1 1-18 0"
              />
              <path strokeLinecap="round" d="M4.5 31h39m-39-14h39" />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
