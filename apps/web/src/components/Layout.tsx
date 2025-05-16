'use client'
import Link from 'next/link';
import dynamic from 'next/dynamic';

const CartIcon = dynamic(() => import('./CartIcon'), { ssr: false })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="sticky top-0 z-50 bg-white shadow">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Rent A Chair
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/products" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Products
            </Link>
            <CartIcon />
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}