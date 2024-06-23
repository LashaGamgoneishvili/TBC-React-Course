"use client";
import { AnimatePresence, motion } from "framer-motion";
import { GoPerson } from "react-icons/go";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";
import { CiLogin } from "react-icons/ci";

function AuthDropdown({ user }: { user: any }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <GoPerson />
      <div className="absolute top-5 hover:scale-110 left-0 text-black right-0  h-6 bg-transparent"></div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 15 }}
            exit={{ opacity: 0, y: 0 }}
            style={{ translateX: "-25%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className=" top-0 absolute -translate-x-[15%]  flex flex-col">
              {!user && open ? (
                <div className="flex relative flex-col border-t-2 border-[#ff2020] rounded-md shadow-md bg-white dark:text-white dark:bg-black text-base p-2">
                  <div className="absolute  left-1/4 top-0 h-2 w-2 -translate-y-1/2 rotate-45 -z-10 bg-[#ff2020]"></div>

                  <a
                    title="login"
                    href="/api/auth/login"
                    className="flex gap-3 items-center  hover:text-red-500 duration-300"
                  >
                    <CiLogin /> <span>Login</span>
                  </a>
                </div>
              ) : (
                <div className="flex relative flex-col border-t-2 gap-1 border-[#ff2020] rounded-md shadow-md bg-white dark:text-white dark:bg-black text-base p-2">
                  <div className="absolute  left-1/4 top-0 h-2 w-2 -translate-y-1/2 rotate-45 -z-10 bg-[#ff2020]"></div>
                  <div className="flex items-center hover:scale-105 gap-2 hover:text-red-500 duration-300">
                    <Link href="/profile">
                      <GoPerson />
                    </Link>
                    <Link href="/profile">Profile</Link>
                  </div>
                  <a
                    title="logout"
                    href="/api/auth/logout"
                    className="flex gap-2 items-center hover:scale-105 hover:text-red-500 duration-300"
                  >
                    <CiLogout /> <span>Logout</span>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AuthDropdown;
