import type { Metadata } from "next";

const siteUrl = "https://www.montasirmoyen.com";
const siteName = "Montasir Moyen";
const defaultTitle = "Montasir Moyen - Software Engineer - Boston";
const defaultDescription =
  "Software engineer in Boston building web apps, AI integrations, and games. Explore projects, development blogs, and engineering case studies.";

const mm_metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  authors: [{ name: "Montasir Moyen", url: siteUrl }],
  creator: "Montasir Moyen",
  publisher: "Montasir Moyen",
  category: "technology",
  referrer: "origin-when-cross-origin",
  title: {
    default: defaultTitle,
    template: "%s | Montasir Moyen",
  },
  description: defaultDescription,
  keywords: [
    "Montasir Moyen",
    "Montasir",
    "Moyen",
    "bangladeshi software developer",
    "software engineer",
    "software developer",
    "software developer Boston",
    "software engineer Boston",
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
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/mm-logo.png",
        width: 512,
        height: 512,
        alt: "Montasir Moyen Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    creator: "@montasirmoyen",
    images: ["/mm-logo.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/favicon.ico" }],
  },
  manifest: "/manifest.webmanifest",
};

export default mm_metadata;