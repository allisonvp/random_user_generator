import "@/styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";

import { SnackbarProvider } from "notistack";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={4000}>
      <Head>
        <title>Random Users Generator</title>
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="This is a random user generator to meet new people"
        />
        <meta name="keywords" content="random users, user generator" />
        <meta name="author" content="Allison Velarde"></meta>
        <meta property="og:locale" content="en_US" />
        <meta property="og:description" content="random user generator" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </SnackbarProvider>
  );
};

export default App;
