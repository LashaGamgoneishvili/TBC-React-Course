import Content from "../../components/Content";
import { Righteous } from "next/font/google";
import { BlogObject } from "../../types/types";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

// export async function fetchHomePageProducts() {
//   const response = await fetch("https://dummyjson.com/products");
//   const products: BlogObject = await response.json();
//   await new Promise((resolve) => setTimeout(resolve, 500));
//   return products;
// }

export default async function Main() {
  // const products = await fetchHomePageProducts();
  const response = await fetch("https://dummyjson.com/products");
  const products: BlogObject = await response.json();

  return (
    <div
      className={` dark:text-[#abb2bf]   dark:bg-[#21252b] font-righteous ${righteous.className}`}
    >
      <Content data={products} />
    </div>
  );
}
