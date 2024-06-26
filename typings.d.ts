import { string } from "zod";

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
  given_name?: string;
  family_name?: string;
  name?: string;
  nickname?: string;
  picture?: string;
  role?: string[];
  sid?: string;
  sub: string;
  updated_at?: string;
  role: string[];
}

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

// interface User {
//   sub: number;
//   name: string;
//   email: string;
//   age: number;
//   picture?: string;
// }

type User = {
  sub: string;
  name?: string;
  email?: string;
  picture?: string;
  role: string[];
};

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

// interface ShippingTypes {
//   user_id: string;
//   product_id: string;
//   quantity: number;
//   id: number;
//   title: string;
//   description: string;
//   price: string;
//   discount: string;
//   image: string;
// }
interface ShippingTypes {
  user_id: string;
  product_id: string;
  quantity: number;
  id: number;
  title: string;
  description: string;
  price: string;
  discount: string;
  image: string;
  product_image: string;
  user_name: string;
  user_lastname: string;
  user_email: string;
  user_image: string;
}

type Data = {
  rows: ShippingTypes;
};

interface Params {
  id: string;
}

interface CreateUserResult {
  name: string;
  lastName: string;
  email: string;
  id: string;
  image: string;
}
interface ProductResult {
  title: string;
  description: string;
  price: string;
  discount?: string;
  image?: string;
  id?: string;
}
interface BlogType {
  title: string;
  description: string;
  detaildDescription: string;
  image?: string;
  time: string;
  userId?: string;
}

type StickyHeaderProps = {
  translations: {
    home: string;
    shop: string;
    about: string;
    latest: string;
    blog: string;
    pages: string;
    contact: string;
    productList: string;
    productDetails: string;
    blob: string;
    blogDetails: string;
    login: string;
    cart: string;
    element: string;
    confirmation: string;
    productCheckout: string;
  };
};

interface AllCommentType {
  comment_id: number;
  comment_text: string;
  created_at: string;
  user_id: string;
  name: string;
  lastname: string;
  image: string;
}
