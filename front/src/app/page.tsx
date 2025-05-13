import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '../components/ProductCard.jsx'
import Testimonial from '../components/Testimonial.jsx'
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Premium Chair Rentals for Every Occasion
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your space with our curated selection of designer chairs.
                Perfect for events, photoshoots, or temporary furnishing needs.
              </p>
              <Link 
                href="/products"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Browse Collection
              </Link>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/images/1.png"
                alt="Featured Chair"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Product Cards */}
            <ProductCard name="Classic Office Chair" image="/images/2.png" price="$25/day" />
            <ProductCard name="Modern Meeting Chair" image="/images/5.png" price="$15/day" />
            <ProductCard name="Modern Comfort Chair" image="/images/3.png" price="$45/day" />

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-600">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial name="Sarah Johnson" job="Event Planner" text="The chairs were perfect for our corporate event. The quality and service were exceptional!" />
            <Testimonial name="Boris James" job="Founder" text="The chairs were great for our corporate event. The quality and service were exceptional!" />
            <Testimonial name="Donald Kiefer" job="CEO" text="The chairs were perfect for our corporate event. The quality and service were exceptional!" />
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8">Get started with our premium chair rental service today.</p>
          <Link 
            href="/contact"
            className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}