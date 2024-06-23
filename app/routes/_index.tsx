import type { MetaFunction } from "@remix-run/node";
import About from "~/components/About";
import Content from "~/components/Content";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import SkipLink from "~/components/SkipLink";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return (
    <>
      <header>
        <SkipLink/>
        <Navbar />
      </header>
      <Hero />
      <main id="main" className="scroll-mt-20">
        <Content>
          <About />
        </Content>
      </main>
    </>
  );
}
