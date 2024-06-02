import { BlogObject, Righteous } from "../../types/types";
import ProductList from "../mainPage/ProductList";

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
      className={`flex flex-col justify-around gap-4 bg-[#f0f0f2] dark:bg-[#21252b] overflow-x-hidden overflow-y-auto ${righteous.className}`}
    >
      <ProductList data={data} searchParams={searchParams} />
    </section>
  );
}
