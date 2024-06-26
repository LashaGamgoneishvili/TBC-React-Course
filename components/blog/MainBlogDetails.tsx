"use client";
import Image from "next/image";
import BlogUpload from "./BlogUpload";
import SearchForm from "./SearchForm";
import { useState } from "react";
import BlogDetails from "./BlogDetails";
import { BlogPageObject, DatabaseUser, GetSessionUser } from "@/typings";

const image =
  "https://ajy8khmx9vtvyckn.public.blob.vercel-storage.com/346857997_927928671820342_8714695182936544650_n-X3cQMZ9wUeqSiRTFvXxdIWMC2s3kYs.jpg";

export default function MainBlogDetails({
  data,
  lastFiveCharacters,
  user,
  id,
  users,
}: {
  data: BlogPageObject;
  lastFiveCharacters: string;
  user: GetSessionUser | undefined;
  id: string;
  users: DatabaseUser;
}) {
  const [blog, setBlog] = useState(data.result);

  console.log("query", id, "123");

  return (
    <div className="mx-[12%]  grid mt-28 justify-items-center grid-cols-3 gap-6 ">
      <div className="flex flex-col gap-20 w-full h-auto col-span-2 ">
        <>
          {blog ? (
            blog.map((blog) => (
              <BlogDetails
                blog={blog}
                user={user}
                key={blog.blog_id}
                lastFiveCharacters={lastFiveCharacters}
                id={id}
                users={users}
              />
            ))
          ) : (
            <h1 className="text-3xl">...Loading</h1>
          )}
          {blog.length === 0 && (
            <h1 className="text-3xl text-center font-semibold">
              No Blog Posts
            </h1>
          )}
        </>
      </div>
      <div className="flex flex-col w-full gap-10">
        {user?.role?.[0] && blog && (
          <BlogUpload
            blog={data.result}
            lastFiveCharacters={lastFiveCharacters}
          />
        )}
        <SearchForm data={data} setBlog={setBlog} />

        <div className="p-8 bg-[#fbf9ff] ">
          <div className="mb-8">
            <h2 className="text-xl mb-4">Recent Post</h2>
            <hr />
          </div>
          <div className="flex flex-col text-sm gap-5 text-[#999999]">
            <p className="hover:text-[#ff2020] duration-150 cursor-pointer">
              Resaurant food (37)
            </p>
            <hr />
            <p className="hover:text-[#ff2020] duration-150 cursor-pointer">
              Travel news (10)
            </p>
            <hr />
            <p className="hover:text-[#ff2020] duration-150 cursor-pointer">
              Modern technology (03)
            </p>
            <hr />
            <p className="hover:text-[#ff2020] duration-150 cursor-pointer">
              blog (11)
            </p>
            <hr />
            <p className="hover:text-[#ff2020] duration-150 cursor-pointer">
              Inspiration 21
            </p>
            <hr />
            <p className="hover:text-[#ff2020] duration-150 cursor-pointer">
              Health Care (21) 09
            </p>
          </div>
        </div>
        <div className="p-8 bg-[#fbf9ff] ">
          <div className="mb-8">
            <h2 className="text-xl mb-4">Category</h2>
            <hr />
          </div>
          <div className="flex flex-col gap-5 text-[#999999]">
            <div className="flex gap-4">
              <Image
                src={
                  "https://preview.colorlib.com/theme/timezone/assets/img/post/post_1.png"
                }
                width={70}
                height={50}
                alt="news"
                priority
              />
              <div>
                <p className="hover:text-[#ff2020] duration-150 cursor-pointer text-black mb-2">
                  From life was you fish...
                </p>
                <p className="text-sm">January 12, 2019</p>
              </div>
            </div>
            <p className="">Resaurant food (37)</p>
            <hr />
            <p className="">Travel news (10)</p>
            <hr />
            <p className="">Modern technology (03)</p>
            <hr />
            <p className="">blog (11)</p>
            <hr />
            <p className="">Inspiration 21</p>
            <hr />
            <p className="">Health Care (21) 09</p>
          </div>
        </div>
        <div className="p-8 bg-[#fbf9ff] ">
          <div className="mb-8">
            <h2 className="text-xl mb-4">Tag Clouds</h2>
            <hr />
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-white text-[#999999] text-sm px-3 py-1 border border-gray-200 hover:text-white hover:bg-[#ff2020] duration-300 hover:border-[#ff2020] cursor-pointer">
              project
            </span>
            <span className="bg-white text-[#999999] text-sm px-3 py-1 border border-gray-200 hover:text-white hover:bg-[#ff2020] duration-300 hover:border-[#ff2020] cursor-pointer">
              love
            </span>
            <span className="bg-white text-[#999999] text-sm px-3 py-1 border border-gray-200 hover:text-white hover:bg-[#ff2020] duration-300 hover:border-[#ff2020] cursor-pointer">
              technology
            </span>
            <span className="bg-white text-[#999999] text-sm px-3 py-1 border border-gray-200 hover:text-white hover:bg-[#ff2020] duration-300 hover:border-[#ff2020] cursor-pointer">
              travel
            </span>
            <span className="bg-white text-[#999999] text-sm px-3 py-1 border border-gray-200 hover:text-white hover:bg-[#ff2020] duration-300 hover:border-[#ff2020] cursor-pointer">
              restaurant
            </span>
            <span className="bg-white text-[#999999] text-sm px-3 py-1 border border-gray-200 hover:text-white hover:bg-[#ff2020] duration-300 hover:border-[#ff2020] cursor-pointer">
              life style
            </span>
            <span className="bg-white text-[#999999] text-sm px-3 py-1 border border-gray-200 hover:text-white hover:bg-[#ff2020] duration-300 hover:border-[#ff2020] cursor-pointer">
              design
            </span>
            <span className="bg-white text-[#999999] text-sm px-3 py-1 border border-gray-200 hover:text-white hover:bg-[#ff2020] duration-300 hover:border-[#ff2020] cursor-pointer">
              illustration
            </span>
          </div>
        </div>
        <div className="flex flex-col p-8 bg-[#fbf9ff] ">
          <div className="mb-8">
            <h2 className="text-xl mb-4">Instagram Feeds</h2>
            <hr />
          </div>
          <div className="flex flex-col sm:flex-row">
            <Image src={image} width={100} height={100} alt="Insta-galery" />
          </div>
        </div>
        <div className="flex flex-col p-8 bg-[#fbf9ff] ">
          <div className="mb-8">
            <h2 className="text-xl mb-4">Newsletter</h2>
            <hr />
          </div>
          <div className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter email"
              className="border border-gray-300 py-2 px-4 h-12 w-full text-sm focus:outline-none"
            />
          </div>
          <button className="mt-4 bg-[#ff2020] text-white px-4 py-3 border border-[#fbf9ff] hover:border-[#ff2020] hover:bg-white hover:text-black duration-300 w-full">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}
