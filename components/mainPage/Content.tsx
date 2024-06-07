import { BlogObject, Righteous } from "../../types/types";
import ProductList from "../mainPage/ProductList";
import Landing from "./Landing";

export default function Content({
  data,
  righteous,
  searchParams,
}: {
  searchParams?: {
    query: string;
    page: string;
  };
  data: BlogObject;
  righteous: Righteous;
}) {
  return (
    <section
      className={`flex flex-col justify-around gap-8 bg-[#f0f0f2] dark:bg-[#21252b] overflow-x-hidden  ${righteous.className}`}
    >
      <Landing />
      <ProductList data={data} searchParams={searchParams} />
    </section>
  );
}
