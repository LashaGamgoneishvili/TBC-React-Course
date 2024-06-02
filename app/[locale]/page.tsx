import Header from "../../components/header/Header";
import Content from "../../components/mainPage/Content";
import Footer from "../../components/Footer";
import initTranslations from "../i18n";
import { BlogObject } from "../../types/types";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
});

// export async function fetchHomePageProducts() {
//   const response = await fetch("https://dummyjson.com/products");
//   const products: BlogObject = await response.json();
//   await new Promise((resolve) => setTimeout(resolve, 500));
//   return products;
// }

const i18nNamespace = ["header", "login"];
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
  const { t, resources } = await initTranslations(locale, i18nNamespace);
  // const products = await fetchHomePageProducts();
  const response = await fetch("https://dummyjson.com/products");
  const products: BlogObject = await response.json();

  return (
    <div
      className={`flex h-screen flex-col overflow-hidden   dark:text-[#abb2bf]  dark:bg-[#21252b] font-righteous `}
    >
      <Header
        translator={t}
        resources={resources}
        locale={locale}
        namespaces={i18nNamespace}
      />
      <Content
        data={products}
        righteous={righteous}
        searchParams={searchParams}
      />
      <Footer />
    </div>
  );
}
