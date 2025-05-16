'use client'
import { useCartStore } from "@/lib/store/cart-store"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, isLoading } = useCartStore()

  if (!cart || !cart.items?.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <p className="text-gray-500 mt-2">Add some items to get started</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 gap-6">
        {cart.items.map((item: any) => (
          <div key={item.id} className="flex gap-4 border p-4 rounded-lg">
            <div className="w-24 h-24 bg-gray-100 rounded-md">
              {/* Add image here if available */}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-500">{item.variant?.title}</p>
              <div className="flex items-center gap-4 mt-2">
                <select
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  disabled={isLoading}
                  className="border rounded p-1"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => removeFromCart(item.id)}
                  disabled={isLoading}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="text-right">
              {/* Format price */}
              <p className="font-semibold">{(item.unit_price / 100).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 border-t pt-6">
        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          {/* Format total */}
          <span>{(cart.total / 100).toFixed(2)}</span>
        </div>
        <button className="w-full mt-4 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}