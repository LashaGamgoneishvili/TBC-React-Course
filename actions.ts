"use server";
import {
  BASE_URL,
  deleteAllBlogs,
  deleteBlog,
  createUserAdmin,
  createUserLogin,
  deleteProduct,
  deleteUser,
  getAllBlog,
  getUser,
  updateBlog,
  updateComment,
  updateProduct,
  updateUser,
  uploadNewBlog,
} from "./app/api/api";
// import { cookies } from "next/headers";
import { addCart } from "./app/api/api";
import { getCart } from "./app/api/api";
import { emptyCart } from "./app/api/api";
import { revalidatePath } from "next/cache";
import { getSession } from "@auth0/nextjs-auth0";
import { getAllProduct } from "./app/api/api";
import { getProduct } from "./app/api/api";
import { createProductAdmin } from "./app/api/api";

export async function createUserActionAdmin(formData: FormData) {
  revalidatePath(`${BASE_URL}/user`);

  const name = formData.get("name");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const image = formData.get("image");
  const id = formData.get("id");

  createUserAdmin(
    name as string,
    lastName as string,
    email as string,
    image as string,
    id as string
  );
}
export async function createProductActionAdmin(formData: FormData) {
  revalidatePath(`${BASE_URL}/user`);
  const title = formData.get("title");
  const description = formData.get("description");
  const price = formData.get("price");
  const discount = formData.get("discount");
  const image = formData.get("image");
  // const id = formData.get("id");

  createProductAdmin(
    title as string,
    description as string,
    price as string,
    discount as string,
    image as string
    // id as string
  );
}

export async function createUserAction() {
  const session = await getSession();
  const user = session?.user;
  if (user) {
    createUserLogin();
  }
}

export async function updateUserAction(formData: FormData) {
  const name = formData.get("name");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const id = formData.get("id");
  const image = formData.get("image");

  updateUser(
    name as string,
    lastName as string,
    email as string,
    id as string,
    image as string
  );
}

export async function updateProductAction(formData: FormData) {
  const description = formData.get("description");
  const title = formData.get("title");
  const price = formData.get("price");
  const discount = formData.get("discount");
  const productId = formData.get("ProductId");

  updateProduct(
    title as string,
    price as string,
    description as string,
    discount as string,
    productId as string
  );
}

export async function uploadNewBlogAction(formdata: FormData) {
  const title = formdata.get("title");
  const description = formdata.get("description");
  const detaildDescription = formdata.get("detaildDescription");
  const image = formdata.get("image");
  const time = formdata.get("time");
  const userId = formdata.get("userId");

  console.log(
    "title, description, detaildDescription, lastFiveCharacters, blogId",
    title,
    description,
    detaildDescription,
    image,
    time
  );

  uploadNewBlog(
    title as string,
    description as string,
    detaildDescription as string,
    image as string,
    time as string,
    userId as string
  );
}

export async function updateBlogAction(formData: FormData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const detaildDescription = formData.get("detaildDescription");
  // const comment = formData.get("comment");
  const time = formData.get("time");
  const blogId = formData.get("blogId");

  updateBlog(
    title as string,
    detaildDescription as string,
    description as string,
    // comment as string,
    time as string,
    blogId as string
  );
}
export async function updateBlogComment(formData: FormData) {
  const comment = formData.get("comment");
  const userId = formData.get("userId");
  const blogId = formData.get("blogId");

  return await updateComment(
    comment as string,
    userId as string,
    blogId as string
  );
}

export async function createOrder() {}

export async function deleteUserAction(id: string) {
  deleteUser(id);
}
export async function deleteProductAction(id: number) {
  deleteProduct(id);
}

export async function addCartFunction(productId: number) {
  "use server";
  const session = await getSession();
  const user = session?.user;
  const userId = user?.sub;
  addCart(userId, productId);
}

export async function getAllCartProduct() {
  const session = await getSession();
  if (!session) {
    throw new Error("No active session found.");
  }

  const user = session.user;
  if (!user || !user.sub) {
    throw new Error("User not found or user ID is missing.");
  }

  const id = user.sub;

  try {
    const product = await getCart(id);
    return product;
  } catch (error) {
    console.error("Error fetching cart products:", error);
    throw error;
  }
}

export async function cartCount() {
  "use server";
  const session = await getSession();
  if (!session) {
    throw new Error("No active session found.");
  }

  const user = session.user;
  if (!user || !user.sub) {
    throw new Error("User not found or user ID is missing.");
  }

  const id = user.sub;

  try {
    const products = await getCart(id);
    const count = products?.rows?.reduce((acc: number, curr: Product) => {
      return acc + curr.quantity;
    }, 0);
    return count;
  } catch (error) {
    console.error("Error fetching cart count:", error);
    throw error;
  }
}

export async function incrementItemAmount(productId: number) {
  const session = await getSession();
  const user = session?.user;
  const userId = user?.sub;
  const response = await fetch(`${BASE_URL}/api/cart/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: userId,
      productId: productId,
    }),
  });
  return await response.json();
}

export async function decrementCart(productId: number) {
  const session = await getSession();
  const user = session?.user;
  const userId = user?.sub;
  try {
    const response = await fetch(`${BASE_URL}/api/cart/decrement`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        productId: productId,
      }),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export async function singleDelete(userId: number, productId: number) {
  revalidatePath(`${BASE_URL}/checkout`);
  const response = await fetch(`${BASE_URL}/api/cart/remove`, {
    cache: "no-store",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: userId,
      productId: productId,
    }),
  });
  return await response.json();
}

export async function deleteAllItem() {
  "use server";
  const session = await getSession();
  const user = session?.user;
  const userId = user?.sub;

  emptyCart(userId);
}

export async function deleteSingleCartItem(productId: number) {
  // const userId = await getUserId();
  const session = await getSession();
  const user = session?.user;
  const userId = user?.sub;
  await singleDelete(userId, productId);
  revalidatePath(`${BASE_URL}/checkout`);
}

export async function getUserAction() {
  const session = await getSession();
  const user = session?.user;
  const userId = user?.sub;
  const id = userId.slice(-5);
  const userData = await getUser(id);
  return userData;
}

export async function getAllProductAction() {
  try {
    const product = await getAllProduct();
    return product;
  } catch (err) {
    console.error("Error in getAllProductAction:", err);
    throw err;
  }
}
export async function getAllBlogAction() {
  try {
    const blogs = await getAllBlog();
    return blogs;
  } catch (err) {
    console.error("Error in getAllProductAction:", err);
    throw err;
  }
}

export async function deleteBlogAction(blogId: number) {
  revalidatePath(`${BASE_URL}/blogs`);

  deleteBlog(blogId);
}

export async function deleteAllBlogsAction() {
  revalidatePath(`${BASE_URL}/blogs`);

  deleteAllBlogs();
}

export async function getProductAction(id: string) {
  const product = await getProduct(id);
  return product;
}
