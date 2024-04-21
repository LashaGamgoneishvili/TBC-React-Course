"use server";
import { redirect } from "next/navigation";
import { AUTH_COOKIE_KEY } from "../../constant";
import { cookies } from "next/headers";
import { login } from "../actions";
import LoginForm from "../../components/loginForm";

export default async function LoginPage() {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  if (cookie) redirect("/");

  async function handleLogin(username, password) {
    "use server";
    if (username && password) {
      await login(username, password);
    }
  }

  return (
    <div className="flex flex-col w-full bg-slate-200 h-screen justify-center items-center">
      <LoginForm onHandleLogin={handleLogin} />
    </div>
  );
}
