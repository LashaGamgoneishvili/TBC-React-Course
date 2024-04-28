import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const formData = await request.formData();
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
    }),
  });

  const user = await res.json();
  const cookieStore = cookies();
  if (user.message === "Invalid credentials") {
    return redirect("/login");
  }
  cookieStore.set("auth", JSON.stringify(user));

  if (res.ok && user.username === formData.get("username")) {
    return redirect("/");
  }
  return Response.json(user);
}
