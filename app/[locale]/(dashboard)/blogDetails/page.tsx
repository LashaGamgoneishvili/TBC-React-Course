import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Go Shopping" },
  description: "See All information about User",
};

export default function BlogDetails() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <h1>Blog details Page</h1>
    </div>
  );
}
