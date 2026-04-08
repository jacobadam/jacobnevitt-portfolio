import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { navLink } from "@/types/nav.types";
import SideNav from "./components/layout/side-nav";
import { ClientWrapper } from "./components/provider/client-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jacob Nevitt",
  description:
    "Frontend-focused software developer with 5+ years' experience building high-performance web applications using React, Next.js, TypeScript, and Node.js.",
  icons: {
    icon: "/j-logo.png",
  },
  openGraph: {
    title: "Jacob Nevitt | Frontend Software Developer",
    description:
      "Frontend-focused software developer with 5+ years' experience building high-performance web applications using React, Next.js, TypeScript, and Node.js.",
    url: "https://www.jacobnevitt.com/",
    images: ["/j-logo-og.png"],
    locale: "en_GB",
    type: "website",
  },
};

const navLinks: navLink[] = [
  { href: "about", title: "About", id: 1 },
  { href: "projects", title: "Projects", id: 2 },
  { href: "experience", title: "Experience", id: 3 },
  { href: "tech-stack", title: "Tech Stack", id: 4 },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-primary text-primary-foreground px-0 lg:px-20 py-4 lg:py-0 mx-auto">
            <SideNav navLinks={navLinks} />
            <main>{children}</main>
          </div>
        </ClientWrapper>
      </body>
    </html>
  );
}
