import Image from "next/image";
import { getAllBlogAction } from "../../../../actions";
import { GoSearch } from "react-icons/go";
import image from "../../../../public/Assets/blog/single_blog_3.png.webp";
import BlogList from "../../../../components/blog/BlogList";
import { getSession } from "@auth0/nextjs-auth0";
import BlogUpload from "../../../../components/blog/BlogUpload";

export default async function Blog() {
  const data: BlogPageObject = await getAllBlogAction();
  const session = await getSession();
  const user = session?.user as GetSessionUser | undefined;

  const lastFiveCharacters = user?.sub.slice(-5) || "";

  return (
    <>
      <div className="mx-[12%]  grid mt-28 justify-items-center grid-cols-3 gap-6 ">
        <div className="flex flex-col gap-20 w-full h-auto col-span-2 ">
          <>
            {data ? (
              data.result.map((blog) => (
                <BlogList
                  blog={blog}
                  user={user}
                  key={blog.blog_id}
                  lastFiveCharacters={lastFiveCharacters}
                />
              ))
            ) : (
              <h1 className="text-3xl">...Loading</h1>
            )}
            {data.result.length === 0 && (
              <h1 className="text-3xl text-center font-semibold">
                No Blog Posts
              </h1>
            )}
          </>
        </div>
        <div className="flex flex-col w-full gap-10">
          {user?.role?.[0] && data && (
            <BlogUpload
              blog={data.result}
              lastFiveCharacters={lastFiveCharacters}
            />
          )}

          <div className="p-8 bg-[#fbf9ff] ">
            <div className="flex items-center bg-white border border-gray-300 ">
              <input
                type="text"
                name="search"
                placeholder="Search Keyword"
                className="p-3 w-full border-none text-xs focus:outline-none"
              />
              <div className="bg-[#ff2020] p-4 h-full cursor-pointer">
                <GoSearch className="text-white" />
              </div>
            </div>
            <button className="mt-4 bg-[#ff2020] text-white px-4 py-3 border border-[#fbf9ff] hover:border-[#ff2020] hover:bg-white hover:text-black duration-300 w-full">
              SEARCH
            </button>
          </div>
          <div className="p-8 bg-[#fbf9ff] ">
            <div className="mb-8">
              <h2 className="text-xl mb-4">Recent Post</h2>
              <hr />
            </div>
            <div className="flex flex-col gap-5 text-[#999999]">
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
                Product (11)
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
              <p className="">Product (11)</p>
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
    </>
  );
}
