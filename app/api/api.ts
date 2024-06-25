// import { revalidatePath } from "next/cache";
import { getSession } from "@auth0/nextjs-auth0";

const VERCEL_ENV = process.env.VERCEL_ENV;

export const BASE_URL =
  VERCEL_ENV === "development"
    ? "http://localhost:3000"
    : "https://tbc-react-course.vercel.app";

export async function getUsers() {
  try {
    // revalidatePath(`/admin`);
    const response = await fetch(`${BASE_URL}/api/user-api/get-users`, {
      cache: "no-cache",
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
export async function createUserAdmin(user: CreateUserResult) {
  // revalidatePath(`${BASE_URL}/user`);
  return await fetch(`${BASE_URL}/api/user-api/create-user-from-admin`, {
    method: "POST",
    body: JSON.stringify({ user }),
  });
}
export async function createProductAdmin(product: ProductResult) {
  // revalidatePath(`${BASE_URL}/AdminProudct`);
  return await fetch(`${BASE_URL}/api/product-api/create-new-product`, {
    method: "POST",
    body: JSON.stringify({ product }),
  });
}

export async function updateUser(user: Result) {
  // revalidatePath(`${BASE_URL}/user`);
  return await fetch(`${BASE_URL}/api/user-api/update-user`, {
    method: "POST",
    body: JSON.stringify({ user }),
  });
}

export async function updateProduct(product: ProductResult) {
  // revalidatePath(`${BASE_URL}/Adminproduct`);
  return await fetch(`${BASE_URL}/api/admin/update-product`, {
    method: "POST",
    body: JSON.stringify({ product }),
  });
}

export async function uploadNewBlog(blog: BlogType) {
  // revalidatePath(`${BASE_URL}/blogs`);

  return await fetch(`${BASE_URL}/api/admin/upload-blogs`, {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify({
      blog,
    }),
  });
}

export async function updateBlog(blog: BlogType) {
  // revalidatePath(`${BASE_URL}/blogs`);

  return await fetch(`${BASE_URL}/api/admin/update-blog`, {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify({
      blog,
    }),
  });
}

export async function updateComment(
  comment: string,
  userId: string,
  blogId: string
) {
  // revalidatePath(`${BASE_URL}/blogs`);

  const response = await fetch(`${BASE_URL}/api/update-comment`, {
    cache: "no-store",
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
  // revalidatePath(`${BASE_URL}/user`);
  return await fetch(`${BASE_URL}/api/user-api/delete-user`, {
    cache: "no-store",
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
}
export async function deleteProduct(id: number) {
  // revalidatePath(`${BASE_URL}/AdminProduct`);
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
export async function addShipping(
  productId: number,
  quantity: number,
  userId: string
) {
  return await fetch(`${BASE_URL}/api/shipping/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      productId: productId,
      quantity: quantity,
      userId: userId,
    }),
  });
}
export async function getShippingProduct() {
  const session = await getSession();
  const user = session?.user;
  const id = user?.sub;
  const lastFiveCharacters = id.slice(-5);
  return await fetch(`${BASE_URL}/api/shipping/get/${lastFiveCharacters}`, {
    method: "GET",
    cache: "no-cache",
  });
}

export async function emptyCart(userId: number) {
  // revalidatePath(`${BASE_URL}/checkout`);
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
  // revalidatePath(`${BASE_URL}/`);
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
  // revalidatePath(`${BASE_URL}/profile`);
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
  // revalidatePath(`${BASE_URL}/shop`);

  try {
    const response = await fetch(`${BASE_URL}/api/getAllProduct`, {
      cache: "no-cache",
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
  // revalidatePath(`${BASE_URL}/blogs`);

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
export async function getAllshippingProduct() {
  // revalidatePath(`${BASE_URL}/shipping`);
  try {
    const response = await fetch(`${BASE_URL}/api/shipping/get-all`, {
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

export async function getBlog(blogId: string) {
  const response = await fetch(`${BASE_URL}/api/get-blog/${blogId}`, {
    cache: "no-store",
  });
  const blog = await response.json();
  return blog;
}
// export async function getBlog(blogId: string) {
// revalidatePath(`${BASE_URL}/blogs${blogId}`);

//   try {
//     const response = await fetch(`${BASE_URL}/api/getBlog/${blogId}`, {
//       cache: "no-store",
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const blog = await response.json();
//     return blog;
//   } catch (error) {
//     console.error("Failed to fetch products:", error);
//     return {
//       error: true,
//       message: error,
//     };
//   }
// }

export async function deleteAllBlogs() {
  return fetch(`${BASE_URL}/api/admin/delete-All-Blogs`, {
    method: "DELETE",
    cache: "no-store",
  });
}
export async function deleteBlog(blogId: number) {
  // revalidatePath(`${BASE_URL}/blogs`);

  try {
    return await fetch(`${BASE_URL}/api/admin/delete-blog`, {
      cache: "no-store",
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
export async function getData() {
  const response = await fetch(`${BASE_URL}/api/search`);
  const product = await response.json();
  return product;
}

export async function shippingProductDelete(userId: string, productId: string) {
  try {
    const response = await fetch(`${BASE_URL}/api/shipping/delete`, {
      cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        productId: productId,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch shipping delete API:", error);
    throw new Error("Failed to fetch shipping delete API");
  }
}
