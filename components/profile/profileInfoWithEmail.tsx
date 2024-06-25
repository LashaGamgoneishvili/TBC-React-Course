"use client";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { getUserAction, updateUserAction } from "../../actions";
import toast from "react-hot-toast";

// interface User {
//   given_name: string;
//   family_name: string;
//   nickname: string;
//   name: string;
//   picture: string;
//   updated_at: string;
//   email: string;
//   email_verified: boolean;
//   sub: string;
//   sid: string;
// }

export default function ProfileInfo({
  user,
  lastFiveCharacters,
}: {
  user: GetSessionUser;
  lastFiveCharacters: string;
}) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState(user.given_name);
  const [lastname, setLastName] = useState(user.family_name);
  const [email, setEmail] = useState(user.email);

  const clinetAction = async (formData: FormData) => {
    const updateProfile = {
      name: formData.get("name"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      id: formData.get("userId"),
    };

    const response = await updateUserAction(updateProfile);

    if (response?.error) {
      toast.error(response.error);
    } else {
      setModal(false);
    }
  };

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const userInfo = await getUserAction();
        setName(userInfo.name || "There is no name");
        setLastName(userInfo.lastname || "There is no lastName");
        setEmail(userInfo.email || "There is no email");
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    }

    fetchUserInfo();
  }, []);

  return (
    <>
      <div className=" flex flex-col gap-2 justify-center rounded-md text-gray-700 shadow-md rounded-md dark:text-[#fff]">
        <p className="text-lg leading-6 h-8">{name ? name : "...Loading"}</p>
        <p className="text-lg leading-6 h-8">
          {lastname ? lastname : "...Loading"}
        </p>
        <p className="text-lg leading-6 h-8">{email ? email : "...Loading"}</p>
      </div>
      <div onClick={() => setModal(true)} className="cursor-pointer">
        <CiEdit />
      </div>
      <div>
        <div
          className={`${
            modal ? "block" : "hidden"
          } absolute h-screen w-full opacity-70 bg-gray-200 blur-md  left-0 top-0`}
          // onClick={() => setModal(false)}
        ></div>
        <div
          className={`${
            modal ? "block" : "hidden"
          } flex absolute  left-[20%] top-1/3 h-52 z-20 px-16 rounded-md bg-white  opacity-65 justify-center items-center`}
        >
          <form
            action={clinetAction}
            className="flex  items-end justify-center gap-3"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-xs font-semibold">
                Name
              </label>
              <input
                required
                minLength={2}
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
                lastName
              </label>
              <input
                required
                minLength={2}
                id="lastName"
                type="text"
                name="lastName"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                className="rounded-md px-4 text-black py-1  border-black border"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-xs font-semibold">
                Email
              </label>
              <input
                required
                id="email"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md px-4 text-black py-1  border-black border"
              />
            </div>
            <input
              type="text"
              name="userId"
              value={lastFiveCharacters}
              className="hidden"
            />
            <button
              type="submit"
              // onClick={() => setModal(false)}
              className="px-4 rounded-md  text-white bg-[#3b82f6] py-1 text-base hover:bg-sky-700  duration-500"
            >
              Save
            </button>
            <button
              onClick={() => setModal(false)}
              className="absolute -top-3 right-5 mt-4 p-2 text-2xl"
            >
              &#10005;
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
