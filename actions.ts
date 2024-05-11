"use server";
import { createUser, deleteUser, updateUser } from "./api";

export async function createUserAction(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const age = formData.get("age");

  createUser(name as string, email as string, age as string);
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
