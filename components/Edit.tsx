"use client";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { updateUserAction } from "../actions";
import { User } from "../types/types";

export default function EditForm({ user }: { user: User }) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [age, setAge] = useState(user.age);
  const [id, setId] = useState(user.id);

  return (
    <>
      <div onClick={() => setModal(true)}>
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
          <div className="flex flex-col gap-1">
            <label htmlFor="age" className="text-xs font-semibold">
              Age
            </label>
            <input
              id="age"
              type="number"
              name="age"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="rounded-md px-4 text-black py-1   border-black border"
            />
          </div>
          <input
            type="text"
            name="id"
            className="hidden"
            value={id}
            onChange={(e) => setId(Number(e.target.value))}
          />
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
