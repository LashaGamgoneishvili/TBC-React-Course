"use client";
import { createUserAction } from "../actions";
import { useState } from "react";

function AddUser() {
  const [modal, setModal] = useState(false);
  function handleClick() {
    setModal(true);
  }

  return (
    <>
      <button
        onClick={handleClick}
        className={` bg-violet-600 p-2 rounded-md w-32 mx-5  mb-3 px-4 text-white`}
      >
        Add User
      </button>

      <div
        className={`${
          modal ? "block" : "hidden"
        } absolute h-screen w-full  z-10  opacity-70 bg-gray-200 blur-md `}
        onClick={() => setModal(false)}
      ></div>
      <div
        className={`${
          modal ? "block" : "hidden"
        }  absolute left-[36%] flex  justify-center items-center gap-8 flex-col  z-20  bg-violet-700 p-20 rounded-md `}
      >
        <h1 className="text-xl">Add User</h1>
        <form
          action={createUserAction}
          className="flex flex-col gap-4 items-center  text-black"
        >
          <input type="text" name="name" required className="rounded-sm " />
          <input type="text" name="email" required className="rounded-sm" />
          <input type="number" name="age" required className="rounded-sm" />
          <button
            type="submit"
            onClick={() => setModal(false)}
            className="bg-red-400 text-white px-4 rounded-md leading-loose"
          >
            Create User
          </button>
        </form>
      </div>
    </>
  );
}

export default AddUser;
