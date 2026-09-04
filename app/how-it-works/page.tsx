import type { Metadata } from "next";

import Navbar from "@/components/Navbar/Navbar";
import HowItWorksHero from "@/components/HowItWorks/HowItWorksHero";
import ProcessSection from "@/components/HowItWorks/ProcessSection";
import CommunicationSection from "@/components/HowItWorks/CommunicationSection";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "How It Works | Construction Process | Luxe Chennai",

  description:
    "Discover how Luxe Construction & Consultancy manages your project from the initial consultation and design through construction, interiors, quality inspection and final delivery in Chennai.",

  alternates: {
    canonical: "/how-it-works",
  },

  openGraph: {
    title: "How It Works | Luxe Construction & Consultancy",
    description:
      "Explore Luxe's structured construction process, from consultation and design to construction, interiors, quality inspection and project completion.",
    url: "https://luxecc.in/how-it-works",
    siteName: "Luxe Construction & Consultancy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "How It Works | Luxe Construction & Consultancy",
    description:
      "See how Luxe manages construction projects from the first consultation to final delivery.",
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

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />

      <main className="how-page" id="main-content">
        {/* How It Works Hero */}
        <section aria-labelledby="how-it-works-title">
          <HowItWorksHero />
        </section>

        {/* Complete Project Process */}
        <section
          id="project-process"
          aria-labelledby="project-process-heading"
        >
          <ProcessSection />
        </section>

        {/* Communication & Project Tracking */}
        <section
          id="communication-tracking"
          aria-labelledby="communication-tracking-heading"
        >
          <CommunicationSection />
        </section>

        {/* Conversion / Enquiry CTA */}
        <section
          id="how-it-works-cta"
          aria-label="Start your project with Luxe"
        >
          <CTA />
        </section>
      </main>

      <Footer />
    </>
  );
}