import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";
import Image from "next/image";
import { useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import blogImage from "../../public/Assets/blog/single_blog_1.png.webp";

export default function BlogImageUpload({
  setImage,
}: {
  setImage: React.Dispatch<React.SetStateAction<string>>;
}) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  useEffect(() => {
    const updateBlog = async () => {
      if (!blob) return;
      try {
        // const response = await fetch(`/api/admin/upload-new-blog-image`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     blobUrl: blob.url,
        //   }),
        // });

        setImage(blob.url);

        if (!blob.url) {
          alert("Failed to update blog picture");
        } else {
          alert("Blog picture updated successfully");
        }
      } catch (error) {
        console.error("Error updating blog picture:", error);
      }
    };

    updateBlog();
  }, [blob, setImage]);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative shadow-md ">
        {blob ? (
          <Image
            className="rounded-md hover"
            width={500}
            height={500}
            src={blob.url}
            alt="prodcut"
          />
        ) : (
          <Image
            className=" rounded-md hover"
            width={500}
            height={500}
            src={blogImage}
            alt="Person-logo"
          />
        )}
        <div className="text-black absolute cursor-pointer bg-white p-1 shadow-md border rounded-md right-0 bottom-0">
          <FaCamera fontSize={20} />
          <label
            htmlFor="files"
            className="absolute right-0 bottom-0 opacity-0"
          >
            text
          </label>
          <input
            className="text-[10px] hidden"
            name="file"
            ref={inputFileRef}
            type="file"
            id="files"
            required
          />
        </div>
      </div>
      <form
        className="flex flex-col justify-center items-center gap-3"
        onSubmit={async (event) => {
          event.preventDefault();

          if (!inputFileRef.current?.files) {
            throw new Error("No file selected");
          }

          const file = inputFileRef.current.files[0];

          const response = await fetch(`/api/upload?filename=${file.name}`, {
            method: "POST",
            body: file,
          });

          const newBlob = (await response.json()) as PutBlobResult;

          setBlob(newBlob);
        }}
      >
        <button
          className="bg-blue-500 w-32 text-white text-[12px] py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          type="submit"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
