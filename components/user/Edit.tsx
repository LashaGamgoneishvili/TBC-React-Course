"use client";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { updateUserAction } from "../../actions";
import { DatabaseUser } from "../../types/types";
import { motion, AnimatePresence } from "framer-motion";

export default function EditForm({
  user,
  userid,
}: {
  user: DatabaseUser;
  userid: string;
}) {
  console.log(user);
  const [modal, setModal] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [id] = useState(userid);
  const [lastName, setLastName] = useState(user?.name);
  const [image, setImage] = useState(user?.image);

  return (
    <>
      <div onClick={() => setModal(true)} className="cursor-pointer">
        <CiEdit />
      </div>
      <div
        className={`${
          modal ? "block" : "hidden"
        } absolute h-screen w-full opacity-70 bg-gray-200 blur-md  left-0 top-0`}
        onClick={() => setModal(false)}
      ></div>
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`
             flex absolute  left-[20%] top-1/3 h-52 z-20 px-16 rounded-md bg-white  opacity-65 justify-center items-center`}
          >
            <button
              onClick={() => setModal(false)}
              className="absolute right-5 top-0 mt-4 p-2 text-xl"
            >
              &#10005;
            </button>
            <form
              action={updateUserAction}
              className="flex items-end justify-center gap-3"
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-xs font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-md px-4 text-black py-1  border-black border"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="lastName" className="text-xs font-semibold">
                  lastName
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="rounded-md px-4 text-black py-1  border-black border"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-xs font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-md px-4 text-black py-1  border-black border"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label htmlFor="image">Image-Url</label>
                <input
                  id="image"
                  type="text"
                  name="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="rounded-md px-4 text-black py-1  border-black border"
                />
              </div>
              <input type="text" className="hidden" name="id" value={id} />

              <button
                type="submit"
                onClick={() => setModal(false)}
                className="px-4 rounded-md  text-white bg-[#3b82f6] py-1 text-base hover:bg-sky-700  duration-500"
              >
                Save
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
