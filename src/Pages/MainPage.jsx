import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

export default function MainPage() {
  return (
    <div className="flex h-screen flex-col justify-between overflow-hidden font-body">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
