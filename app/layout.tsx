import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageLayout from "./_components/page-layout";
import WebsiteIcon from "./_components/icons/website-icon";
import WebsiteHeading from "./_components/text/website-heading";
import Navigation from "./_components/navigation";
import LinkedinIcon from "./_components/icons/linkedin-icon";
import GithubIcon from "./_components/icons/github-icon";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kevin's Portfolio",
  description: "A showcase of my work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen bg-[#111418] dark flex flex-col`}
      >
        {/* <PageLayout> */}
        <PageLayout.Header>
          <Link href="/" className="flex gap-3 items-center">
            <WebsiteIcon />
            <WebsiteHeading>Kevin&apos;s Portfolio</WebsiteHeading>
          </Link>
          {/* <NavigationTopBar /> */}
        </PageLayout.Header>

        {/* Main Body Start */}
        {children}
        {/* Main Body End */}

        <PageLayout.Footer>
          <Navigation>
            <Navigation.ExternalLink href="https://www.linkedin.com/in/ktaulman">
              <LinkedinIcon />
            </Navigation.ExternalLink>
            <Navigation.ExternalLink href="https://www.github.com/ktaulman">
              <GithubIcon />
            </Navigation.ExternalLink>
          </Navigation>

          <p className="text-[#9dabb8] text-base text-center py-2 font-normal leading-normal w-full ">
            @2024 Kevin&apos;s Portfolio. All rights reserved.
          </p>
        </PageLayout.Footer>
        {/* </PageLayout> */}
      </body>
    </html>
  );
}
