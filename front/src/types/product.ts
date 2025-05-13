export interface Product {
  id: number;
  attributes: {
    title: string;
    description: string;
    price: number;
    slug: string;
    category: string;
    available: boolean;
    image: {
      data: {
        attributes: {
          url: string;
        }
      }
    }
    createdAt: string;
    updatedAt: string;
  }
}