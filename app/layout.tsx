import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import ScrollObserver from "./utils/scroll-observer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://parallax-website-liard.vercel.app/"),
  title: "Parallax Website",
  description: "Coding by Dong Nguyen",
  openGraph: {
    images: "",
    type: "website",
    url: "https://parallax-website-liard.vercel.app/",
    title: "Parallax Website",
    description: "Made by Dong Nguyen",
    siteName: "Parallax Website",
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
  },
  referrer: "origin",
  authors: [{ name: "Đông Nguyễn", url: "https://github.com/Viuuu0301" }],
  generator: "Next.js",
  keywords: "parallax,nextjs,react",
  publisher: "Vercel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ScrollObserver>
        <body className={inter.className}>{children}</body>
      </ScrollObserver>
    </html>
  );
}
