"use client";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import BlogImageUpload from "./BlogImageUpload";
import { uploadNewBlogAction } from "../../actions";
import { deleteAllBlogs } from "../../app/api/api";

export default function BlogUpload({
  blog,
  lastFiveCharacters,
}: {
  blog: BlogTypes[];
  lastFiveCharacters: string;
}) {
  const [upload, setUpload] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [detaildDescription, setDetaildDescription] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState("");
  const { user } = useUser();
  const typedUser = user as GetSessionUser | undefined;

  function handleSubmit() {
    setTimeout(() => {
      setUpload(false);
    }, 100);
  }

  function handleDelete() {
    deleteAllBlogs();
  }
  console.log("blog", blog);
  return (
    <>
      {typedUser?.role?.[0] && (
        <div className="flex flex-col gap-3">
          <button
            className="cursor-pointer mx-6 bg-[#3b82f6] text-white flex gap-4 justify-center py-3 border border-[#fbf9ff] hover:border-[#ff2020] hover:bg-white hover:text-black duration-300 "
            onClick={() => setUpload(true)}
          >
            <span>&#10009; </span>
            <span> Add New Blog </span>
          </button>
          <button
            className="cursor-pointer mx-6 bg-[#3b82f6] text-white flex gap-4 justify-center py-3 border border-[#fbf9ff] hover:border-[#ff2020] hover:bg-white hover:text-black duration-300 "
            onClick={handleDelete}
          >
            <span> Delete All blogs </span>
          </button>
        </div>
      )}

      {/* {blog.result.map((blog) => (
        <h1>lasha</h1>
      ))} */}
      {upload && (
        <div className="absolute overflow-hidden  animate-appearFromTop flex top-0 left-0 px-16 -translate-y-[-70%]  bg-white w-full   items-start transition shadow-lg justify-between gap-8 ease-out">
          <div className="flex flex-col gap-5 overflow-hidden">
            <h1 className="text-3xl font-semibold">Creating New Blog Post</h1>
            <BlogImageUpload setImage={setImage} />
          </div>
          <form
            action={uploadNewBlogAction}
            className="flex flex-col py-5  h-full items-start justify-start w-full  gap-5"
          >
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="title" className="text-xs font-semibold">
                Title
              </label>
              <input
                id="title"
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="rounded-md px-4 text-black py-1 border-black border"
              />
            </div>

            <div className="flex flex-col gap-1 w-full ">
              <label htmlFor="description" className="text-xs font-semibold">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="rounded-md px-4  h-52 text-black py-1  w-full min-h-10 border-black border"
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="detaildDescription"
                className="text-xs font-semibold"
              >
                Detaild Description
              </label>
              <textarea
                id="detaildDescription"
                name="detaildDescription"
                value={detaildDescription}
                onChange={(e) => setDetaildDescription(e.target.value)}
                className="rounded-md px-4 text-black py-1  h-64 border-black border"
              />
            </div>
            <div className="flex flex-col gap-1  w-32">
              <label htmlFor="time" className="text-xs font-semibold">
                time
              </label>
              <input
                id="time"
                type="text"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="rounded-md px-4 text-black py-1  border-black border"
              />

              <input
                id="image"
                type="text"
                name="image"
                value={image}
                className="rounded-md px-4 hidden text-black py-1  border-black border"
              />
              <input
                id="userId"
                type="text"
                name="userId"
                value={lastFiveCharacters}
                className="rounded-md px-4 hidden text-black py-1  border-black border"
              />
            </div>
            <div className="flex w-full justify-between">
              <button
                type="submit"
                onClick={handleSubmit}
                className="cursor-pointer  bg-[#3b82f6] text-white rounded-md gap-4 justify-center py-3 border border-[#fbf9ff] hover:border-[#ff2020] hover:bg-white hover:text-black duration-300 px-16"
              >
                Save
              </button>
              <button
                onClick={handleSubmit}
                className="cursor-pointer  bg-[#3b82f6] text-white rounded-md gap-4 justify-center py-3 border border-[#fbf9ff] hover:border-[#ff2020] hover:bg-white hover:text-black duration-300 px-16"
              >
                close
              </button>
            </div>
          </form>
          <button
            onClick={() => setUpload(false)}
            className="absolute -top-3 right-5 mt-4 p-2 text-2xl"
          >
            &#10005;
          </button>
        </div>
      )}
    </>
  );
}
