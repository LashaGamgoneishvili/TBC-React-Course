"use server";
import { createUser, deleteUser } from "./api";

export async function createUserAction(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  createUser(name as string, email as string);
}

export async function deleteUserAction(id: number) {
  await deleteUser(id);
}
