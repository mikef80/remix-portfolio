import { redirect } from "@remix-run/node";

export const loader = async () => {
  console.log("Redirecting to /");
  return redirect("/#projects");
};

const Projects = () => {
  return null;
};

export default Projects;
