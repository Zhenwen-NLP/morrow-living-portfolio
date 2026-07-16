import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Morrow — A childhood worth growing into",
  description: "A living portfolio for a more curious, creative and human childhood.",
  openGraph: {
    title: "Morrow — A childhood worth growing into",
    description: "A living portfolio for a more curious, creative and human childhood.",
    type: "website",
    images: [{ url: "/og.png", width: 1792, height: 1024, alt: "Morrow — A childhood worth growing into" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morrow — A childhood worth growing into",
    description: "A living portfolio for a more curious, creative and human childhood.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
