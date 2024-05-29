"use server";
import { BASE_URL, createUser, deleteUser, updateUser } from "./app/api/api";
// import { cookies } from "next/headers";
import { addCart } from "./app/api/api";
import { getCart } from "./app/api/api";
import { emptyCart } from "./app/api/api";
import { revalidatePath } from "next/cache";
import { getSession } from "@auth0/nextjs-auth0";
import { getUserId } from "./app/api/api";

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
    const id = user?.sub;
    const name = user?.given_name;
    const lastName = user?.family_name;
    const email = user?.email;
    const image = user?.picture;
    createUser(
      id as string,
      name as string,
      lastName as string,
      email as string,
      image as string
    );
  } else {
    const id = user?.sub;
    const name = "There is no Name";
    const lastName = "There is no lastName";
    const email = user?.email;
    const image = user?.picture;
    createUser(
      id as string,
      name as string,
      lastName as string,
      email as string,
      image as string
    );
  }
}

export async function updateUserAction(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const age = formData.get("age");
  const id = formData.get("id");

  updateUser(name as string, email as string, age as string, id as string);
}

export async function deleteUserAction(id: number) {
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
  const user = session?.user;
  const id = user?.sub;
  // const Cookiestore = cookies();
  // const cookie = Cookiestore.get("user")?.value;
  // const userId = JSON.parse(cookie ?? "");
  const productArr = await getCart(id);
  const product = await productArr.json();

  return product;
}

export async function cartCount() {
  "use server";
  // const Cookiestore = cookies();
  // const cookie = Cookiestore.get("user")?.value;
  // const userId = JSON.parse(cookie ?? "");
  // const userId = user.responseUser.id;
  const session = await getSession();
  const user = session?.user;
  const id = user?.sub;
  const productArr = await getCart(id);
  const product = await productArr.json();
  const count = product?.rows?.reduce((acc: number, curr: any) => {
    return acc + curr.quantity;
  }, 0);
  return count;
}

// async function getUserId() {
//   const Cookiestore = cookies();
//   const cookie = Cookiestore.get("user")?.value;
//   const userId = JSON.parse(cookie ?? "");
//   // const userId = user.responseUser.id;
//   return userId;
// }

export async function incrementItemAmount(productId: number) {
  const userId = await getUserId();
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
  const userId = await getUserId();
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

  // const Cookiestore = cookies();
  // const cookie = Cookiestore.get("user")?.value;
  // const userId = JSON.parse(cookie ?? "");
  emptyCart(userId);
}

export async function deleteSingleCartItem(productId: number) {
  const userId = await getUserId();
  await singleDelete(userId, productId);
  revalidatePath(`${BASE_URL}/checkout`);
}
