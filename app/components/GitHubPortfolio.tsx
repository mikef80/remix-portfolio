import { useState } from "react";
import Content from "./Content";
import { Code } from "./icons/Code";
import { Web } from "./icons/Web";
import { Project } from "~/routes/_index";
import { Link } from "@remix-run/react";

// Component
const GitHubPortfolio = ({ projects }: { projects: Project[] }) => {
  const [portfolioProjects] = useState(projects);

  return (
    <div id="projects" className="scroll-mt-[5rem] bg-gray-800 text-white p-6">
      <Content>
        <h1 className="text-3xl pb-4">GitHub Portfolio</h1>
        <p className="pb-2">
          A selection of projects, both from my bootcamp and personal projects.
        </p>
        <ul className="flex flex-wrap">
          {portfolioProjects.map((project, index) => (
            <li key={index} className="p-3 flex-1-col md:flex-2-col">
              <div className="flex flex-col items-center">
                <Link to={`/projects/${project.name}`}>
                  {/* <img
                    src="https://picsum.photos/800/450"
                    alt=""
                    loading="lazy"
                  /> */}
                  <h2 className="text-2xl pb-2">{project.name}</h2>
                </Link>
                <p className="pb-2">{project.description}</p>
                <div className="flex gap-2">
                  <Code colour="white" size={30} url={project.url} />
                  {project.homepage && (
                    <Web colour="white" size={30} url={project.homepage} />
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