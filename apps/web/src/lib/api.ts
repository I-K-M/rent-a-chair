export async function fetchProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=*`, {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export async function fetchProductBySlug(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`,
    {
      cache: 'no-store'
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }

  return res.json();
}

export async function fetchCart(userId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/carts?filters[userId][$eq]=${userId}&populate=*`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch cart');
  }

  return res.json();
}

export async function addToCart(userId: string, productId: string, quantity: number = 1) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/carts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        userId,
        productId,
        quantity,
      },
    }),
  });
  
  if (!res.ok) {
    throw new Error('Failed to add to cart');
  }
  
  return res.json();
}

export async function removeFromCart(cartId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/carts/${cartId}`, {
    method: 'DELETE',
  });
  
  if (!res.ok) {
    throw new Error('Failed to remove from cart');
  }
  
  return res.json();
}

export async function updateCart(cartId: string, quantity: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/carts/${cartId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        quantity,
      },
    }),
  });
  
  if (!res.ok) {
    throw new Error('Failed to update cart');
  }
  
  return res.json();
}