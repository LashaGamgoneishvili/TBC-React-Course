import Image from "next/image";
// import { Params } from "../../../../../types/types";
import { Product } from "../../../../../types/types";
// import { BlogObject } from "../../../../../types/types";

interface Params {
  id: string;
}

// const URL = "https://dummyjson.com/products";

// export async function generateStaticParams() {
//   const response = await fetch(URL);
//   const data: BlogObject = await response.json();

//   const paths = data.products.map((product) => ({
//     id: product.id.toString(),
//   }));
//   const paths2 = data.products.map((product) => ({
//     locale: "ka",
//     id: product.id.toString(),
//   }));
//   return paths.concat(paths2);
// }

async function fetchBlogsPost(params: Params) {
  const response = await fetch(`https://dummyjson.com/products/${params.id}`);
  const post: Product = await response.json();
  return post;
}

export default async function Page({ params }: { params: Params }) {
  const data = await fetchBlogsPost(params);

  return (
    <div className="flex p-10 mt-24 h-screen overflow-hidden">
      <div key={data.id} className="grid grid-cols-2 items-start gap-8">
        <Image
          src={data.thumbnail}
          width={150}
          height={150}
          alt="Product-picture"
          priority
        />
        <div className="flex flex-col justify-center items-stretch gap-4">
          <h1>Title: {data.title}</h1>
          <h2>Brand: {data.brand}</h2>
          <div className="grid grid-flow-row grid-cols-2 gap-2 place-items-stretch mb-2 border-s-violet-200 border-2">
            <p className="p-2 text-xs bg-violet-400 rounded-sm">
              Discount - {data.discountPercentage}%
            </p>
            <p className="p-2 text-xs bg-green-400 rounded-sm">
              Price - {data.price}$
            </p>
            <p className="p-2 text-xs">Rating - {data.rating}</p>
            <p className="p-2 text-xs">Stock - {data.stock}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className=" border-slate-600 border-b-2  text-xl">
              Description:
            </p>
            <p className=" text-sm">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
