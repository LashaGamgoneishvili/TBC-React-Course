import ProductList from "../mainPage/ProductList";
import Landing from "./Landing";
import NewArrivals from "./NewArrivals";
import GridContainer from "./GridContainer";
import ProductPresentation from "./ProductPresentation";
import SecondProductPresentation from "./SecondProductPresentation";
import ExtraDetails from "./ExtraDetails";
import Video from "./Video";
import { BlogObject, Righteous } from "@/typings";
import initTranslations from "../../app/i18n";
import TranslationsProvider from "../TranslationsProvider";

const i18nNamespace = ["header", "contact", "login", "profile", "MainPage"];

export default async function Content({
  data,
  righteous,
  searchParams,
  locale,
}: {
  searchParams?: {
    query: string;
    page: string;
  };
  data: BlogObject;
  righteous: Righteous;
  locale: string | undefined;
}) {
  const { resources } = await initTranslations(locale, i18nNamespace);

  return (
    <section
      className={`flex flex-col justify-center gap-36 h-full  dark:bg-[#21252b] overflow-x-hidden  ${righteous.className}`}
    >
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNamespace}
      >
        <Landing />
        <NewArrivals />
        <GridContainer />
        <ProductList data={data} searchParams={searchParams} />
        <Video />
        <ProductPresentation />
        <SecondProductPresentation />
        <ExtraDetails />
      </TranslationsProvider>
    </section>
  );
}
