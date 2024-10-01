import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import About from "~/components/About";
import BackToTop from "~/components/BackToTop";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import SkipLink from "~/components/SkipLink";
import Tech from "~/components/Tech";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const projectId = params.projectId;
  return { projectId };
};

const Projects = () => {
  const { projectId } = useLoaderData<typeof loader>();
  console.log(projectId);

  return (
    <>
      <header>
        <SkipLink />
        <BackToTop />
        <Navbar />
      </header>
      <main id="main" className="scroll-mt-20">
        {/* <Content> */}
        <p>This is for project {projectId}</p>

        {/* </Content> */}
      </main>
    </>
  );
};

export default Projects;
