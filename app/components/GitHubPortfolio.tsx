import Content from "./Content";
import { Code } from "./icons/Code";
import { Web } from "./icons/Web";
import type { Project } from "../utils/dataSource.server";
import { Link } from "@remix-run/react";
import LanguagesBar from "./LanguagesBar";

// Component
const GitHubPortfolio = ({ projects }: { projects: Project[] }) => {
  return (
    <div id="projects" className="scroll-mt-[5rem] text-gray-800 bg-white p-6">
      <Content>
        <h1 className="text-3xl pb-4">GitHub Portfolio</h1>
        <p className="pb-2">
          A selection of projects, both from my bootcamp and personal projects.
        </p>
        <ul className="flex flex-wrap gap-y-3">
          {projects.map((project, index) => (
            <li key={index} className="p-3 flex-1-col md:flex-2-col">
              <div className="flex flex-col items-center">
                <h2 className="text-2xl pb-2">{project.name}</h2>
                <LanguagesBar languages={project.languages} />
                <p className="pb-2">{project.description}</p>
                <div className="flex gap-2">
                  <Code colour="#1f2937" size={30} url={project.url} />
                  {project.homepage && (
                    <Web colour="#1f2937" size={30} url={project.homepage} />
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Content>
    </div>
  );
};

export default GitHubPortfolio;
