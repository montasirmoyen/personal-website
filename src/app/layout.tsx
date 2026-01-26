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
  authors: [{ name: "Montasir Moyen", url: "https://www.montasirmoyen.com" }],
  creator: "Montasir Moyen",
  publisher: "Montasir Moyen",
  title: "Montasir Moyen - Full-Stack Software Developer in Boston",
  description: "Full-stack developer building web apps, AI integrations, and games. Based in Boston, MA, studying Computer Science at Suffolk University. Explore my projects in React, TypeScript, and more.",
  keywords: [
    "Montasir Moyen",
    "Montasir",
    "Moyen",
    "bangladeshi software developer",
    "software developer Boston",
    "full-stack developer Boston",
    "React developer Boston",
    "Next.js developer",
    "TypeScript developer",
    "student software developer",
    "Suffolk University computer science",
    "AI developer portfolio",
    "web developer portfolio"
  ],
  alternates: {
    canonical: "https://www.montasirmoyen.com",
  },
  openGraph: {
    title: "Montasir Moyen - Full-Stack Software Developer",
    description: "Full-stack developer building web apps, AI integrations, and games. Based in Boston, MA, studying Computer Science at Suffolk University. Explore my projects in React, TypeScript, and more.",
    url: "https://www.montasirmoyen.com",
    siteName: "Montasir Moyen",
    type: "website",
    images: [
      {
        url: "https://www.montasirmoyen.com/og-image.png",
        width: 1920,
        height: 1080,
        alt: "Montasir Moyen Portfolio Preview",
      },
      {
        url: "https://www.montasirmoyen.com/mm-logo.png",
        width: 512,
        height: 512,
        alt: "Montasir Moyen Logo",
      },
    ],
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
    alumniOf: {
      "@type": "CollegeOrUniversity",
      "name": "Suffolk University"
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Full-stack development",
      "AI integrations",
      "Web development"
    ]
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