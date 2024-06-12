import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";
import Image from "next/image";
import { useEffect } from "react";
import { FaCamera } from "react-icons/fa";

export default function ProductImageUpload({
  productImage,
  productId,
}: {
  productImage: string;
  productId: number;
}) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  useEffect(() => {
    const updateProduct = async () => {
      if (!blob || !productId) return;
      try {
        const response = await fetch(`/api/admin/upload-product-image`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            blobUrl: blob.url,
            productId: productId,
          }),
        });

        if (!response.ok) {
          alert("Failed to update product picture");
        } else {
          alert("Product picture updated successfully");
        }
      } catch (error) {
        console.error("Error updating product picture:", error);
      }
    };

    updateProduct();
  }, [blob, productId]);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative shadow-md ">
        {blob ? (
          <Image
            className=" rounded-md mb-[25px] cursor-pointer hover"
            width={200}
            height={200}
            src={blob.url}
            alt="prodcut"
          />
        ) : (
          <Image
            className=" rounded-md  cursor-pointer hover"
            width={300}
            height={300}
            src={productImage}
            alt="Person-logo"
          />
        )}
        <div className="absolute right-1 bottom-1">
          <FaCamera fontSize={20} />
        </div>
        <label htmlFor="files" className="absolute right-0 bottom-0 opacity-0">
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
