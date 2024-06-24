"use client";
import Image from "next/image";
import SocialLinks from "../SocialLinks";

export default function ProductDetails({
  data,
  id,
}: {
  data: Product;
  id: string;
}) {
  return (
    <div
      key={data?.product_id}
      className="grid lg:grid-cols-2 px-8 lg:px-32 py-6 lg:py-12 sm:px-24  grid-cols lg:place-items-center shadow-md md:gap-8 h-[70%] md:h-[80%] lg:h-auto"
    >
      <Image
        src={data.image}
        width={550}
        height={550}
        alt="Product-picture "
        className="w-64 md:w-80 "
        priority
      />
      <div className="flex  flex-col gap-4 h-full ">
        <h1>Title: {data.title}</h1>
        <div className="grid grid-flow-row grid-cols-2 gap-2 place-items-stretch mb-2 border-s-violet-200 border-2">
          <p className="p-2 text-xs bg-violet-400 rounded-sm">
            Discount - {data.discount}%
          </p>
          <p className="p-2 text-xs bg-green-400 rounded-sm">
            Price - {data.price}$
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="border-slate-600 border-b-2 text-xl">Description:</p>
          <p className="text-sm">{data.description}</p>
        </div>
        <SocialLinks id={id} />
      </div>
    </div>
  );
}
