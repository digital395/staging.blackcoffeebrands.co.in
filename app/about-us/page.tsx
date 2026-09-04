import type { Metadata } from "next";

import Navbar from "@/components/Navbar/Navbar";
import AboutHero from "@/components/AboutHero/AboutHero";
import AboutStory from "@/components/AboutStory/AboutStory";
import AboutExperience from "@/components/AboutExperience/AboutExperience";
import AboutPromise from "@/components/AboutPromise/AboutPromise";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "About Luxe | Construction & Consultancy Company in Chennai",

  description:
    "Learn about Luxe Construction & Consultancy, a Chennai-based construction company with 22 years of experience in residential and commercial construction, project management, design and consultancy.",

  alternates: {
    canonical: "/about-us",
  },

  openGraph: {
    title: "About Luxe Construction & Consultancy | Chennai",
    description:
      "Discover Luxe Construction & Consultancy's experience, approach and commitment to quality construction, design and project delivery in Chennai.",
    url: "https://luxecc.in/about-us",
    siteName: "Luxe Construction & Consultancy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Luxe Construction & Consultancy",
    description:
      "22 years of construction, design and project management experience in Chennai.",
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

export default function AboutUsPage() {
  return (
    <>
      <Navbar />

      <main className="about-page" id="main-content">
        {/* About Hero */}
        <section aria-labelledby="about-page-title">
          <AboutHero />
        </section>

        {/* Company Story */}
        <section
          id="our-story"
          aria-labelledby="our-story-heading"
        >
          <AboutStory />
        </section>

        {/* Experience */}
        <section
          id="our-experience"
          aria-labelledby="our-experience-heading"
        >
          <AboutExperience />
        </section>

        {/* Company Promise */}
        <section
          id="our-promise"
          aria-labelledby="our-promise-heading"
        >
          <AboutPromise />
        </section>

        {/* Lead Generation */}
        <section
          id="about-cta"
          aria-label="Start your project with Luxe"
        >
          <CTA />
        </section>
      </main>

      <Footer />
    </>
  );
}