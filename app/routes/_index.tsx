import type { MetaFunction } from "@remix-run/node";
import About from "~/components/About";
import Content from "~/components/Content";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Hero />
      <main>
        <Content>
          <About />
        </Content>
      </main>
    </>
  );
}
