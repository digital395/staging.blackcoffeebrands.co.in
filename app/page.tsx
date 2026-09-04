import type { Metadata } from "next";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Metrics from "@/components/Metrics/Metrics";
import ValueProposition from "@/components/ValueProposition/ValueProposition";
import ServicesOverview from "@/components/ServicesOverview/ServicesOverview";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Construction Company in Chennai | Luxe Construction & Consultancy",
  description:
    "Luxe Construction & Consultancy is a Chennai-based construction and project management company offering home construction, renovation, interior design, turnkey design & build, commercial construction and project management consultancy.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Luxe Construction & Consultancy | Construction Company in Chennai",
    description:
      "Premium construction, turnkey design & build, interior design and project management solutions in Chennai.",
    url: "https://luxecc.in/",
    siteName: "Luxe Construction & Consultancy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxe Construction & Consultancy | Chennai",
    description:
      "Construction, interiors, turnkey design & build and project management consultancy in Chennai.",
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

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* Hero / Primary Introduction */}
        <section aria-label="Luxe Construction introduction">
          <Hero />
        </section>

        {/* Company Metrics */}
        <section
          id="company-metrics"
          aria-labelledby="company-metrics-heading"
        >
          <Metrics />
        </section>

        {/* Why Choose Luxe */}
        <section
          id="why-luxe"
          aria-labelledby="why-luxe-heading"
        >
          <ValueProposition />
        </section>

        {/* Construction Services */}
        <section
          id="services"
          aria-labelledby="services-heading"
        >
          <ServicesOverview />
        </section>

        {/* Contact / Lead Generation */}
        <section
          id="get-started"
          aria-label="Start your construction project with Luxe"
        >
          <CTA />
        </section>
      </main>

      <Footer />
    </>
  );
}