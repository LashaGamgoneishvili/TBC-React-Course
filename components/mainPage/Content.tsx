import ProductList from "../mainPage/ProductList";
import Landing from "./Landing";
import NewArrivals from "./NewArrivals";
import GridContainer from "./GridContainer";
import ProductPresentation from "./ProductPresentation";
import SecondProductPresentation from "./SecondProductPresentation";
import ExtraDetails from "./ExtraDetails";
import Video from "./Video";

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
      className={`flex flex-col justify-center gap-36 h-full  dark:bg-[#21252b] overflow-x-hidden  ${righteous.className}`}
    >
      <Landing />
      <NewArrivals />
      <GridContainer />
      <ProductList data={data} searchParams={searchParams} />
      <Video />
      <ProductPresentation />
      <SecondProductPresentation />
      <ExtraDetails />
    </section>
  );
}
