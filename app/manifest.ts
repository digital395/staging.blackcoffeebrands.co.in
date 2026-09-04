import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Luxe Construction & Consultancy",

    short_name: "Luxe Construction",

    description:
      "Construction, project management, turnkey design and build, interior design and renovation solutions in Chennai.",

    start_url: "/",

    display: "standalone",

    background_color: "#080908",

    theme_color: "#0b0b0a",

    orientation: "portrait-primary",

    icons: [
      {
        src: "/favicon.ico",

        sizes: "any",

        type: "image/x-icon",
      },
    ],
  };
}