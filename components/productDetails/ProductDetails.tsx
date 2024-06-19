"use client";
import Image from "next/image";
import SocialLinks from "../SocialLinks";

export default function ProductDetails({ data }: { data: Product }) {
  return (
    <div
      key={data?.product_id}
      className="grid grid-cols-2 place-items-center  bg-gray-100 gap-8"
    >
      <Image
        src={data.image}
        width={550}
        height={550}
        alt="Product-picture"
        priority
      />
      <div className="flex flex-col justify-center items-stretch gap-4">
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
        <SocialLinks />
      </div>
    </div>
  );
}
