import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";
import Image from "next/image";
import { useEffect } from "react";
import { FaCamera } from "react-icons/fa";

export default function UploadUserImage({
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
        const updateUser = await fetch(`/api/user-api/upload-user-picture`, {
          method: "POST",
          body: JSON.stringify({
            blobUrl: blob?.url,
          }),
        });

        setImage(blob.url);

        if (!updateUser.ok) {
          console.error("Failed to update user picture");
        } else {
          console.log("User picture updated successfully");
        }
      } catch (error) {
        console.error("Error updating user picture:", error);
      }
    };
    updateUser();
  }, [blob, setImage]);
  console.log("image", userImage);
  return (
    <div className="flex flex-col gap-3">
      <div className="relative rounded-md  flex justify-center items-center bg-white  w-auto h-auto border-gray-700 border rounde ">
        {blob ? (
          <Image
            src={blob.url}
            priority={true}
            alt="Person-logo"
            className="w-72 h-auto "
            width={500}
            height={500}
          />
        ) : (
          <Image
            src={userImage}
            priority={true}
            alt="Person-logo"
            className=" w-72 h-auto"
            width={500}
            height={500}
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
          className="cursor-pointer  bg-[#3b82f6] text-white rounded-md gap-4 justify-center py-2 border border-[#fbf9ff] hover:border-[#ff2020] hover:bg-white disabled:bg-gray-500 disabled:border-none disabled:text-black hover:text-black duration-300 px-16"
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
    </div>
  );
}
