import type { Metadata } from "next";

import Navbar from "@/components/Navbar/Navbar";
import ContactHero from "@/components/Contact/ContactHero";
import ContactForm from "@/components/Contact/ContactForm";
import ContactDetails from "@/components/Contact/ContactDetails";
import ContactMap from "@/components/Contact/ContactMap";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Contact Luxe | Construction & Consultancy in Chennai",

  description:
    "Contact Luxe Construction & Consultancy in Chennai for home construction, renovation, interior design, turnkey design & build, commercial construction and project management consultancy.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Luxe Construction & Consultancy | Chennai",
    description:
      "Get in touch with Luxe Construction & Consultancy for construction, interiors, turnkey projects and project management services in Chennai.",
    url: "https://luxecc.in/contact",
    siteName: "Luxe Construction & Consultancy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Luxe Construction & Consultancy",
    description:
      "Talk to Luxe about your construction, interiors or project management requirements in Chennai.",
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

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="contact-page" id="main-content">
        {/* Contact Hero */}
        <section aria-labelledby="contact-page-title">
          <ContactHero />
        </section>

        {/* Enquiry Form */}
        <section
          id="contact-form"
          aria-labelledby="contact-form-heading"
        >
          <ContactForm />
        </section>

        {/* Contact Information */}
        <section
          id="contact-details"
          aria-labelledby="contact-details-heading"
        >
          <ContactDetails />
        </section>

        {/* Office Location */}
        <section
          id="office-location"
          aria-labelledby="office-location-heading"
        >
          <ContactMap />
        </section>
      </main>

      <Footer />
    </>
  );
}