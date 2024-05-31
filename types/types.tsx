//Products page
export interface Product {
  quantity?: number;
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
  image?: string;
  images: string[];
}
export interface CeckoutPageProduct {
  quantity: number;
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  image: string;
}

export interface CheckoutObject {
  product: CeckoutPageProduct[];
  quantity: number;
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  image: string;
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

export interface SelectedProduct {
  id: number;
  product: Product;
  count: number;
}
export interface SelectedProducts {
  id: number;
  products: Product;
  quantity: number;
}

export type ProductQuantityMap = {
  [productid: number]: number;
};

export interface CartItem {
  id: number;
  userid: number;
  productid: number;
  quantity: number;
  createdat: string;
}

export interface Props {
  product: CeckoutPageProduct;
  productId: number;
  initialQuantity: number;
}

export interface Righteous {
  className: string;
}
