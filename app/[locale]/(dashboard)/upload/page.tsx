"use client";
import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const { user } = useUser();
  return (
    <>
      <h1>Upload Your Avatar</h1>

      <form
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
          const updateUser = await fetch(`/api/user-api/update-user-profile`, {
            method: "POST",
            body: JSON.stringify({
              blobUrl: blob?.url,
              userSub: user?.sub,
            }),
          });

          const updatedUser = await updateUser.json();
          console.log(updatedUser);

          const newBlob = (await response.json()) as PutBlobResult;

          setBlob(newBlob);
        }}
      >
        <input name="file" ref={inputFileRef} type="file" required />
        <button type="submit">Upload</button>
      </form>
      {blob && (
        <Image
          src={blob.url}
          priority={true}
          alt="Person-logo"
          className="h-auto w-32 ml-4 rounded-[100%]"
          width={150}
          height={150}
        />
      )}
    </>
  );
}
