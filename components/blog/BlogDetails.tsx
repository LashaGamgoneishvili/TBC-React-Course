import Image from "next/image";
import { IoMdPerson } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import { useEffect, useState } from "react";
import {
  deleteBlogAction,
  updateBlogAction,
  updateBlogComment,
} from "../../actions";
import { AnimatePresence, motion } from "framer-motion";
import BlogEditImageUpload from "./blogEditImageUpload";
import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";

export default function BlogDetails({
  blog,
  user,
  lastFiveCharacters,
  id,
  users,
}: {
  blog: BlogTypes;
  user: GetSessionUser | undefined;
  lastFiveCharacters: string;
  id: string;
  users: DatabaseUser;
}) {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(blog.title);
  const [description, setDescription] = useState(blog.description);
  const [detaildDescription, setDetaildDescription] = useState(
    blog.detailed_description
  );
  const [comment, setComment] = useState<string>("");
  const [commentOpened, SetCommentOpend] = useState(false);
  const [time, setTime] = useState(blog.time);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [image, setImage] = useState(blog.image);
  const [readMore, setReadMore] = useState(false);
  const [disable, setDisable] = useState(false);
  const userCount = Object.keys(blog.comment).length;
  const stateTime = time;
  const [months, days] = stateTime?.split(" ");

  const editClinetAction = async (formData: FormData) => {
    const updateBlog = {
      title: formData.get("title"),
      description: formData.get("description"),
      detaildDescription: formData.get("detaildDescription"),
      time: formData.get("time"),
      blogId: formData.get("blogId"),
    };

    const response = await updateBlogAction(updateBlog);

    if (response?.error) {
      toast.error(response.error);
      console.log("error", response?.error);
    } else {
      setEdit(false);
      setDisable(false);
    }
  };

  /*eslint-disable*/
  useEffect(() => {
    setComment(blog.comment[lastFiveCharacters]);
  }, [blog.comment]);

  useEffect(() => {
    const values = Object.values(blog.comment);
    const keys = Object.keys(blog.comment);
    const comments = values.slice(0, values.length - 1);
    const key = keys.slice(0, values.length - 1);
    console.log("values", values);
    console.log("comments", comments);
    console.log("keys", key);
    console.log("users", users);
  }, []);

  useEffect(() => {
    setDisable(false);
  });

  useEffect(() => {
    setMonth(months);
    setDay(days);
  }, [months, days]);

  function handleSubmit() {
    setTimeout(() => {
      setDisable(true);
    }, 100);
  }
  function handleCommentButton() {
    if (comment.length > 1) {
      setTimeout(() => {
        SetCommentOpend(false);
      }, 100);
    }
  }

  function handleDelete() {
    deleteBlogAction(blog.blog_id);
  }

  const typedUser = user as GetSessionUser | undefined;

  return (
    <>
      <div
        className="flex flex-col h-auto shadow-md w-full   "
        key={blog.blog_id}
      >
        <div className="flex flex-col relative gap-5 ">
          <div className="relative w-full flex justify-center  mb-12">
            <Image
              src={image}
              width={500}
              height={500}
              priority
              alt="blog-post"
              className="w-full h-auto"
            />
            <div className="absolute flex flex-col items-center justify-center gap-1 text-white py-3 px-6 -bottom-8 left-16 rounded-md bg-[#ff2020] text-2xl">
              <span>{day}</span> <span>{month}</span>
            </div>
          </div>
          {typedUser?.role?.[0] && (
            <>
              <button
                className="absolute bg-blue p-2 top-0 right-0 z-0 hover:text-[#ff2020] duration-200 text-xl"
                onClick={handleDelete}
              >
                <MdDeleteForever />
              </button>
              <button
                className="absolute bg-blue p-2 top-0 left-0 z-0 hover:text-[#ff2020] duration-200"
                onClick={() => setEdit((edit) => !edit)}
              >
                <FiEdit />
              </button>
            </>
          )}
          <div className="flex flex-col gap-6 px-12 ">
            <Link
              href={`/blogs/${blog.blog_id}`}
              className="text-2xl"
              // aria-label="Go to blog details page"
            >
              {title}
            </Link>
            <p className="space-y-10">{description}</p>
            <div className="flex gap-4 text-[#999999]">
              <div className="flex gap-2">
                <IoMdPerson />
                <p>Travel, Lifestyle</p>
              </div>
              <div className="flex gap-2 hover:text-[#ff2020] duration-200 cursor-pointer">
                <FaComment />
                <p
                  onClick={() => {
                    if (typedUser) {
                      return SetCommentOpend((comment) => !comment);
                    }
                  }}
                >
                  {userCount - 1} coments
                </p>
              </div>
            </div>

            {!readMore ? (
              <button
                className="border-b-2 px-2 py-2 border-black w-24 text-left cursor-pointer peer-checked:border-white"
                onClick={() => setReadMore((prev) => !prev)}
              >
                Read More
              </button>
            ) : (
              <button
                className="border-b-2 border-black w-24 text-left cursor-pointer peer-checked:border-white"
                onClick={() => setReadMore((prev) => !prev)}
              >
                Read Less
              </button>
            )}
          </div>
          <AnimatePresence>
            {readMore && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="px-12 mb-5"
              >
                {detaildDescription}
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {commentOpened && (
              <form action={updateBlogComment}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  style={{ translateY: "-15%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="px-5 "
                >
                  <div className="flex flex-col gap-1 w-full">
                    <label htmlFor="comment" className="text-xs font-semibold ">
                      comment
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      required
                      minLength={2}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="rounded-md px-4 justify-center text-black py-1 w-full border-black border"
                    />
                  </div>

                  <input
                    id="userId"
                    type="string"
                    name="userId"
                    value={lastFiveCharacters}
                    className="rounded-md px-4 text-black py-1 w-full hidden border-black border"
                  />
                  <input
                    type="text"
                    className="hidden"
                    name="blogId"
                    value={blog.blog_id}
                  />
                  <button
                    type="submit"
                    onClick={handleCommentButton}
                    className="mt-4  bg-[#ff2020] text-white px-4 py-2  border border-[#fbf9ff] hover:border-[#ff2020] hover:bg-white hover:text-black duration-300"
                  >
                    Add Comment
                  </button>
                </motion.div>
              </form>
            )}
          </AnimatePresence>
          {!commentOpened && comment && !id && (
            <div className="flex flex-col gap-2 border-t border-black w-full  mb-5 px-5">
              <div className="flex text-xs  mt-5 relative  gap-4">
                <Image
                  src={image}
                  width={25}
                  height={50}
                  alt="avatar"
                  className="rounded-full h-auto"
                />
                <p>{user?.nickname || user?.name}</p>
                <p className="absolute top-0 right-3">Your comment</p>
              </div>
              <p>
                &bull; <span> </span> {comment}
              </p>
            </div>
          )}
          {!commentOpened && id && <h1>id</h1>}
        </div>

        {edit && (
          <>
            <div className="absolute animate-appear overflow-hidden flex w-[90%] shadow-lg px-8  z-20 bg-white transition justify-between gap-12 ease-out -translate-x-20  duration-700 py-8">
              <div className="overflow-hidden flex flex-col gap-5">
                <h1 className="text-3xl font-semibold">Update Blog Post</h1>

                <BlogEditImageUpload
                  blogImage={blog.image}
                  blogId={blog.blog_id}
                  setImage={setImage}
                />
              </div>

              <form
                action={editClinetAction}
                className="flex flex-col w-full gap-5"
              >
                <div className="flex flex-col gap-1">
                  <label htmlFor="title" className="text-xs font-semibold">
                    Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="rounded-md px-4 text-black py-1   border-black border"
                  />
                </div>
                <div className="flex flex-col gap-1 h-auto ">
                  <label
                    htmlFor="description"
                    className="text-xs font-semibold"
                  >
                    description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="rounded-md px-4 h-64 w-full text-black py-1  min-h-10 border-black border"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label
                    htmlFor="detaildDescription"
                    className="text-xs font-semibold"
                  >
                    Detaild-Description
                  </label>
                  <textarea
                    id="detaildDescription"
                    name="detaildDescription"
                    value={detaildDescription}
                    onChange={(e) => setDetaildDescription(e.target.value)}
                    className="rounded-md px-4 text-black w-full py-1 h-64  border-black border"
                  />
                </div>

                <div className="flex flex-col gap-1 w-32">
                  <label htmlFor="time" className="text-xs font-semibold">
                    time
                  </label>
                  <input
                    id="time"
                    type="string"
                    name="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="rounded-md px-4 text-black py-1  border-black border"
                  />
                </div>
                <input
                  type="text"
                  className="hidden"
                  name="blogId"
                  value={blog.blog_id}
                />
                <div className="flex justify-between">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={disable}
                    className="cursor-pointer  disabled:bg-gray-400 bg-[#3b82f6] text-white rounded-md gap-4 justify-center py-3 border border-[#fbf9ff] hover:border-[#ff2020] hover:bg-white hover:text-black duration-300 px-16"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEdit(false)}
                    className="cursor-pointer  bg-[#3b82f6] text-white rounded-md gap-4 justify-center py-3 border border-[#fbf9ff] hover:border-[#ff2020] hover:bg-white hover:text-black duration-300 px-16"
                  >
                    close
                  </button>
                </div>
              </form>
              <button
                onClick={() => setEdit(false)}
                className="absolute top-3 right-5 hover:scale-110 text-2xl"
              >
                &#10005;
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
