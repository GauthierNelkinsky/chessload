import React from "react";
import { Inter as FontSans } from "next/font/google"
import Head from "next/head";
import { useEffect } from 'react';
import { ThemeProvider } from "../../app/context/theme-provider"
import Header  from "./header";

import { cn } from "../../lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  
  useEffect(() =>
  {   
      document?.body?.classList?.add(cn("bg-background"), cn("font-sans"), cn("antialiased"), cn(fontSans.variable));
  }, []);

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Chessload is a web application that allows you to play chess online with your friends."
        />
        <title>Chessload</title>
      </Head>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Header />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
