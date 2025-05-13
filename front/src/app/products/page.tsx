import Image from 'next/image';
import Link from 'next/link';
import { fetchProducts } from '@/lib/api';
import { Product } from '@/types/product';

export default async function Products() {
  const { data: products } = await fetchProducts();

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product: Product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${product.attributes.image.data.attributes.url}`}
                  alt={product.attributes.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{product.attributes.title}</h2>
                <p className="text-gray-600 mb-4">{product.attributes.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-blue-600 font-bold">${product.attributes.price}/day</p>
                  <Link
                    href={`/products/${product.attributes.slug}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}