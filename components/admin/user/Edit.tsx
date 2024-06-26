"use client";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { updateUserAction } from "../../../actions";
import UploadUserImage from "./UploadUserImage";
import toast from "react-hot-toast";
import { DatabaseUser } from "@/typings";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function EditForm({
  user,
  userid,
  userImage,
}: {
  user: DatabaseUser;
  userid: string;
  userImage: string;
}) {
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
    const users = response.users.rows;
    console.log("response", response);
    if (users.length > 0) {
      toast.success("User Updated Successfully");
    }

    if (response?.error) {
      toast.error(response.error);
      console.log("error", response?.error);
    }
  };

  useEffect(() => {
    setDisable(false);
  }, [name, lastName, email, image]);

  return (
    <>
      <Dialog>
        <DialogTrigger className="cursor-pointer">
          <CiEdit />
        </DialogTrigger>
        <DialogContent className="w-[650px]">
          <DialogTitle className="mb-2">You are updating user</DialogTitle>
          <DialogHeader className="h-auto py-16 w-auto">
            <DialogDescription>
              <div className="flex h-full w-full ">
                <UploadUserImage userImage={image} setImage={setImage} />
                <form
                  action={clinetAction}
                  className="flex flex-col gap-3 sm:px-8 "
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
                    className="cursor-pointer  bg-[#3b82f6] text-white rounded-md gap-4 justify-center py-2 border border-[#fbf9ff] hover:border-[#ff2020] hover:bg-white disabled:bg-gray-500 disabled:border-none disabled:text-black hover:text-black duration-300 px-16"
                  >
                    Save
                  </button>
                </form>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
