"use client";
import Image from "next/image";
import SocialLinks from "../SocialLinks";
import { Product } from "@/typings";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatePresence, motion } from "framer-motion";
import { useUser } from "@auth0/nextjs-auth0/client";
import toast from "react-hot-toast";
import { updateProductComment } from "@/actions";
import { CiEdit } from "react-icons/ci";

export default function ProductDetails({
  data,
  id,
  userImage,
  userComment,
}: {
  data: Product;
  id: string;
  userImage: string;
  userComment: string;
}) {
  const [comment, setComment] = useState(userComment || "");
  const [show, setShow] = useState(false);
  const { user } = useUser();

  console.log(user?.sub);

  function handleCommentButton() {
    if (comment.trim().length > 1) {
      setTimeout(() => {
        setShow(false);
      }, 100);
    } else {
      toast.error("Please fill in the comment field");
    }
  }
  return (
    <div>
      <div
        key={data?.product_id}
        className="grid lg:grid-cols-2 px-8 lg:px-32 py-6 lg:py-12 sm:px-24  grid-cols lg:place-items-center shadow-md md:gap-8 h-[80%] md:h-[90%] lg:h-auto"
      >
        <Image
          src={data.image}
          width={550}
          height={550}
          alt="Product-picture "
          className="w-64 md:w-80 "
          priority
        />
        <div className="flex  flex-col gap-4 h-full ">
          <h1>Title: {data.title}</h1>
          <div className="grid grid-flow-row grid-cols-2 gap-2 place-items-stretch mb-2 border-s-violet-200 border-2">
            <p className="p-2 text-xs bg-violet-400 rounded-sm">
              Discount - {data.discount}%
            </p>
            <p className="p-2 text-xs bg-green-400 rounded-sm">
              Price - {data.price}$
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="border-slate-600 border-b-2 text-xl">Description:</p>
            <p className="text-sm">{data.description}</p>
          </div>
          <SocialLinks id={id} />
        </div>
      </div>
      <div className="mt-12 h-full">
        {!show && comment.length < 1 && (
          <button onClick={() => setShow(true)}>Add comment</button>
        )}
        <AnimatePresence>
          {show && (
            <form action={updateProductComment}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                style={{ translateY: "-15%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="px-5 "
              >
                <div className="flex flex-col gap-1 w-full ">
                  <label htmlFor="comment" className="text-xs font-semibold ">
                    comment
                  </label>
                  <textarea
                    id="comment"
                    required
                    minLength={2}
                    name="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="rounded-md px-4 justify-center dark:text-[#fff] dark:bg-[#3c3c3c] text-black py-1 w-full border-black border"
                  />
                </div>

                <input
                  id="userId"
                  type="string"
                  name="userId"
                  value={user?.sub || ""}
                  className="rounded-md px-4 text-black py-1 w-full hidden border-black border"
                />
                <input
                  type="text"
                  className="hidden"
                  name="productId"
                  value={id}
                />
                <div className="flex justify-between">
                  <button
                    type="submit"
                    onClick={handleCommentButton}
                    className="mt-4  bg-[#ff2020] text-white px-4 py-2  border border-[#fbf9ff] hover:border-[#ff2020] hover:bg-white hover:text-black duration-300"
                  >
                    Add Comment
                  </button>
                  <button
                    onClick={() => setShow(false)}
                    className="mt-4  bg-[#ff2020] text-white px-8 py-2  border border-[#fbf9ff] hover:border-[#ff2020] hover:bg-white hover:text-black duration-300"
                  >
                    close
                  </button>
                </div>
              </motion.div>
            </form>
          )}
        </AnimatePresence>
        {!show && comment && (
          <div className="flex flex-col gap-2 border-t border-black w-full h-full  mb-5 px-5">
            <div className="flex text-xs mt-2  lg:mt-5 relative gap-1  sm:gap-4">
              <div className="flex justify-between w-full items-center gap-2">
                <div className="flex gap-2">
                  <Avatar>
                    <AvatarImage src={userImage} alt="@shadcn" />
                    <AvatarFallback>user</AvatarFallback>
                  </Avatar>
                  <p>{user?.nickname || user?.name}</p>
                </div>
                <span onClick={() => setShow(true)}>
                  <CiEdit />
                </span>
              </div>
              <p className="absolute right-5 gap-2 top-[2px]  sm:text-sm text-xs ">
                Your comment
              </p>
            </div>
            <p className="md:text-lg sm:text-base text-sm">&bull; {comment}</p>
          </div>
        )}
      </div>
    </div>
  );
}
