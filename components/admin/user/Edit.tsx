"use client";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { updateUserAction } from "../../../actions";
import { motion, AnimatePresence } from "framer-motion";
import UploadUserImage from "./UploadUserImage";
import toast from "react-hot-toast";

export default function EditForm({
  user,
  userid,
  userImage,
}: {
  user: DatabaseUser;
  userid: string;
  userImage: string;
}) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [lastName, setLastName] = useState(user?.lastname);
  const [image, setImage] = useState(userImage);
  const [disable, setDisable] = useState(false);

  const clinetAction = async (formData: FormData) => {
    const updateProfile = {
      name: formData.get("name"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      id: formData.get("id"),
      image: formData.get("image"),
    };

    const response = await updateUserAction(updateProfile);

    if (response?.error) {
      toast.error(response.error);
      console.log("error", response?.error);
    } else {
      setModal(false);
    }
  };

  useEffect(() => {
    setDisable(false);
  }, [name, lastName, email, image]);

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
             flex absolute left-0 sm:left-10 md:left-36 lg:left-[25%]   2xl:left-[15%] top-[20%] py-7 z-20 px-4 sm:px-16 w-auto h-auto  rounded-md bg-white  justify-center items-center`}
          >
            <button
              onClick={() => setModal(false)}
              className="absolute right-5 top-0 mt-4 p-2 text-xl"
            >
              &#10005;
            </button>
            <div className="flex flex-col gap-5 ">
              <UploadUserImage userImage={image} setImage={setImage} />
              <form
                action={clinetAction}
                className="flex 2xl:items-end flex-col items-center  justify-center w-full  xl:w-auto 2xl:flex-row  gap-3"
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
                    required
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
                    required
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
                    type="email"
                    name="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-md px-4 text-black py-1  border-black border"
                  />
                </div>
                <input
                  id="image"
                  type="text"
                  name="image"
                  value={image}
                  className="rounded-md px-4 hidden text-black py-1  border-black border"
                />
                <input
                  type="text"
                  className="hidden"
                  name="id"
                  value={userid}
                />

                <button
                  type="submit"
                  disabled={disable}
                  onClick={() =>
                    setTimeout(() => {
                      setDisable(true);
                    }, 200)
                  }
                  className="px-4 rounded-md  text-white disabled:bg-gray-400 bg-[#3b82f6] py-1 text-base hover:bg-sky-700  duration-500"
                >
                  Save
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
