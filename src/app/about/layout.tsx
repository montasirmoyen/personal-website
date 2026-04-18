import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About - Montasir Moyen",
  },
  description:
    "Learn about Montasir Moyen, a software engineer in Boston focused on web apps, AI integrations, and game development.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
