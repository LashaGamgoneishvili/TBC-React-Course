import Header from "../../../components/header/Header";
import Footer from "../../../components/Footer";


export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  return (
    <div className="flex flex-col gap-8 ">
      <Header locale={locale} />
      {children}
      <Footer />
    </div>
  );
}
