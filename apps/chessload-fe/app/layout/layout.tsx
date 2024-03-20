import React from "react";
import { Inter as FontSans } from "next/font/google"
import Head from "next/head";
import { useEffect } from 'react';

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
      document.body.classList.add(cn("min-h-screen"), cn("bg-background"), cn("font-sans"), cn("antialiased"), cn(fontSans.variable), "dark");
  });

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="I’m Théo Nothias, a Graphic Designer & Art Director, based in France, my work is all about bringing ideas to life through killer visuals, into the world of color, typography, and composition to create designs that not  only look good but also grant you the perfect satisfaction."
        />
        <title>Théo Nothias — Graphic Designer & Art Director</title>
      </Head>
      {children}
    </>
  );
};

export default Layout;
