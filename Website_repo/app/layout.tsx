import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
  variable: "--font-lato"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bodiqo.com"),
  title: "BODIQO | Premium Wellness-Performance Memberships",
  description:
    "BODIQO is a premium wellness-performance membership ecosystem for individuals and institutes, built on coaching, technology, accountability, and high-touch systems.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "https://www.bodiqo.com",
    title: "BODIQO | Stronger systems. Better outcomes.",
    description:
      "Premium wellness-performance memberships for individuals and institutes through coaching, technology, nutrition guidance, and structured accountability.",
    siteName: "BODIQO",
    images: [
      {
        url: "/og/bodiqo-home-og.svg",
        width: 1200,
        height: 630,
        alt: "BODIQO premium wellness-performance homepage preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "BODIQO | Stronger systems. Better outcomes.",
    description:
      "Premium wellness-performance memberships for individuals and institutes through coaching, technology, and high-touch delivery.",
    images: ["/og/bodiqo-home-og.svg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} font-sans`}>{children}</body>
    </html>
  );
}
