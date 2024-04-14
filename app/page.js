import { Suspense } from "react";

import Header from "../components/header";
import Content from "../components/contant";
import Footer from "../components/footer";
import Loading from "./loading";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

export default function Main() {
  return (
    <div
      className={`flex h-screen flex-col overflow-hidden  font-righteous ${righteous.className}`}
    >
      <Header />
      <Suspense fallback={<Loading />}>
        <Content />
      </Suspense>
      <Footer />
    </div>
  );
}
