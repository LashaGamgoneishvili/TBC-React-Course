"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Blog({ children }: { children: string }) {
  return (
    <div className="flex justify-center items-center  px-3 py-12">
      <FlyoutLink href={`/shop`} FlyoutContent={List}>
        {children}
      </FlyoutLink>
    </div>
  );
}

const FlyoutLink = ({ children, href, FlyoutContent }: any) => {
  const [open, setOpen] = useState(false);
  console.log(href);
  const showFlyout = open && FlyoutContent;
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className=" relative h-fit w-fit "
    >
      <div className="relative  hover:text-[#ff2020] duration-300">
        {children}
        {/* TODO RENDER underline animation thingy */}
        {/* <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className=" absolute -bottom-2 -left-2 -right-2 h-1 origin-left  rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        /> */}
      </div>
      {/* TODO RENDER layout content */}
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-25%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 gap-12 z-20 dark:bg-black  top-12 bg-white"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent"></div>
            <div className="absolute  left-1/4 top-0 h-2 w-2 -translate-y-1/2 rotate-45 -z-10 bg-[#ff2020]"></div>

            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function List() {
  const { t } = useTranslation();
  return (
    <div className="inline-block">
      <ul className="flex flex-col w-auto gap-2 border-t-2 border-[#ff2020] z-10 p-4 bg-white shadow-md dark:bg-black rounded-md">
        <li className="whitespace-nowrap hover:scale-[1.02] hover:text-[#ff5c4b] cursor-pointer duration-200">
          <Link href="/blogs">{t("header:blog")}</Link>
        </li>
        <li className="whitespace-nowrap hover:scale-[1.02] hover:text-[#ff5c4b] cursor-pointer duration-200">
          {t("header:blog-details")}
        </li>
      </ul>
    </div>
  );
}
