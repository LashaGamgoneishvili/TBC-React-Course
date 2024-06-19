import { revalidatePath } from "next/cache";
import { getSession } from "@auth0/nextjs-auth0";

const VERCEL_ENV = process.env.VERCEL_ENV;

export const BASE_URL =
  VERCEL_ENV === "development"
    ? "http://localhost:3000"
    : "https://tbc-react-course.vercel.app";

export async function getUsers() {
  try {
    revalidatePath(`/admin`);
    const response = await fetch(`${BASE_URL}/api/user-api/get-users`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return null; // or handle the error as needed
  }
}

export async function createUserLogin() {
  return await fetch(`${BASE_URL}/api/user-api/create-user-login`);
}
export async function createUserAdmin(
  name: string,
  lastName: string,
  email: string,
  image: string,
  id: string
) {
  revalidatePath(`${BASE_URL}/user`);
  return await fetch(`${BASE_URL}/api/user-api/create-user-from-admin`, {
    method: "POST",
    body: JSON.stringify({ name, lastName, email, image, id }),
  });
}
export async function createProductAdmin(
  title: string,
  description: string,
  price: string,
  discount: string,
  image: string
  // id: string
) {
  revalidatePath(`${BASE_URL}/user`);
  return await fetch(`${BASE_URL}/api/product-api/create-new-product`, {
    method: "POST",
    body: JSON.stringify({ title, description, price, discount, image }),
  });
}

export async function updateUser(
  name: string,
  lastName: string,
  email: string,
  id: string,
  image: string
) {
  revalidatePath(`${BASE_URL}/admin`);
  return await fetch(`${BASE_URL}/api/user-api/update-user`, {
    method: "POST",
    body: JSON.stringify({ name, lastName, email, id, image }),
  });
}

export async function updateProduct(
  title: string,
  price: string,
  description: string,
  discount: string,
  productId: string
) {
  return await fetch(`${BASE_URL}/api/admin/update-product`, {
    method: "POST",
    body: JSON.stringify({ title, price, description, discount, productId }),
  });
}

export async function uploadNewBlog(
  title: string,
  description: string,
  detaildDescription: string,
  image: string,
  time: string,
  userId: string
) {
  revalidatePath(`${BASE_URL}/blogs`);

  return await fetch(`${BASE_URL}/api/admin/upload-blogs`, {
    method: "POST",
    body: JSON.stringify({
      title,
      description,
      detaildDescription,
      image,
      time,
      userId,
    }),
  });
}

export async function updateBlog(
  title: string,
  detaildDescription: string,
  description: string,
  // comment: string,
  time: string,
  blogId: string
) {
  revalidatePath(`${BASE_URL}/blogs`);

  return await fetch(`${BASE_URL}/api/admin/update-blog`, {
    method: "POST",
    body: JSON.stringify({
      title,
      detaildDescription,
      description,
      // comment,
      time,
      blogId,
    }),
  });
}

export async function updateComment(
  comment: string,
  userId: string,
  blogId: string
) {
  revalidatePath(`${BASE_URL}/blogs`);

  const response = await fetch(`${BASE_URL}/api/update-comment`, {
    method: "POST",
    body: JSON.stringify({
      comment,
      userId,
      blogId,
    }),
  });

  const updatedBlog = await response.json();

  return updatedBlog;
}

export async function deleteUser(id: string) {
  revalidatePath(`${BASE_URL}/user`);
  return await fetch(`${BASE_URL}/api/user-api/delete-user`, {
    cache: "no-store",
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
}
export async function deleteProduct(id: number) {
  revalidatePath(`${BASE_URL}/user`);
  return await fetch(`${BASE_URL}/api/product-api/delete-product`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
}

export async function addCart(id: number, productId: number) {
  const response = await fetch(`${BASE_URL}/api/cart/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: id,
      productId: productId,
    }),
  });
  return await response.json();
}

export async function emptyCart(userId: number) {
  revalidatePath(`${BASE_URL}/checkout`);
  try {
    const response = await fetch(`${BASE_URL}/api/cart/empty/${userId}`, {
      cache: "no-store",
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  } catch (err) {}
}

export async function decrementCart(userId: number, productId: number) {
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
  } catch (err) {}
}

export async function getCart(userId: string) {
  revalidatePath(`${BASE_URL}/`);
  const response = await fetch(`${BASE_URL}/api/cart/getAllcart/${userId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Error fetching cart: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function getUserImage() {
  const session = await getSession();
  const user = session?.user;
  const id = user?.sub;
  const userImage = await fetch(
    `${BASE_URL}/api/user-api/get-user-image/${id}`,
    {
      cache: "no-store",
    }
  );
  const userImageInfo = await userImage.json();
  const imageUrl = userImageInfo.userImage?.rows[0].image;

  return imageUrl;
}

export async function getUserId() {
  const session = await getSession();
  const user = session?.user;
  const id = user?.sub;
  const userSubId = await fetch(`${BASE_URL}/api/user-api/getId/${id}`, {
    cache: "no-store",
  });
  const userSerialId = await userSubId.json();
  const userId = userSerialId.usersId;
  return userId;
}

export async function getUser(id: string) {
  revalidatePath(`${BASE_URL}/profile`);
  const response = await fetch(`${BASE_URL}/api/user-api/get-user/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Error fetching user: ${response.statusText}`);
  }

  const userResult = await response.json();

  if (!userResult || !userResult.result || userResult.result.length === 0) {
    throw new Error("No user found in the response");
  }

  const user = userResult.result[0];
  return user;
}

export async function getAllProduct() {
  try {
    const response = await fetch(`${BASE_URL}/api/getAllProduct`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return {
      error: true,
      message: error,
    };
  }
}
export async function getAllBlog() {
  try {
    const response = await fetch(`${BASE_URL}/api/blog`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const blogs = await response.json();
    return blogs;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return {
      error: true,
      message: error,
    };
  }
}

export async function deleteAllBlogs() {
  return fetch(`${BASE_URL}/api/admin/delete-All-Blogs`, {
    method: "DELETE",
  });
}
export async function deleteBlog(blogId: number) {
  revalidatePath(`${BASE_URL}/blogs`);

  try {
    return await fetch(`${BASE_URL}/api/admin/delete-blog`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        blogId: blogId,
      }),
    });
  } catch (error) {
    alert("Error deleting blog");
    throw error;
  }
}

export async function getProduct(id: string) {
  const response = await fetch(`${BASE_URL}/api/get-product/${id}`);
  const product = await response.json();
  return product;
}
