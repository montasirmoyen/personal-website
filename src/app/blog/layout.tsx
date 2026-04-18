import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blogs - Montasir Moyen",
  },
  description:
    "Read development blogs and engineering case studies by Montasir Moyen across AI, full-stack, and software projects.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
