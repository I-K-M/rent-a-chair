import type { Metadata } from "next";
import { Inter, Inter as InterMono } from "next/font/google";
import "./globals.css";
import Layout from '../components/Layout';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interMono = InterMono({
  variable: "--font-inter-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rent A Chair",
  description: "Rent A Chair E-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${interMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
