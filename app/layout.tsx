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
  title: "Jacob Nevitt Portfolio V2",
  description:
    "Personal portfolio of Jacob Nevitt, a software developer showcasing projects, technical skills, and experience in building modern web applications.",
  icons: {
    icon: "/j-logo.ico",
  },
};

const navLinks: navLink[] = [
  { href: "about", title: "About", id: 1 },
  { href: "experience", title: "Experience", id: 2 },
  { href: "projects", title: "Projects", id: 3 },
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
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-primary text-primary-foreground p-4 lg:p-12 mx-auto">
          <ClientWrapper>
            <SideNav navLinks={navLinks} />
            <main>{children}</main>
          </ClientWrapper>
        </div>
      </body>
    </html>
  );
}
