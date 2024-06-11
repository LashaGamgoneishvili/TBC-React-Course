import Image from "next/image";
import Link from "next/link";
import { BlogObject } from "../../../../types/types";
import { getAllProductAction } from "../../../../actions";

export default async function Blog() {
  const data: BlogObject = await getAllProductAction();
  return (
    <>
      {data ? (
        <div className=" mx-2 my-8 grid justify-items-center gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 ">
          {data.result.map((data) => {
            return (
              <div
                key={data.product_id}
                className="w-70 grid grid-rows-[auto]  items-center justify-items-center gap-1 border-2 border-black p-4"
              >
                <h2 className="font-bold">{data.title}</h2>
                <p className=" h-24">{data.description}</p>
                <Image
                  src={data.image}
                  priority={true}
                  alt="Person-logo"
                  className="h-auto w-auto"
                  width={250}
                  height={250}
                />

                <p>{data.price} $</p>

                <Link
                  href={`blogs/${data.product_id}`}
                  className="rounded-lg border-2 border-[#fff] bg-[#dedede] px-6 py-1 transition-all duration-200 ease-in hover:border-[#333] hover:bg-white"
                >
                  Read More
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-screen">
          <h1 className="absolute left-[50%] top-[50%] text-2xl translate-x-[-50%] translate-y-[-160%]">
            Loading ...
          </h1>
        </div>
      )}
    </>
  );
}
