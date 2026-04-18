import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Projects - Montasir Moyen",
  },
  description:
    "Explore software projects by Montasir Moyen, including AI applications, full-stack products, and game development work.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
