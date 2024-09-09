import { useEffect, useState } from "react";
import Content from "./Content";
import { octoFetch } from "./utils";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/react";

export const loader = async () => {
  const repos = await octoFetch();

  return json(repos);
};

const Projects = () => {
  const [projects, setProjects] = useState(useLoaderData());
  console.log(projects);

  return (
    <div id='tech' className='scroll-mt-[5rem] bg-gray-800 text-white p-6'>
      <Content>
        <h1 className='text-3xl pb-4'>Projects</h1>
        <ul className='flex flex-wrap justify-center gap-2'>
          {/* {projects.map((project, id) => {
            return (
              <li className='p-2' key={project.uuid}> */}
          {/* https://devicon.dev/ */}
          {/* <a href={project.url} target='blank' className='flex flex-col items-center'>
                  {project}
                </a>
              </li>
            );
          })} */}
          {/* {projects} */}
        </ul>
      </Content>
    </div>
  );
};

export default Projects;
