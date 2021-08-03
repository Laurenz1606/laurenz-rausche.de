import React from "react";

export default function Project({ project }) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={project.url !== "" ? project.url : null}
    >
      <div className="border border-gray-light hover:shadow-xl rounded-3xl p-3">
        <img alt={project.name} src={project.CoverImage} />
        <div className="p-3">
          <p className="flex justify-center items-center text-2xl font-medium mb-2">
            {project.name}
          </p>
          <p>{project.description}</p>
        </div>
      </div>
    </a>
  );
}
