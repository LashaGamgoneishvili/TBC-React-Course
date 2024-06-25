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
  getBlog,
  addShipping,
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
import {
  CreateBlogType,
  CreateProductType,
  CreateUser,
  UpdateBlogType,
  UpdateProductType,
  profileEdit,
} from "./types/types";

export async function createUserActionAdmin(createUser: unknown) {
  revalidatePath(`${BASE_URL}/user`);

  const result = CreateUser.safeParse(createUser);
  console.log("result-2", result);

  if (!result.success) {
    let errorMessage = "";

    result.error.issues.forEach((issue) => {
      return (errorMessage =
        errorMessage + issue.path[0] + ": " + issue.message + ". ");
    });

    return { error: errorMessage };
  }

  try {
    const response = await createUserAdmin(result.data);
    const users = await response.json();
    return users;
  } catch (error) {
    console.log(error);
    return { message: "Error During Creating user" };
  }
}

export async function createProductActionAdmin(CreateProduct: unknown) {
  revalidatePath(`${BASE_URL}/AdminProduct`);
  const result = CreateProductType.safeParse(CreateProduct);

  if (!result.success) {
    let errorMessage = "";

    result.error.issues.forEach((issue) => {
      return (errorMessage =
        errorMessage + issue.path[0] + ": " + issue.message + ". ");
    });

    return { error: errorMessage };
  }

  try {
    const response = await createProductAdmin(result.data);
    const users = await response.json();
    return users;
  } catch (error) {
    return { message: "Error During Creating user" };
  }
}

export async function createUserAction() {
  const session = await getSession();
  const user = session?.user;
  if (user) {
    createUserLogin();
  }
}

export async function updateUserAction(updateProfile: unknown) {
  revalidatePath(`${BASE_URL}/user`);

  const result = profileEdit.safeParse(updateProfile);
  console.log("result-1", result);
  if (!result.success) {
    let errorMessage = "";

    result.error.issues.forEach((issue) => {
      return (errorMessage =
        errorMessage + issue.path[0] + ": " + issue.message + ". ");
    });

    return { error: errorMessage };
  }

  try {
    const response = await updateUser(result.data);
    const users = await response.json();
    return users;
  } catch (error) {
    console.log(error);
    return { message: "Error During updating user" };
  }
}

export async function updateProductAction(UpdateProduct: unknown) {
  revalidatePath(`${BASE_URL}/AdminProduct`);

  const result = UpdateProductType.safeParse(UpdateProduct);

  if (!result.success) {
    let errorMessage = "";

    result.error.issues.forEach((issue) => {
      return (errorMessage =
        errorMessage + issue.path[0] + ": " + issue.message + ". ");
    });

    return { error: errorMessage };
  }

  try {
    const response = await updateProduct(result.data);
    const users = await response.json();
    return users;
  } catch (error) {
    return { message: "Error During update product" };
  }
}

export async function uploadNewBlogAction(CreateBlog: unknown) {
  revalidatePath(`${BASE_URL}/blogs`);
  const result = CreateBlogType.safeParse(CreateBlog);
  if (!result.success) {
    let errorMessage = "";

    result.error.issues.forEach((issue) => {
      return (errorMessage =
        errorMessage + issue.path[0] + ": " + issue.message + ". ");
    });

    return { error: errorMessage };
  }

  try {
    const response = await uploadNewBlog(result.data);
    const users = await response.json();
    return users;
  } catch (error) {
    return { message: "Error During Creating user" };
  }
}

// export async function updateBlogActionq(formData: FormData) {
//   const title = formData.get("title");
//   const description = formData.get("description");
//   const detaildDescription = formData.get("detaildDescription");
//   // const comment = formData.get("comment");
//   const time = formData.get("time");
//   const blogId = formData.get("blogId");

//   updateBlog(
//     title as string,
//     detaildDescription as string,
//     description as string,
//     // comment as string,
//     time as string,
//     blogId as string
//   );
// }

export async function updateBlogAction(BlogUpdate: unknown) {
  revalidatePath(`${BASE_URL}/blogs`);

  const result = UpdateBlogType.safeParse(BlogUpdate);
  if (!result.success) {
    let errorMessage = "";

    result.error.issues.forEach((issue) => {
      return (errorMessage =
        errorMessage + issue.path[0] + ": " + issue.message + ". ");
    });

    return { error: errorMessage };
  }

  try {
    const response = await updateBlog(result.data);
    const users = await response.json();
    return users;
  } catch (error) {
    console.log(error);
    return { message: "Error During updating user" };
  }
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

export async function createOrder(productId: number, quantity: number) {
  const session = await getSession();
  const user = session?.user;
  const userId = user?.sub;
  const response = await addShipping(productId, quantity, userId);
  const shippingProduct = await response.json();
  console.log("shippingProduct", shippingProduct.result);
  return shippingProduct.result;
}

export async function deleteUserAction(id: string) {
  revalidatePath(`${BASE_URL}/user`);
  deleteUser(id);
}
export async function deleteProductAction(id: number) {
  revalidatePath(`${BASE_URL}/AdminProduct`);

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
    const count = products?.rows?.reduce(
      (acc: number, curr: CheckoutProduct) => {
        return acc + curr.quantity;
      },
      0
    );
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
  const id = userId?.slice(-5);
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

export async function getBlogAction(blogId: string) {
  revalidatePath(`${BASE_URL}/blogs`);

  try {
    const blog = await getBlog(blogId);
    console.log("getBlogAction-blog", blog);
    return blog;
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

export async function getAllShippingProduct() {
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
