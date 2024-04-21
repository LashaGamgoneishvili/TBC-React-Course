import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../constant";
import { redirect } from "next/navigation";

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);
  console.log(cookie);
  if (!cookie) redirect("/login");

  return <div>{children}</div>;
}
