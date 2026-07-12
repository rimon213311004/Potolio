import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Md Raihan Rimon — Full-Stack MERN Developer",
  description:
    "Portfolio of Md Raihan Rimon — Full-Stack MERN & Next.js developer and Project Management Executive. Building modern, real-time web applications.",
  keywords: [
    "Md Raihan Rimon",
    "MERN Stack Developer",
    "Next.js",
    "React Developer",
    "Full Stack Developer",
    "Bangladesh Developer",
  ],
  authors: [{ name: "Md Raihan Rimon" }],
  openGraph: {
    title: "Md Raihan Rimon — Full-Stack MERN Developer",
    description:
      "Full-Stack MERN & Next.js developer building modern, real-time web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
