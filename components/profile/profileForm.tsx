"use client";
import { useState } from "react";

export default function ProfileForm() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  return (
    <div>
      <form className="flex flex-col items-center justify-start gap-4 p-5">
        <input
          type="password"
          placeholder="New Password"
          className="rounded-lg border-2  px-5 py-2"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          className=" rounded-lg border-2 px-5 py-2 "
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        <button className=" rounded-lg border-2  px-10 py-1  text-black transition-all duration-300 ease-in-out hover:border-black  ">
          Save
        </button>
      </form>
    </div>
  );
}
