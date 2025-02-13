export interface Products {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  images: string[]; // Ändrat från string till string[] eftersom API:et returnerar en array
  thumbnail: string;
  reviews: Reviews[];
}

export interface Reviews {
  rating: number;
  comment: string;
  reviewerName: string;
  date: string;
}
