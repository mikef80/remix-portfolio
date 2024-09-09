import type { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
import About from "~/components/About";
import BackToTop from "~/components/BackToTop";
import Content from "~/components/Content";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import SkipLink from "~/components/SkipLink";
import Tech from "~/components/Tech";

export const meta: MetaFunction = () => {
  return [
    { title: "Mike Francis - Portfolio" },
    { name: "description", content: "Welcome to my Portfolio!" },
  ];
};

export default function Index() {
  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update the URL with the hash, without reloading the page
            history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.5, // Adjust visibility threshold (50%)
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup observer on unmount
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <header>
        <SkipLink />
        <BackToTop />
        <Navbar />
      </header>
      <Hero />
      <main id='main' className='scroll-mt-20'>
        {/* <Content> */}
        <About />
        <Tech />
        {/* </Content> */}
      </main>
    </>
  );
}
