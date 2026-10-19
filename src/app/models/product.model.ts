export type Review = {
  rating: number;
  comment: string;
  reviewerName: string;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  stock: number;
  availabilityStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  reviews?: Review[]; // absent dans la réponse d'un POST
};

// GET /products : la liste arrive rangée dans un objet
export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

// POST /products/add : ce que le formulaire envoie
export type NewProduct = Omit<Product, 'id' | 'thumbnail' | 'availabilityStatus'>;
