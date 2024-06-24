"use client";
import { createUserActionAdmin } from "../../../actions";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import UploadUserImage from "./UploadUserImage";

// interface User {
//   given_name?: string;
//   family_name?: string;
//   nickname?: string;
//   name?: string;
//   picture?: string;
//   updated_at?: string;
//   email?: string;
//   email_verified?: boolean;
//   sub?: string;
//   sid?: string;
// }

function AddUser() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState("");
  const [disable, setDisable] = useState(false);

  const clinetAction = async (formData: FormData) => {
    const addUser = {
      name: formData.get("name"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      id: formData.get("id"),
      image: formData.get("image"),
    };

    const response = await createUserActionAdmin(addUser);

    if (response?.error) {
      toast.error(response.error);
      console.log("error", response?.error);
    } else {
      setModal(false);
      setDisable(false);
    }
  };

  useEffect(() => {
    setDisable(false);
  }, [name, lastName, email, id, image]);

  return (
    <>
      <button
        onClick={() => {
          setImage("");
          setModal(true);
        }}
        className={`bg-[#3b82f6]  hover:bg-sky-700  duration-500 text-[#fff] p-2 rounded-md w-32 mx-5  mb-3 px-4 `}
      >
        Add User
      </button>

      <div
        className={`${
          modal ? "flex" : "hidden"
        } absolute h-full  w-full opacity-70 bg-gray-200 blur-md top-32`}
        onClick={() => setModal(false)}
      ></div>
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className={`${
              modal ? "flex" : "hidden"
            }  absolute w-full top-28 justify-start items-center flex-col px-4  opacity-75 lg:px-32 sm:px-12  2xl:py-15 rounded-md `}
          >
            <div className="relative z-20 flex flex-col gap-3 items-center justify-start py-4 px-10 sm:py-8 sm:px-24 bg-white shadow-md rounded-md mt-8">
              <button
                onClick={() => setModal(false)}
                className="absolute  top-2 right-4  p-2 text-xl 2xl:text-2xl"
              >
                &#10005;
              </button>
              <div className=" flex flex-col gap-3 items-center justify-start">
                <h1 className="text-xl">Add User</h1>

                <UploadUserImage
                  userImage={
                    "https://ajy8khmx9vtvyckn.public.blob.vercel-storage.com/favicon-87PjhGSGhmsmfwVO757pAOktOXn41P.png"
                  }
                  setImage={setImage}
                />
                <form
                  action={clinetAction}
                  className="flex flex-col gap-4 items-center  text-black"
                >
                  <div className="flex flex-col gap-2 ">
                    <label htmlFor="name " className="sm:text-sm text-xs">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="rounded-sm  py-1 px-4 border  border-gray w-64"
                    />
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <label htmlFor="lastName" className="sm:text-sm text-xs">
                      lastName
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      className="rounded-sm  py-1 px-4 border border-gray w-64"
                    />
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <label htmlFor="email" className="sm:text-sm text-xs">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="rounded-sm  py-1 px-4 border border-gray w-64"
                    />
                  </div>
                  <input
                    id="image"
                    type="text"
                    name="image"
                    value={image}
                    required
                    className="rounded-sm hidden py-1 px-4 border border-gray w-64"
                  />
                  <div className="flex flex-col gap-2 ">
                    <label htmlFor="id" className="sm:text-sm text-xs">
                      User-Id
                    </label>
                    <input
                      id="id"
                      type="text"
                      name="id"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      required
                      className="rounded-sm  py-1 px-4 border border-gray w-64"
                    />
                  </div>

                  <button
                    className="cursor-pointer  bg-[#3b82f6] text-white rounded-md gap-4 justify-center py-2 border border-[#fbf9ff] hover:border-[#ff2020] hover:bg-white disabled:bg-gray-500 disabled:border-none disabled:text-black hover:text-black duration-300 px-16"
                    type="submit"
                    disabled={disable}
                    onClick={() => {
                      setTimeout(() => {
                        setDisable(true);
                      }, 200);
                    }}
                  >
                    Create User
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AddUser;
