'use client'

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

import { useEffect } from 'react'
import { useCartStore } from "@/lib/store/cart-store"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const initCart = useCartStore((state) => state.initCart)

  useEffect(() => {
    initCart()
  }, [initCart])

  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
