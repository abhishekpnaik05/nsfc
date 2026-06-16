import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nithya Sri Fashion Culture | Premium Ladies Tailoring & Designer Blouse Stitching in Bangalore",
  description: "Expert ladies tailoring, designer blouse stitching, bridal wear, Aari work, Maggam work, and custom embroidery by Nagesh in Bangalore. Premium quality with perfect fit guarantee. 7+ years of experience, 500+ happy customers.",
  keywords: [
    "Ladies Tailor Near Me",
    "Designer Blouse Stitching",
    "Bridal Blouse Designer",
    "Aari Work",
    "Maggam Work",
    "Boutique Tailoring",
    "Custom Stitching",
    "Bridal Wear Designer",
    "Fashion Designer",
    "Tailor in Bangalore",
    "Blouse Stitching",
    "Hand Embroidery",
  ],
  authors: [{ name: "Nagesh" }],
  openGraph: {
    title: "Nithya Sri Fashion Culture | Premium Ladies Tailoring in Bangalore",
    description: "Expert ladies tailoring and designer blouse stitching with premium quality. Bridal wear, Aari work, Maggam work, and custom embroidery.",
    type: "website",
    locale: "en_US",
    siteName: "Nithya Sri Fashion Culture",
    url: "https://nithyasrifashion.com",
    images: [
      {
        url: "/media/logo/nsf-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Nithya Sri Fashion Culture - Premium Ladies Tailoring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nithya Sri Fashion Culture | Premium Ladies Tailoring",
    description: "Expert ladies tailoring and designer blouse stitching with premium quality",
    images: ["/media/logo/nsf-logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Nithya Sri Fashion Culture",
              description: "Premium ladies tailoring and designer blouse stitching in Bangalore",
              url: "https://nithyasrifashion.com",
              telephone: "+918892300449",
              email: "nithyasrifashion@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
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
                opens: "10:00",
                closes: "20:00",
              },
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "500",
              },
            }),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${cormorant.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
