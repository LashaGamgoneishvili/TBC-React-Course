import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Go Shopping" },
  description: "See All information about User",
};

function Shop() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <h1>Shop Page</h1>
    </div>
  );
}

export default Shop;
