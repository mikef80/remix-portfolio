import { redirect } from "@remix-run/node";

export const loader = async () => {
  return redirect("/");
};

const Projects = () => {
  return null;
};

export default Projects;
