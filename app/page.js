import { Suspense } from "react";

import Header from "../components/header";
import Content from "../components/contant";
import Footer from "../components/footer";
import Loading from "./Loading";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

let data = {};

async function getServerSideProps() {
  try {
    const respons = await fetch("https://dummyjson.com/products");

    if (!respons.ok) throw new Error("Fetching is failed");
    data = await respons.json();
    if (data.Response === "False") throw new Error("product not found");
  } catch {
    console.log(err.message);
    setError(err.message);
  }
}

getServerSideProps();

export default function Main() {
  return (
    <div
      className={`flex h-screen flex-col overflow-hidden  font-righteous ${righteous.className}`}
    >
      <Header />
      <Suspense fallback={<Loading />}>
        <Content data={data} />
      </Suspense>
      <Footer />
    </div>
  );
}
