import type { Metadata } from "next";
import { Lato, Forum } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const forum = Forum({
  variable: "--font-forum",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Montasir Moyen - Full-Stack Software Developer in Boston",
  description: "Full-stack developer building web apps, AI integrations, and games. Based in Boston, MA, studying Computer Science at Suffolk University. Explore my projects in React, TypeScript, and more.",
  keywords: "Montasir Moyen, Montasir, Moyen, software developer, full-stack developer, Boston developer",
  alternates: {
    canonical: "https://www.montasirmoyen.com",
  },
  openGraph: {
    title: "Montasir Moyen - Full-Stack Software Developer",
    description: "Full-stack developer building web apps, AI integrations, and games. Based in Boston, MA, studying Computer Science at Suffolk University. Explore my projects in React, TypeScript, and more.",
    url: "https://www.montasirmoyen.com",
    siteName: "Montasir Moyen",
    type: "website",
  },
};

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Montasir Moyen",
    url: "https://www.montasirmoyen.com",
    sameAs: [
      "https://www.linkedin.com/in/montasirmoyen/",
      "https://www.github.com/montasirmoyen/",
    ],
    jobTitle: "Full-Stack Software Developer",
    worksFor: {
      "@type": "Organization",
      name: "Self-employed",
    },
    areaServed: "Boston, Massachusetts",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <JsonLd />
      </head>
      <body className={`${lato.variable} ${forum.variable} antialiased bg-black overflow-x-hidden`}>
        <div className="min-h-screen flex flex-col relative overflow-visible">
          <NavBar />
          <main className="flex-1 overflow-visible">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}