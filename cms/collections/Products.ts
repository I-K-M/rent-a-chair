const Products = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
    group: 'E-commerce',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      hasMany: true,
      relationTo: 'categories',
    },
    {
      name: 'stock',
      type: 'number',
      required: true,
    },
  ],
};
export default Products;