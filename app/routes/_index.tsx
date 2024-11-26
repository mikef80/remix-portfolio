import type { MetaFunction } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";
import About from "~/components/About";
import BackToTop from "~/components/BackToTop";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import GitHubPortfolio from "~/components/GitHubPortfolio";
import SkipLink from "~/components/SkipLink";
import Tech from "~/components/Tech";
import { getDataSource } from "../utils/dataSource.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Mike Francis - Portfolio" },
    { name: "description", content: "Welcome to my Portfolio!" },
  ];
};

export const loader = async () => {
  const projects = await getDataSource();
  return { projects };
};

export default function Index() {
  const { projects } = useLoaderData<typeof loader>();
  const { state } = useNavigation();

  console.log(state,'<--state');
  

  return (
    <>
      <header>
        <SkipLink />
        <BackToTop />
        <Navbar />
      </header>
      <Hero />
      <main id="main" className="scroll-mt-20">
        <About />
        <Tech />
        <GitHubPortfolio projects={projects} />
      </main>
    </>
  );
}
