"use server";
import TranslationsProvider from "../TranslationsProvider";
import initTranslations from "../../app/i18n";
import StickyHeader from "./StickyHeader";

const i18nNamespace = ["header", "contact", "login", "profile"];

export default async function Header({ locale }: HeaderProps) {
  const { t, resources } = await initTranslations(locale, i18nNamespace);

  const translations = {
    home: t("header:header_home"),
    shop: t("header:shop"),
    about: t("header:about"),
    latest: t("header:latest"),
    blog: t("header:header_blog"),
    pages: t("header:pages"),
    contact: t("header:header_contact"),
    productList: t("header:product-list"),
    productDetails: t("header:product-details"),
    blob: t("header:blog"),
    blogDetails: t("header:blog-details"),
    login: t("login:login-btn"),
    cart: t("header:cart"),
    element: t("header:element"),
    confirmation: t("header:confirmation"),
    shipping: t("header:shipping"),
    productCheckout: t("header:product-checkout"),
  };

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespace}
    >
      <StickyHeader translations={translations} />
    </TranslationsProvider>
  );
}
