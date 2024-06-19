import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
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
      <main className='mt-16 lg:mt-20'>
        {/* <Outlet/> */}
        <img src='https://fakeimg.pl/1200/ffffff/' alt='' />
      </main>
    </>
  );
}
