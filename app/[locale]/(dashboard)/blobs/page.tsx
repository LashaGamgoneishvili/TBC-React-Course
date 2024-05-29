import { list } from "@vercel/blob";
import Image from "next/image";

async function BlobsPage() {
  const Blobs = await list();
  return (
    <div className="flex  flex-col gap-2 my-5  justify-center items-center">
      {Blobs?.blobs.map((blob) => (
        <div className=" rounded-full bg-blue-400" key={blob.url}>
          <Image
            src={blob.url}
            width={150}
            height={150}
            className="rounded-full"
            priority
            alt="upload avatar "
            key={blob.url}
          />
        </div>
      ))}
    </div>
  );
}

export default BlobsPage;
