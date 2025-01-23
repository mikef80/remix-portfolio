import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useLocation } from "@remix-run/react";
import BackToTop from "~/components/BackToTop";
import Content from "~/components/Content";
import Navbar from "~/components/Navbar";
import SkipLink from "~/components/SkipLink";

const Project = () => {
  const location = useLocation();
  const { description, homepage, id, languages, name, updated_at, url } =
    location.state.project;

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
          className="scroll-mt-[5rem] text-gray-800 px-6 pb-6 pt-4 md:p-6 md:pt-4 mx-auto"
        >
          <Content extraClasses="text-center max-w-2xl">
            <h1 className="text-3xl font-semibold mb-10">{name}</h1>
            <p>{description}</p>
          </Content>
        </div>
      </main>
    </>
  );
};

export default Project;
