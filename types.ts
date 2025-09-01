export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

export type NewProductData = Omit<Product, 'id'>;

export interface CartItem extends Product {
  quantity: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
  content: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface Promotion {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  code: string;
}

export interface NavLink {
  path: string;
  label: string;
}