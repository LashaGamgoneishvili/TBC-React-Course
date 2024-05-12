import { revalidatePath } from "next/cache";

const VERCEL_ENV = process.env.VERCEL_ENV;

export const BASE_URL =
  VERCEL_ENV === "development"
    ? "http://localhost:3000"
    : "https://tbc-react-course-git-session-15-lashas-projects-cb23651f.vercel.app";

export async function getUsers() {
  const response = await fetch(`${BASE_URL}/api/get-users`, {
    cache: "no-store",
  });
  const { users } = await response.json();

  return users;
}

export async function createUser(name: string, email: string, age: string) {
  revalidatePath(`${BASE_URL}/admin`);
  return await fetch(BASE_URL + "/api/create-user", {
    method: "POST",
    body: JSON.stringify({ name, email, age }),
  });
}
export async function updateUser(
  name: string,
  email: string,
  age: string,
  id: string
) {
  revalidatePath(`${BASE_URL}/admin`);
  return await fetch(BASE_URL + "/api/update-user", {
    method: "POST",
    body: JSON.stringify({ name, email, age, id }),
  });
}

export async function deleteUser(id: number) {
  revalidatePath(`${BASE_URL}/admin`);
  return await fetch(`${BASE_URL}/api/delete-user/${id}`, {
    method: "DELETE",
  });
}
