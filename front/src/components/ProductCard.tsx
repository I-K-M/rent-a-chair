import Image from 'next/image';

export default function ProductCart(props: { name: string; image: string; description: string; price: string }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={props.image}
                  alt={props.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-600">{props.name}</h3>
                <p className="text-gray-600 mb-4">{props.description}</p>
                <p className="text-orange-600 font-bold">{props.price}</p>
              </div>
            </div>          
    );
}