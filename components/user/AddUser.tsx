"use client";
import { createUserAction } from "../../actions";
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
        className={`bg-[#3b82f6]  hover:bg-sky-700  duration-500 text-[#fff] p-2 rounded-md w-32 mx-5  mb-3 px-4 `}
      >
        Add User
      </button>

      <div
        className={`${
          modal ? "block" : "hidden"
        } absolute h-screen w-full opacity-70 bg-gray-200 blur-md left-0 top-0`}
        onClick={() => setModal(false)}
      ></div>
      <div
        className={`${
          modal ? "block" : "hidden"
        }  absolute left-[36%] top-[17%] flex  justify-center items-center gap-8 flex-col  z-20 bg-white px-32 py-20 rounded-md `}
      >
        <h1 className="text-xl">Add User</h1>
        <form
          action={createUserAction}
          className="flex flex-col gap-4 items-center  text-black"
        >
          <div className="flex flex-col gap-2 ">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="rounded-md py-1 px-4 border  border-black"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              required
              className="rounded-md py-1 px-4 border border-black"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              name="age"
              required
              className="rounded-md py-1 px-4 border border-black"
            />
          </div>
          <button
            type="submit"
            onClick={() => setModal(false)}
            className="bg-[#3b82f6]  hover:bg-sky-700  duration-500 text-[#fff]  px-4 rounded-md leading-loose"
          >
            Create User
          </button>
        </form>
      </div>
    </>
  );
}

export default AddUser;
