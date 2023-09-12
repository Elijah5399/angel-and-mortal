import "@/styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
// importing here so we don't need to reimport in each page
import { Albert_Sans } from "next/font/google";
import Head from "next/head";

const albertSans = Albert_Sans({
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-albert",
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${albertSans.variable} font-sans`}>
        {getLayout(<Component {...pageProps} />)}
      </main>
    </>
  );
}
