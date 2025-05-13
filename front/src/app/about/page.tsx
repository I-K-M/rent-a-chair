import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">About Rent A Chair</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            We're passionate about providing exceptional chair rental services for every occasion,
            from corporate events to intimate gatherings.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image
                src="/images/AGENCY-light.webp"
                alt="Our Story"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2020, Rent A Chair began with a simple mission: to provide high-quality,
                designer chairs for events and spaces across the city. What started as a small
                collection has grown into a comprehensive selection of premium seating options.
              </p>
              <p className="text-gray-300">
                Today, we serve hundreds of clients annually, from event planners to photographers,
                helping them create the perfect atmosphere for their needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-600">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-600">Quality First</h3>
              <p className="text-gray-600">
                We maintain the highest standards in our chair selection and maintenance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-600">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We go above and beyond to meet your needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-600">Reliability</h3>
              <p className="text-gray-600">
                Count on us for timely delivery and professional service, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4">
                <Image
                  src="/images/CLIENT.webp"
                  alt="Team Member"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-200">John Smith</h3>
              <p className="text-gray-300">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4">
                <Image
                  src="/images/CLIENT.webp"
                  alt="Team Member"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-200">John Smith</h3>
              <p className="text-gray-300">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4">
                <Image
                  src="/images/CLIENT.webp"
                  alt="Team Member"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-200">John Smith</h3>
              <p className="text-gray-300">Founder & CEO</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}