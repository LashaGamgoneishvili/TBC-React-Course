import { BlogObject, Righteous } from "../../types/types";
import ProductList from "../mainPage/ProductList";
import Landing from "./Landing";
import NewArrivals from "./NewArrivals";
import GridContainer from "./GridContainer";
import AnimatedButton from "./AnimatedButton";
import ProductPresentation from "./ProductPresentation";
import SecondProductPresentation from "./SecondProductPresentation";
import ExtraDetails from "./ExtraDetails";

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
      className={`flex flex-col justify-center gap-44   dark:bg-[#21252b] overflow-x-hidden  ${righteous.className}`}
    >
      <Landing />
      <NewArrivals />
      <GridContainer />
      <ProductList data={data} searchParams={searchParams} />
      <AnimatedButton mainColor="#ff2020" hoverColor="#4a4a4b">
        View More Product
      </AnimatedButton>
      <ProductPresentation />
      <SecondProductPresentation />
      <ExtraDetails />
    </section>
  );
}
