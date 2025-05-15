import { useEffect, useState } from 'react';
import { fetchCart, addToCart, removeFromCart, updateCart } from '@/lib/api';

interface CartItem {
  id: string;
  attributes: {
    product: {
      id: string;
      name: string;
      price: number;
    };
    quantity: number;
  };
}

interface CartAttributes {
  items: CartItem[];
}

interface CartData {
  data: {
    id: string;
    attributes: CartAttributes;
  };
}

interface Product {
  id: string;
  attributes: {
    name: string;
    price: number;
  };
}

const Cart = ({ userId }: { userId: string }) => {
  const [cart, setCart] = useState<CartData | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const userCart = await fetchCart(userId);
        setCart(userCart);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cart:', error);
        setLoading(false);
      }
    };
    loadCart();
  }, [userId]);

  const handleAddToCart = async (productId: string) => {
    try {
      await addToCart(userId, productId, 1);
      const updatedCart = await fetchCart(userId);
      setCart(updatedCart);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleRemoveFromCart = async (cartItemId: string) => {
    try {
      await removeFromCart(cartItemId);
      const updatedCart = await fetchCart(userId);
      setCart(updatedCart);
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const handleQuantityChange = async (cartItemId: string, newQuantity: number) => {
    try {
      await updateCart(cartItemId, newQuantity);
      const updatedCart = await fetchCart(userId);
      setCart(updatedCart);
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!cart?.data?.attributes?.items?.length) {
    return (
      <div className="p-4">
        <h2>Votre panier est vide</h2>
        <button 
          onClick={() => handleAddToCart("1")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Ajouter un produit
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2>Panier</h2>
      {cart?.data?.attributes?.items?.map((item) => (
        <div key={item.id} className="border-b pb-4 mb-4">
          <h3>{item.attributes.product.name}</h3>
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <button 
                onClick={() => handleQuantityChange(item.id, item.attributes.quantity - 1)}
                disabled={item.attributes.quantity <= 1}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <span>{item.attributes.quantity}</span>
              <button 
                onClick={() => handleQuantityChange(item.id, item.attributes.quantity + 1)}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
            <button 
              onClick={() => handleRemoveFromCart(item.id)}
              className="text-red-500"
            >
              Retirer
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Procéder au paiement
        </button>
      </div>
    </div>
  );
};

export default Cart;
