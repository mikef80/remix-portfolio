import type { Project } from "../utils/dataSource.server";
import { Link } from "@remix-run/react";
import { Code } from "./icons/Code";
import { Web } from "./icons/Web";

const IndividualProject = ({ project }: { project: Project }) => {
  return (
    <li className="p-3 flex-1-col md:flex-2-col">
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
          <Code colour="#1f2937" size={30} url={project.url} />
          {project.homepage && (
            <Web colour="#1f2937" size={30} url={project.homepage} />
          )}
        </div>
      </div>
    </li>
  );
};

export default IndividualProject;
