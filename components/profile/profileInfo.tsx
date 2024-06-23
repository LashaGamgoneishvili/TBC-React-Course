"use client";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { getUserAction, updateUserAction } from "../../actions";
import toast from "react-hot-toast";

export default function ProfileInfo({
  user,
  lastFiveCharacters,
}: {
  user: GetSessionUser;
  lastFiveCharacters: string;
}) {
  const [modal, setModal] = useState(false);
  // const [success, setSuccess] = useState(true);
  const [name, setName] = useState("...Loading");
  const [lastname, setLastName] = useState("...Loading");
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
      console.log("error", response?.error);
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
        setEmail(userInfo.email || "There is no email address");
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    }

    fetchUserInfo();
  }, []);

  return (
    <>
      <div className=" flex relative  flex-col  sm:gap-2 text-gray-700">
        <p className="sm:text-lg leading-6 sm:h-8">
          {name ? name : "...Loading"}
        </p>
        <p className="sm:text-lg leading-6 sm:h-8">
          {lastname ? lastname : "...Loading"}
        </p>
        <p className="sm:text-lg leading-6 h-8">
          {email ? email : "...Loading"}
          <div
            onClick={() => {
              setModal(true);
            }}
            className="absolute top-2 right-3 cursor-pointer"
          >
            <CiEdit />
          </div>
        </p>
      </div>
      <div
        className={modal ? "absolute h-screen w-full top-0 left-0" : "hidden"}
      >
        <div
          className={`${
            modal ? "flex" : "hidden"
          } absolute h-screen w-full bg-gray-200 blur-md  `}
          onClick={() => setModal(false)}
        ></div>
        <div
          className={`${
            modal ? "flex" : "hidden"
          } flex absolute sm:left-[20%] w-auto left-[7%] top-1/3  h-auto sm:p-16 p-2 text-sm xl:left-[40%] 2xl:left-[15%] lg:left-[30%]  z-20  rounded-md bg-white justify-center items-center`}
        >
          <form
            action={clinetAction}
            className="flex flex-col 2xl:flex-row py-3 items-end justify-center gap-3"
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
                lastName
              </label>
              <input
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
              onClick={() => setModal(false)}
              className="px-4 rounded-md  text-white bg-[#3b82f6] py-1 text-base hover:bg-sky-700  duration-500"
            >
              Save
            </button>
            <button
              onClick={() => setModal(false)}
              className="absolute sm:-top-3 sm:right-5 -top-4 right-3 mt-4 p-2 text-lg sm:text-2xl"
            >
              &#10005;
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
