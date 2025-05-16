import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import medusaClient from '../config/medusa-client'

export interface CartState {
  cart: any | null
  isLoading: boolean
  addToCart: (variantId: string, quantity: number) => Promise<void>
  removeFromCart: (lineId: string) => Promise<void>
  updateQuantity: (lineId: string, quantity: number) => Promise<void>
  initCart: () => Promise<void>
}
export interface CartItem {
    id: string
    qty: number
  }

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: null,
      isLoading: false,
      initCart: async () => {
        if (typeof window === 'undefined') return

        const existingCartId = localStorage.getItem('cart_id')
        if (existingCartId) {
          try {
            const { cart } = await medusaClient.carts.retrieve(existingCartId)
            set({ cart })
          } catch (error) {
            console.error("Cart init error:", error)
            localStorage.removeItem('cart_id')
          }
        }
      },

      addToCart: async (variantId, quantity) => {
        set({ isLoading: true })
        try {
          let cart
          if (get().cart?.id) {
            const response = await medusaClient.carts.lineItems.create(get().cart!.id, {
              variant_id: variantId,
              quantity,
            })
            cart = response.cart
          } else {
            const response = await medusaClient.carts.create({
              items: [{ variant_id: variantId, quantity }],
            })
            cart = response.cart
            if (typeof window !== 'undefined') {
              localStorage.setItem('cart_id', cart.id)
            }
          }
          set({ cart })
        } catch (error) {
          console.error("Add to cart error:", error)
        } finally {
          set({ isLoading: false })
        }
      },

      removeFromCart: async (lineId) => {
        const cart = get().cart
        if (!cart) return

        set({ isLoading: true })
        try {
          const response = await medusaClient.carts.lineItems.delete(cart.id, lineId)
          set({ cart: response.cart })
        } catch (error) {
          console.error("Remove from cart error:", error)
        } finally {
          set({ isLoading: false })
        }
      },

      updateQuantity: async (lineId, quantity) => {
        const cart = get().cart
        if (!cart) return

        set({ isLoading: true })
        try {
          const response = await medusaClient.carts.lineItems.update(cart.id, lineId,
            { quantity }
          )
          set({ cart: response.cart })
        } catch (error) {
          console.error("Update quantity error:", error)
        } finally {
          set({ isLoading: false })
        }
      },
    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({ cart: state.cart }), // ne stocke que le panier
    }
  )
)
