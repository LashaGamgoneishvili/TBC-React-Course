"use client";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { updateUserAction } from "../../actions";

interface User {
  nickname: string;
  name: string;
  picture: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  sub: string;
  sid: string;
}

export default function EditUserInfo({ user }: { user: User }) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("There is no name");
  const [lastname, setLastname] = useState("There is no lastname");
  const [email, setEmail] = useState(user.email);

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
      <div
        className={`${
          modal ? "block" : "hidden"
        } flex absolute  left-[20%] top-1/3 h-52 z-20 px-16 rounded-md bg-white  opacity-65 justify-center items-center`}
      >
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
            <label htmlFor="name" className="text-xs font-semibold">
              lastname
            </label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
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
          <button
            type="submit"
            onClick={() => setModal(false)}
            className="px-4 rounded-md  text-white bg-[#3b82f6] py-1 text-base hover:bg-sky-700  duration-500"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}
