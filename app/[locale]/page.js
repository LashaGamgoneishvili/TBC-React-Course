import Header from "../../components/Header";
import Content from "../../components/contant";
import Footer from "../../components/footer";
import { Righteous } from "next/font/google";
import initTranslations from "../i18n";

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
  await new Promise((resolve) => setTimeout(resolve, 500));
  return products;
}

const i18nNamespace = ["header"];

export default async function Main({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespace);
  const data = await fetchHomePageProducts();

  return (
    <div
      className={`flex h-screen flex-col overflow-hidden  dark:bg-gray-700 font-righteous ${righteous.className}`}
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
