import React from "react";
import Container from "../Container";
import Contents from "../../contents/Projects";
import Project from "../Project";

export default function Projects({ lang }) {
  return (
    <div className="pt-12">
      <Container>
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-3xl font-semibold mb-6">
            {Contents[lang].heading}
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-3 grid-cols-1">
          {Contents[lang].projects.map((project, idx) => (
            <Project key={idx} project={project} />
          ))}
        </div>
      </Container>
    </div>
  );
}
