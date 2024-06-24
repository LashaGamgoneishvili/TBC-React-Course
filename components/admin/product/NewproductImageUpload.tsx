import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";
import Image from "next/image";
import { useEffect } from "react";
import { FaCamera } from "react-icons/fa";

export default function NewProductImageUpload({
  userImage,
  setImage,
}: {
  userImage: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
}) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [disable, setDisable] = useState(true);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  useEffect(() => {
    const updateUser = async () => {
      if (!blob) return;
      try {
        setImage(blob.url);
      } catch (error) {
        console.error("Error updating user picture:", error);
      }
    };
    updateUser();
  }, [blob, setImage]);
  return (
    <>
      <div className="relative rounded-md p-7 border-gray-700 border rounde ">
        {blob ? (
          <Image
            src={blob.url}
            priority={true}
            alt="Person-logo"
            className="h-auto "
            width={150}
            height={150}
          />
        ) : (
          <Image
            src={userImage}
            priority={true}
            alt="Person-logo"
            className="h-auto"
            width={150}
            height={150}
          />
        )}
        <div className="absolute right-1 bottom-1">
          <FaCamera fontSize={20} />
        </div>
        <input
          className="text-[10px] hidden"
          name="file"
          ref={inputFileRef}
          onChange={() => setDisable(false)}
          type="file"
          id="files"
          required
        />
        <label
          htmlFor="files"
          onClick={() => setDisable(true)}
          className="absolute right-0 bottom-0 opacity-0"
        >
          text
        </label>
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
          className="cursor-pointer mt-3 bg-[#3b82f6] text-white rounded-md gap-4 justify-center py-2 border border-[#fbf9ff] hover:border-[#ff2020] hover:bg-white disabled:bg-gray-500 disabled:border-none disabled:text-black hover:text-black duration-300 px-12"
          type="submit"
          disabled={disable}
          onClick={() => {
            setTimeout(() => {
              setDisable(true);
            }, 500);
          }}
        >
          Upload
        </button>
      </form>
    </>
  );
}
