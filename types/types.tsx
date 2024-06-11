//Products page

export interface Product {
  quantity: number;
  product_id: number;
  title: string;
  description: string;
  price: string;
  discount: string;
  image: string;
  created_at?: string;
}
export interface CheckoutProduct {
  quantity: number;
  id: number;
  title: string;
  description: string;
  price: string;
  discount: string;
  image: string;
}

export interface BlogObject {
  result: Product[];
}

export interface HeaderProps {
  locale?: string;
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
  product: CheckoutProduct;
  initialQuantity: number;
  productId: number;
}

export interface Righteous {
  className: string;
}

export interface Params {
  id: string;
}
