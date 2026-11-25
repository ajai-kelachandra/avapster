import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = localFont({
  src: "../../public/fonts/inter-latin.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "300 700",
});

const serif = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#faf8f7",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "AVAPSTER Technologies | Software Development & IT Solutions",
  description:
    "AVAPSTER Technologies delivers innovative software development, web and mobile applications, cloud transformation and AI-powered technology solutions. Five minds. One vision. Infinite possibilities.",
  keywords: [
    "AVAPSTER Technologies",
    "IT Services & Consulting",
    "Software Development",
    "Web and Mobile Applications",
    "Cloud & Digital Transformation",
    "AI & Technology Solutions",
    "Enterprise Tech Partner",
  ],
  authors: [{ name: "AVAPSTER Technologies" }],
  creator: "AVAPSTER Technologies",
  publisher: "AVAPSTER Technologies",
  metadataBase: new URL("https://avapster.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AVAPSTER Technologies | Software Development & IT Solutions",
    description:
      "We transform ambitious ideas into intelligent digital experiences through innovation, technology and collaboration.",
    url: "https://avapster.com",
    siteName: "AVAPSTER Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logos/avapster-logo.svg",
        width: 1200,
        height: 630,
        alt: "AVAPSTER Technologies - Five Minds. One Vision. Infinite Possibilities.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AVAPSTER Technologies | Software Development & IT Solutions",
    description:
      "Five minds. One vision. Infinite possibilities. Innovative software, cloud, and AI engineering.",
    images: ["/logos/avapster-logo.svg"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AVAPSTER Technologies",
    alternateName: "AVAPSTER",
    url: "https://avapster.com",
    logo: "https://avapster.com/logos/avapster-logo.svg",
    description:
      "AVAPSTER Technologies is a technology-driven company focused on building innovative digital solutions that help businesses grow, transform and succeed.",
    slogan: "Five minds. One vision. Infinite possibilities.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9633162989",
        email: "ppk2600@gmail.com",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi", "Malayalam"],
      },
    ],
    sameAs: ["https://www.linkedin.com/company/avapster"],
    knowsAbout: [
      "IT Services & Consulting",
      "Software Development",
      "Web & Mobile Application Development",
      "Cloud & Digital Transformation",
      "AI & Technology Solutions",
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${serif.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-paper font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
