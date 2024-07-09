import type { MetaFunction } from "@remix-run/node";
import About from "~/components/About";
import BackToTop from "~/components/BackToTop";
import Content from "~/components/Content";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import SkipLink from "~/components/SkipLink";
import Timeline from "~/components/Timeline";

export const meta: MetaFunction = () => {
  return [{ title: "Mike Francis - Portfolio" }, { name: "description", content: "Welcome to my Portfolio!" }];
};

export default function Index() {
  return (
    <>
      <header>
        <SkipLink />
        <BackToTop />
        <Navbar />
      </header>
      <Hero />
      <main id='main' className='scroll-mt-20'>
          <Timeline/>
        {/* <Content>
          <About />
        </Content> */}
      </main>
    </>
  );
}
