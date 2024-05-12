import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import initTranslations from "../../i18n";

const i18nNamespace = ["header", "login"];

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespace);

  return (
    <div className="flex h-screen flex-col justify-between">
      <Header
        translator={t}
        resources={resources}
        locale={locale}
        namespaces={i18nNamespace}
      />
      {children}
      <Footer />
    </div>
  );
}
