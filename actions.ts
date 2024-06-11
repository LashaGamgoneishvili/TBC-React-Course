"use server";
import {
  BASE_URL,
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "./app/api/api";
// import { cookies } from "next/headers";
import { addCart } from "./app/api/api";
import { getCart } from "./app/api/api";
import { emptyCart } from "./app/api/api";
import { revalidatePath } from "next/cache";
import { getSession } from "@auth0/nextjs-auth0";
import { getAllProduct } from "./app/api/api";
import { getProduct } from "./app/api/api";
import { Product } from "./types/types";

// export async function createUserAction(formData: FormData) {
//   const name = formData.get("name");
//   const email = formData.get("email");
//   const age = formData.get("age");

//   createUser(name as string, email as string, age as string);
// }

export async function createUserAction() {
  const session = await getSession();
  const user = session?.user;
  if (user?.email_verified) {
    createUser();
  } else {
    createUser();
  }
}

export async function updateUserAction(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const lastName = formData.get("lastName");
  const session = await getSession();
  const user = session?.user;
  const userId = user?.sub;
  const id = userId.slice(-5);

  updateUser(name as string, lastName as string, email as string, id as string);
}

export async function deleteUserAction(id: string) {
  await deleteUser(id);
}

export async function addChartFunction(productId: number) {
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
    console.log("product-getcart:", products);
    const count = products?.rows?.reduce((acc: number, curr: Product) => {
      return acc + curr.quantity;
    }, 0);
    console.log("count-count", count);
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

export async function getProductAction(id: string) {
  const product = await getProduct(id);
  return product;
}
