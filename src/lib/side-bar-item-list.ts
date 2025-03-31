export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const sideBarItemList: { name: string; items: Item[] }[] = [
  {
    name: 'Layouts',
    items: [
      {
        name: 'Multiple Types',
        slug: 'layouts',
        description: 'Organize routes without affecting URL paths',
      },
      {
        name: 'Dynamic Routes (SSR)',
        slug: 'users',
        description: 'Dynamic routes with user profiles page',
      },
    ],
  },
];
