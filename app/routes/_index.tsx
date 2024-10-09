import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import About from "~/components/About";
import BackToTop from "~/components/BackToTop";
import Contact from "~/components/Contact";
import Content from "~/components/Content";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import Projects from "~/components/Projects";
import SkipLink from "~/components/SkipLink";
import Tech from "~/components/Tech";
import { octoFetch } from "~/utils/utils";

export const meta: MetaFunction = () => {
  return [
    { title: "Mike Francis - Portfolio" },
    { name: "description", content: "Welcome to my Portfolio!" },
  ];
};

export type Project = {
  id: number;
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  languages: { [key: string]: number };
  updated_at: string;
};

// Loader function
export const loader = async () => {
  const response: Project[] = [
    {
      id: 816973734,
      name: "remix-portfolio",
      description: "💼 Rebuilding my portfolio as a full stack app in Remix",
      url: "https://github.com/mikef80/remix-portfolio",
      homepage: "",
      languages: { TypeScript: 14843, JavaScript: 1916, CSS: 59, total: 16818 },
      updated_at: "2024-09-30T21:34:54Z",
    },
    {
      id: 721078524,
      name: "be-nc-news",
      description:
        "📰 Backend API for a reddit-style website. One of my key projects for my Northcoders Software Development Bootcamp (October 2023 Cohort)",
      url: "https://github.com/mikef80/be-nc-news",
      homepage: "",
      languages: { JavaScript: 178584, Shell: 62, total: 178646 },
      updated_at: "2024-05-20T20:41:53Z",
    },
    {
      id: 467957363,
      name: "colourdle",
      description:
        "🌈 My take on a Wordle-inspired game, based on guessing RGB codes for colours!",
      url: "https://github.com/mikef80/colourdle",
      homepage: "https://colourdle.co.uk/",
      languages: { JavaScript: 30899, HTML: 8678, CSS: 5083, total: 44660 },
      updated_at: "2024-01-29T14:51:13Z",
    },
    {
      id: 734283083,
      name: "quotesnap-fe",
      description:
        "👨‍💻 The frontend for the final group project for our Northcoders Software Developer Bootcamp (October 2023 Cohort)",
      url: "https://github.com/mikef80/quotesnap-fe",
      homepage: "",
      languages: { JavaScript: 43516, Java: 12289, total: 55805 },
      updated_at: "2024-03-09T19:05:37Z",
    },
    {
      id: 734284178,
      name: "quotesnap-be",
      description:
        "🗄️ The backend for the final group project for our Northcoders Software Developer Bootcamp (October 2023 Cohort)",
      url: "https://github.com/mikef80/quotesnap-be",
      homepage: "",
      languages: { JavaScript: 36401, total: 36401 },
      updated_at: "2024-01-26T20:30:02Z",
    },
    {
      id: 730141497,
      name: "fe-nc-news",
      description:
        "🗞️ React frontend app for a reddit-style website. One of my key projects for my Northcoders Software Development Bootcamp (October 2023 Cohort)",
      url: "https://github.com/mikef80/fe-nc-news",
      homepage: "https://nc-news.mikefrancis.uk/",
      languages: { JavaScript: 22907, HTML: 743, CSS: 58, total: 23708 },
      updated_at: "2024-05-16T20:26:56Z",
    },
  ];

  return { projects: response };

  /* const ghtoken: string | undefined = process.env.GITHUB_TOKEN;

  const response = await octoFetch(ghtoken);

  return { projects: response }; */
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return { error: "All fields are required" };
  }

  console.log("Name: ", name);
  console.log("Email: ", email);
  console.log("Message: ", message);

  try {
    return { success: "Your message was submitted", ok: true };
  } catch (error) {
    return {
      error: "There was an error submitting your message. Please try again.",
      ok: false,
    };
  }
};

export default function Index() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <>
      <header>
        <SkipLink />
        <BackToTop />
        <Navbar />
      </header>
      <Hero />
      <main id="main" className="scroll-mt-20">
        {/* <Content> */}
        <About />
        <Tech />
        <Projects projects={projects} />
        <Contact />
        {/* </Content> */}
      </main>
    </>
  );
}
