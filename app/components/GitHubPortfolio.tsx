import Content from "./Content";
import type { Project as ProjectType } from "../utils/dataSource.server";
import IndividualProject from "./IndividualProject";

// Component
const GitHubPortfolio = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <div id="projects" className="scroll-mt-[5rem] text-gray-800 bg-white p-6">
      <Content>
        <h1 className="text-3xl pb-4">GitHub Portfolio</h1>
        <p className="pb-2">
          A selection of projects, both from my bootcamp and personal projects.
        </p>
        <ul className="flex flex-wrap">
          {projects.map((project, index) => (
            <IndividualProject key={index} project={project} />
          ))}
        </ul>
      </Content>
    </div>
  );
};

export default GitHubPortfolio;
