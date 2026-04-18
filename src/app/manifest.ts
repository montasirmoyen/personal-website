import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Montasir Moyen",
    short_name: "Montasir",
    description:
      "Portfolio of Montasir Moyen, a software engineer building web apps, AI integrations, and games.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    lang: "en-US",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/mm-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
