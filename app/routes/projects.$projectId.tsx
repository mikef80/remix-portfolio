import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import BackToTop from "~/components/BackToTop";
import Content from "~/components/Content";
import Navbar from "~/components/Navbar";
import SkipLink from "~/components/SkipLink";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const projectId = params.projectId;
  console.log("Project ID", projectId);
  return { projectId };
};

const Project = () => {
  const { projectId } = useLoaderData<typeof loader>();

  return (
    <>
      <header>
        <SkipLink />
        <BackToTop />
        <Navbar />
      </header>
      <main id="main" className="scroll-mt-20 mt-20">
        <div
          id="about"
          className="scroll-mt-[5rem] text-gray-800 px-6 pb-6 pt-4 md:p-6 md:pt-4"
        >
          <Content>
            <p>This is for project {projectId}</p>
            <div style={{height:'1000px',backgroundColor:'lightgreen'}}></div>
          </Content>
        </div>
      </main>
    </>
  );
};

export default Project;
