const Categories = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    group: 'E-commerce',
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
    },
  ],
};
export default Categories;