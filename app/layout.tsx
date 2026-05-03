import type { Metadata, Viewport } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "SafeAI — EU AI Act Compliance for Irish Small Businesses, Schools, and Community Organisations",
  description: "Practical AI training and EU AI Act compliance for Irish SMEs, schools, and community organisations. Cork-based. Free Irish SME AI Risk Checklist.",
  openGraph: {
    title: "SafeAI — EU AI Act Compliance for Irish Small Businesses, Schools, and Community Organisations",
    description: "Practical AI training and EU AI Act compliance for Irish SMEs, schools, and community organisations. Cork-based. Free Irish SME AI Risk Checklist.",
    type: "website",
    locale: "en_IE",
    url: "https://safeai.ie",
    siteName: "SafeAI",
    images: [
      {
        url: "/safeai-logo.png",
        width: 1200,
        height: 630,
        alt: "SafeAI - AI Training & Compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeAI — EU AI Act Compliance for Irish Small Businesses, Schools, and Community Organisations",
    description: "Practical AI training and EU AI Act compliance for Irish SMEs, schools, and community organisations. Cork-based.",
  },
};

export const viewport: Viewport = {
  themeColor: "#1B9AAA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
