import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nina Mason | Software Engineer",
  description: "Portfolio showcasing full-stack development, UI design, and creative software projects.",
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-leaf text-forest`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
