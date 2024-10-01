import { useState } from "react";
import Content from "./Content";
import { Code } from "./icons/Code";
import { Web } from "./icons/Web";
import { Project } from "~/routes/_index";
import { Link } from "@remix-run/react";

// Component
const Projects = ({ projects }: { projects: Project[] }) => {
  const [portfolioProjects] = useState(projects);

  return (
    <div id="projects" className="scroll-mt-[5rem] bg-gray-800 text-white p-6">
      <Content>
        <h1 className="text-3xl pb-4">Projects</h1>
        <p className="pb-2">
          A selection of projects, both from self-driven and from my bootcamp.
        </p>
        <ul className="flex flex-wrap justify-center gap-2 w-full">
          {portfolioProjects.map((project, index) => (
            <li key={index} className="p-2 lg:max-w-[49%]">
              <Link to="">
                <div className="flex flex-col items-center">
                  <img src="https://picsum.photos/800/450" alt="" />
                  <h2 className="text-2xl pb-2">{project.name}</h2>
                  <p className="pb-2">{project.description}</p>
                  <div className="flex gap-2">
                    <Code colour="white" size={30} url={project.url} />
                    {project.homepage && (
                      <Web colour="white" size={30} url={project.homepage} />
                    )}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Content>
    </div>
  );
};

export default Projects;
