import { Suspense } from "react";

import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../constant";
import { redirect } from "next/navigation";

import Header from "../../components/header";
import Content from "../../components/contant";
import Footer from "../../components/footer";
import Loading from "../loading";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

export async function fetchHomePageProducts() {
  const response = await fetch("https://dummyjson.com/products", {
    cache: "force-cache",
  });
  const products = response.json();
  return products;
}

export default async function Main() {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  if (!cookie) redirect("/login");
  const data = await fetchHomePageProducts();

  return (
    <div
      className={`flex h-screen flex-col overflow-hidden  font-righteous ${righteous.className}`}
    >
      <Header />
      <Suspense fallback={<Loading />}>
        <Content data={data} />
      </Suspense>
      <Footer />
    </div>
  );
}
