import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from "@remix-run/react";
import "./tailwind.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return json({ env: { reCaptcha_site_key: process.env.reCaptcha_site_key } });
};

export default function App() {
  return <Outlet />;
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { env } = useLoaderData<typeof loader>();

  return (
    <html lang="en" className="motion-safe:scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* FONT IMPORT */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
      </head>
      <body className={`font-raleway relative top-[80px]`}>
        <GoogleReCaptchaProvider
          reCaptchaKey={env.reCaptcha_site_key}
          scriptProps={{
            async: false,
            defer: true,
            appendTo: "head",
            nonce: undefined,
          }}
        >
          <Outlet />
        </GoogleReCaptchaProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
