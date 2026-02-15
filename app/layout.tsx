import React, { ReactNode } from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { sourceSans } from "@/fonts";
import AosInit from "@/components/AosInit";

interface LayoutProp {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "ifitness Gym",
  description: "A beautiful multipage website for a gym and fitness center",
};

const RootLayout = ({ children }: LayoutProp) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sourceSans.className} antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AosInit />
          <header>
            <Navbar />
          </header>
          <main className="bg-fog dark:bg-charcoal">{children}</main>
          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
