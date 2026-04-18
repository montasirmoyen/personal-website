import type { Metadata } from "next";
import { getProjectBySlug } from "@/lib/projects";

interface ProjectSlugLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProjectSlugLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: {
        absolute: "Project - Montasir Moyen",
      },
      alternates: {
        canonical: "/projects",
      },
    };
  }

  return {
    title: {
      absolute: `${project.title} - Montasir Moyen`,
    },
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} Project`,
      description: project.description,
      url: `/projects/${project.slug}`,
      type: "website",
      images: project.image ? [{ url: project.image, alt: project.title }] : undefined,
    },
  };
}

export default function ProjectSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
