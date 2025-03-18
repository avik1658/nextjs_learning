import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  {
    return (
        <div>
          <nav className="bg-yellow-100 text-3xl text-black mt-10">
            <ul className="flex flex-row justify-around">
              <li> <Link href="/about/mission">Mission</Link></li>  
              <li> <Link href="/about/vision">Vision</Link></li>  
            </ul>
          </nav>
            {children}
        </div>
    );
}