import type { Metadata } from "next";

import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Projects | Construction & Design Projects in Chennai",

  description:
    "Explore Luxe Construction & Consultancy's residential, commercial, interior and construction projects in Chennai. Discover our approach to quality, design and project delivery.",

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    title: "Projects | Luxe Construction & Consultancy",
    description:
      "Explore construction, interior and design projects delivered by Luxe Construction & Consultancy in Chennai.",
    url: "https://luxecc.in/projects",
    siteName: "Luxe Construction & Consultancy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Projects | Luxe Construction & Consultancy",
    description:
      "Explore Luxe's residential, commercial, construction and design projects in Chennai.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="projects-page" id="main-content">
        {/* Projects Showcase */}
        <section
          id="projects-showcase"
          aria-labelledby="projects-heading"
        >
          <Projects />
        </section>

        {/* Project Enquiry CTA */}
        <section
          id="projects-cta"
          aria-label="Start your construction project with Luxe"
        >
          <CTA />
        </section>
      </main>

      <Footer />
    </>
  );
}