import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="p-6">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-yellow-100 text-3xl text-black">
          <ul className="flex flex-row justify-around">
            <li> <Link href="/">Home</Link></li>  
            <li> <Link href="/about">About</Link></li>  
            <li> <Link href="/blog">Blog</Link></li>  
            <li> <Link href="/posts">Posts</Link></li>  
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
