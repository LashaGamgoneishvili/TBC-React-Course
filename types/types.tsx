//Products page
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface BlogObject {
  products: Product[];
}

export interface HeaderProps {
  translator: any; // Adjust the type based on your translator type
  resources: any; // Adjust the type based on your resources type
  locale?: string;
  namespaces: string[];
}

export interface Person {
  name: string;
  surname: string;
  mail: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}
