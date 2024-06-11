import Header from "../../components/header/Header";
import Content from "../../components/mainPage/Content";
import Footer from "../../components/Footer";
import { Righteous } from "next/font/google";
import { getAllProductAction } from "../../actions";
const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
});

interface MainProps {
  params: {
    locale: string | undefined;
  };
  searchParams?: {
    query: string;
    page: string;
  };
}

export default async function Main({
  params: { locale },
  searchParams,
}: MainProps) {
  const products = await getAllProductAction();

  return (
    <div className="flex flex-col  dark:text-[#abb2bf]  dark:bg-[#21252b] font-righteous">
      <Header locale={locale} />
      <Content
        data={products}
        righteous={righteous}
        searchParams={searchParams}
      />
      <Footer />
    </div>
  );
}
