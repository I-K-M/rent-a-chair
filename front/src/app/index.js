import Layout from '@/components/Layout';
import { getProducts } from '@/lib/api';

export default function Home({ products }) {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products?.data?.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <h2 className="text-xl font-bold">{product.attributes.title}</h2>
            <p className="text-gray-600">{product.attributes.description}</p>
            <p className="text-lg font-bold mt-2">
              ${product.attributes.price}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const products = await getProducts();
    return {
      props: {
        products,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        products: null,
      },
    };
  }
}