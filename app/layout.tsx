import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import BookingProvider from "@/components/BookingProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const siteUrl = "https://luxecc.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Luxe Construction & Consultancy | Construction Company in Chennai",
    template: "%s | Luxe Construction & Consultancy",
  },

  description:
    "Luxe Construction & Consultancy is a Chennai-based construction and project management consultancy offering residential and commercial construction, turnkey design and build, interior design, home renovation and project management services.",

  applicationName: "Luxe Construction & Consultancy",

  generator: "Next.js",

  keywords: [
    "construction company in Chennai",
    "construction consultancy in Chennai",
    "construction consultant Chennai",
    "building construction Chennai",
    "residential construction Chennai",
    "commercial construction Chennai",
    "turnkey construction Chennai",
    "turnkey design and build Chennai",
    "home construction Chennai",
    "home renovation Chennai",
    "interior design Chennai",
    "project management consultancy Chennai",
    "construction project management Chennai",
    "Luxe Construction",
    "Luxe Construction Consultancy",
  ],

  authors: [
    {
      name: "Luxe Construction & Consultancy",
      url: siteUrl,
    },
  ],

  creator: "Luxe Construction & Consultancy",

  publisher: "Luxe Construction & Consultancy",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: siteUrl,

    siteName: "Luxe Construction & Consultancy",

    title:
      "Luxe Construction & Consultancy | Construction Company in Chennai",

    description:
      "Premium construction, project management, turnkey design and build, interior design and renovation solutions in Chennai.",

    images: [
      {
        url: "/images/seo/luxe-og.jpg",

        width: 1200,
        height: 630,

        alt:
          "Luxe Construction & Consultancy - Construction and Project Management Consultancy in Chennai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Luxe Construction & Consultancy | Construction Company in Chennai",

    description:
      "Construction, project management, turnkey design and build, interiors and renovation solutions by Luxe Construction & Consultancy.",

    images: ["/images/seo/luxe-og.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
      },
    ],
  },

  category: "construction",
};

export const viewport: Viewport = {
  width: "device-width",

  initialScale: 1,

  maximumScale: 5,

  viewportFit: "cover",

  themeColor: "#0b0b0a",

  colorScheme: "dark",
};


/* =========================================================
   STRUCTURED DATA
========================================================= */

const organizationSchema = {
  "@context": "https://schema.org",

  "@type": "Organization",

  "@id": `${siteUrl}/#organization`,

  name: "Luxe Construction & Consultancy",

  url: siteUrl,

  logo: `${siteUrl}/images/luxe-logo.png`,

  description:
    "Luxe Construction & Consultancy provides construction, project management, design management and consulting services for residential and commercial projects.",

  telephone: "+91 98898 86440",

  email: "enquiry@luxecc.in",

  address: {
    "@type": "PostalAddress",

    streetAddress:
      "12/20, 17th E St, Kamaraj Nagar, Thiruvanmiyur, ",

    addressLocality: "Chennai",

    postalCode: "600041",

    addressRegion: "Tamil Nadu",

    addressCountry: "IN",
  },

  areaServed: {
    "@type": "City",

    name: "Chennai",
  },

  sameAs: [
    "https://www.linkedin.com/company/luxe-construction-consulting/",
    "https://www.instagram.com/luxe_construction_company/",
    "https://twitter.com/consulting_luxe",
    "https://www.facebook.com/Luxe-Construction-Consulting-100367949229841/",
  ],
};


const localBusinessSchema = {
  "@context": "https://schema.org",

  "@type": "ConstructionCompany",

  "@id": `${siteUrl}/#localbusiness`,

  name: "Luxe Construction & Consultancy",

  url: siteUrl,

  image: `${siteUrl}/images/seo/luxe-og.jpg`,

  logo: `${siteUrl}/images/luxe-logo.png`,

  telephone: "+91 98898 86440",

  email: "enquiry@luxecc.in",

  priceRange: "$$",

  address: {
    "@type": "PostalAddress",

    streetAddress:
      "12/20, 17th E St, Kamaraj Nagar, Thiruvanmiyur",

    addressLocality: "Chennai",

    addressRegion: "Tamil Nadu",

    postalCode: "600041",

    addressCountry: "IN",
  },

  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",

    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],

    opens: "09:00",

    closes: "18:00",
  },

  areaServed: {
    "@type": "City",

    name: "Chennai",
  },

  knowsAbout: [
    "Residential Construction",
    "Commercial Construction",
    "Turnkey Design and Build",
    "Project Management Consultancy",
    "Interior Design",
    "Home Renovation",
    "Construction Management",
    "Design Management",
  ],

  sameAs: [
    "https://www.linkedin.com/company/luxe-construction-consulting/",
    "https://www.instagram.com/luxe_construction_company/",
    "https://twitter.com/consulting_luxe",
    "https://www.facebook.com/Luxe-Construction-Consulting-100367949229841/",
  ],
};


/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>

        {/* Organization Schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Local Business Schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

      </head>

      <body>

        {children}

        <BookingProvider />

      </body>
    </html>
  );
}