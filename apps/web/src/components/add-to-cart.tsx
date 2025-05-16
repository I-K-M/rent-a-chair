import { useCartStore } from "@/lib/store/cart-store"

export function AddToCart({ variantId }: { variantId: string }) {
  const { addToCart, isLoading } = useCartStore()

  return (
    <button
      onClick={() => addToCart(variantId, 1)}
      disabled={isLoading}
      className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
    >
      {isLoading ? 'Adding...' : 'Add to Cart'}
    </button>
  )
}