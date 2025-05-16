import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Head>
        <title>Rent A Chair</title>
        <meta name="description" content="Rent A Chair E-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex items-center text-2xl font-bold text-gray-800">
                Rent A Chair
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/products" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Products
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <Link href="/cart" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Cart
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button className="text-gray-600 hover:text-gray-900">
                Menu
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>

      <footer className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-gray-500">
            2024 Rent A Chair. All rights reserved.
          </p>
        </div>
      </footer>
    </Fragment>
  );
}