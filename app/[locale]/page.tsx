import Header from "../../components/Header";
import Content from "../../components/Content";
import Footer from "../../components/Footer";
import { Righteous } from "next/font/google";
import initTranslations from "../i18n";
import { BlogObject } from "../../types/types";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

export async function fetchHomePageProducts() {
  const response = await fetch("https://dummyjson.com/products");
  const products: BlogObject = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 500));
  return products;
}

const i18nNamespace = ["header", "login"];

interface MainProps {
  params: {
    locale: string | undefined;
  };
}

export default async function Main({ params: { locale } }: MainProps) {
  const { t, resources } = await initTranslations(locale, i18nNamespace);
  const data = await fetchHomePageProducts();

  return (
    <div
      className={`flex h-screen  flex-col overflow-hidden dark:text-[#abb2bf]  dark:bg-[#21252b] font-righteous ${righteous.className}`}
    >
      <Header
        translator={t}
        resources={resources}
        locale={locale}
        namespaces={i18nNamespace}
      />
      <Content data={data} />
      <Footer />
    </div>
  );
}
