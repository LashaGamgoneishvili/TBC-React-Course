import { revalidatePath } from "next/cache";

export const BASE_URL = "http://localhost:3000";

export async function getUsers() {
  const response = await fetch(`${BASE_URL}/api/get-users`, {
    cache: "no-store",
  });
  const { users } = await response.json();
  return users.rows;
}

export async function createUser(name: string, email: string, age: string) {
  revalidatePath(`${BASE_URL}/users`);
  return await fetch(BASE_URL + "/api/create-user", {
    method: "POST",
    body: JSON.stringify({ name, email, age }),
  });
}

export async function deleteUser(id: number) {
  revalidatePath(`${BASE_URL}/users`);
  return await fetch(`${BASE_URL}/api/delete-user/${id}`, {
    method: "DELETE",
  });
}
