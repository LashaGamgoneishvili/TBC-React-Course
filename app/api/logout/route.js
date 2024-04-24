import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../../constant";
import { redirect } from "next/navigation";

export async function GET() {
  const cookieStore = cookies();
  cookieStore.delete(AUTH_COOKIE_KEY);
  redirect("/login");
}
