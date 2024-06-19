interface CheckoutProduct {
  quantity: number;
  id: number;
  title: string;
  description: string;
  price: string;
  discount: string;
  image: string;
}

//Products page

interface Product {
  quantity: number;
  product_id: number;
  title: string;
  description: string;
  price: string;
  discount: string;
  image: string;
  created_at?: string;
}

interface BlogObject {
  result: Product[];
}

interface GetSessionUser {
  email?: string;
  email_verified?: boolean;
  name?: string;
  nickname?: string;
  picture?: string;
  role?: string[];
  sid?: string;
  sub: string;
  updated_at?: string;
  role: string[];
}
// interface GetSessionUser {
//   email: string;
//   email_verified: boolean;
//   name: string;
//   nickname: string;
//   picture: string;
//   sub: string;
//   updated_at: string;
//   role: string[];
// }

interface BlogTypes {
  blog_id: number;
  title: string;
  description: string;
  detailed_description: string;
  comment: {
    [key: string]: string;
  };
  image: string;
  time: string;
  created_at: number;
}

interface BlogPageObject {
  result: BlogTypes[];
}

interface HeaderProps {
  locale?: string;
}

interface User {
  sub: number;
  name: string;
  email: string;
  age: number;
  picture?: string;
}

interface DatabaseUser {
  user_id: string;
  name: string;
  lastname: string;
  email: string;
  image: string;
  created_at: string;
}

interface SelectedProduct {
  id: number;
  product: Product;
  count: number;
}
interface SelectedProducts {
  id: number;
  products: Product;
  quantity: number;
}

type ProductQuantityMap = {
  [productid: number]: number;
};

interface CartItem {
  id: number;
  userid: number;
  productid: number;
  quantity: number;
  createdat: string;
}

interface Props {
  setTotal: any;
  product: CheckoutProduct;
}

interface Righteous {
  className: string;
}

interface Params {
  id: string;
}
