export type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  stock: number;
  availabilityStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
};

export const catalog: Product[] = [
  {
    id: 1,
    title: 'Essence Mascara Lash Princess',
    price: 9.99,
    thumbnail: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
    stock: 99,
    availabilityStatus: 'In Stock',
  },
  {
    id: 9,
    title: 'Dolce Shine Eau de',
    price: 69.99,
    thumbnail: 'https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp',
    stock: 4,
    availabilityStatus: 'Low Stock',
  },
  {
    id: 15,
    title: 'Wooden Bathroom Sink With Mirror',
    price: 799.99,
    thumbnail: 'https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp',
    stock: 7,
    availabilityStatus: 'Low Stock',
  },
  {
    id: 26,
    title: 'Green Chili Pepper',
    price: 0.99,
    thumbnail: 'https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp',
    stock: 3,
    availabilityStatus: 'Low Stock',
  },
  {
    id: 153,
    title: 'Volleyball',
    price: 11.99,
    thumbnail: 'https://cdn.dummyjson.com/product-images/sports-accessories/volleyball/thumbnail.webp',
    stock: 0,
    availabilityStatus: 'Out of Stock',
  },
];
