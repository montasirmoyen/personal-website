import type { Metadata } from "next";
import { getBlogBySlug } from "@/lib/projects";

interface BlogSlugLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogSlugLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: {
        absolute: "Blog - Montasir Moyen",
      },
      alternates: {
        canonical: "/blog",
      },
    };
  }

  return {
    title: {
      absolute: `${blog.title} - Montasir Moyen`,
    },
    description: blog.description,
    alternates: {
      canonical: `/blog/${blog.slug}`,
    },
    openGraph: {
      title: `${blog.title} Blog`,
      description: blog.description,
      url: `/blog/${blog.slug}`,
      type: "article",
      images: blog.image ? [{ url: blog.image, alt: blog.title }] : undefined,
    },
  };
}

export default function BlogSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
