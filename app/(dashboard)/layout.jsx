import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../constant";
import { redirect } from "next/navigation";

const cookieStore = cookies();
const cookie = cookieStore.get(AUTH_COOKIE_KEY);
console.log(cookie);

export default function RootLayout({ children }) {
  if (!cookie) {
    redirect("/login");
  }
  return <div>{children}</div>;
}
