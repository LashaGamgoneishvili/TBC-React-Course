import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import LanguageChanger from "../LanguageChanger";
import ThemeSwitch from "./ThemeSwitch";
import AuthDropdown from "./AuthDropdown";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Cart from "./Cart";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import dropDown from "../../public/Assets/down-arrow-svgrepo-com.svg";
import { AnimatePresence, motion } from "framer-motion";

type StickyHeaderProps = {
  translations: {
    home: string;
    shop: string;
    about: string;
    latest: string;
    blog: string;
    pages: string;
    contact: string;
    productList: string;
    productDetails: string;
    blob: string;
    blogDetails: string;
    login: string;
    cart: string;
    element: string;
    confirmation: string;
    productCheckout: string;
  };
};

type User = {
  sub: string;
  name?: string;
  email?: string;
  picture?: string;
  role: string[];
};

function BurgerManue({ translations }: StickyHeaderProps) {
  const [active, setActive] = useState(false);
  const [blogdropDown, setBlogDropDown] = useState(false);
  const [latestdropDown, setLatestdropDown] = useState(false);
  const [pagesdropDown, setPagesdropDown] = useState(false);
  const { user } = useUser();
  const typedUser = user as User | undefined;

  return (
    <div className="">
      <div
        className="text-2xl lg:hidden"
        onClick={() => setActive((active) => !active)}
      >
        <RxHamburgerMenu />
      </div>

      {active && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute right-0 top-0 bg-white opacity-100 w-full h-screen"
          >
            <div className="flex gap-4 z-20 justify-between items-center p-8">
              <div className="flex justify-center items-center gap-4 text-xl ">
                {typedUser && typedUser.role[0] === "admin" && (
                  <div className=" cursor-pointer p-1   [transition:all_ease_0.2s] hover:text-[#ff2020] hover:duration-300">
                    <Link href="/admin">
                      <MdOutlineAdminPanelSettings />
                    </Link>
                  </div>
                )}
                <div className=" z-20 relative">
                  <AuthDropdown user={user} />
                </div>
                {user && (
                  <div className="hover:text-red-500">
                    <Cart />
                  </div>
                )}
              </div>
              <LanguageChanger />
              <div className=" flex justify-start rounded-md gap-5  items-center">
                <ThemeSwitch />
                <div onClick={() => setActive((active) => !active)}>
                  <IoMdClose />
                </div>
              </div>
            </div>
            <nav className="">
              <div className="flex flex-col  items-center justify-center gap-8">
                <div
                  className=" cursor-pointer p-1   hover:text-[#ff2020] hover:duration-300"
                  onClick={() => setActive(false)}
                >
                  <Link href="/">{translations.home}</Link>
                </div>
                <div
                  className=" cursor-pointer p-1    hover:text-[#ff2020] hover:duration-300"
                  onClick={() => setActive(false)}
                >
                  <Link href="/shop">{translations.shop}</Link>
                </div>

                <div
                  className="hover:text-[#ff2020] hover:duration-300 cursor-pointer"
                  onClick={() => setActive(false)}
                >
                  {translations.about}
                </div>
                <div className="flex flex-col gap-3 justify-center items-center">
                  <div
                    className="flex gap-2 cursor-pointer"
                    onClick={() => setLatestdropDown((drop) => !drop)}
                  >
                    <p>{translations.latest}</p>
                    <Image
                      src={dropDown}
                      width={10}
                      height={10}
                      alt="dropDown-icon"
                    />
                  </div>
                  <AnimatePresence>
                    {latestdropDown && (
                      <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 15 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={
                          latestdropDown
                            ? `flex flex-col  gap-2 justify-center items-center `
                            : "hidden"
                        }
                      >
                        <p className="hover:text-[#ff2020] duration-300 cursor-pointer border-b pb-[2px] hover:scale-[1.02]  hover:pb-1 border-[#ff2020]">
                          {translations.productList}
                        </p>
                        <p className="hover:text-[#ff2020] duration-300 cursor-pointer border-b pb-[2px] hover:scale-[1.02] hover:pb-1 border-[#ff2020]">
                          {translations.productDetails}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center">
                  <div
                    className="flex gap-2 cursor-pointer"
                    onClick={() => setBlogDropDown((drop) => !drop)}
                  >
                    <p>{translations.blog}</p>
                    <Image
                      src={dropDown}
                      width={10}
                      height={10}
                      alt="dropDown-icon"
                    />
                  </div>
                  <AnimatePresence>
                    {blogdropDown && (
                      <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 15 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={
                          blogdropDown
                            ? `flex flex-col gap-2 justify-center items-center `
                            : "hidden"
                        }
                      >
                        <p className="hover:text-[#ff2020] duration-300 cursor-pointer border-b pb-[2px] hover:scale-[1.02]  hover:pb-1 border-[#ff2020]">
                          {translations.blob}
                        </p>
                        <p className="hover:text-[#ff2020] duration-300 cursor-pointer border-b pb-[2px] hover:scale-[1.02] hover:pb-1 border-[#ff2020]">
                          {translations.blogDetails}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center">
                  <div
                    className="flex gap-2 cursor-pointer"
                    onClick={() => setPagesdropDown((drop) => !drop)}
                  >
                    <p>{translations.pages}</p>
                    <Image
                      src={dropDown}
                      width={10}
                      height={10}
                      alt="dropDown-icon"
                    />
                  </div>
                  <AnimatePresence>
                    {pagesdropDown && (
                      <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 15 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={
                          pagesdropDown
                            ? `flex flex-col gap-2 justify-center items-center `
                            : "hidden"
                        }
                      >
                        <Link
                          href="/shop"
                          className="hover:text-[#ff2020] duration-300 cursor-pointer border-b pb-[2px] hover:scale-[1.02]   border-[#ff2020]"
                        >
                          {translations.login}
                        </Link>
                        <Link
                          href="/checkout"
                          className="hover:text-[#ff2020] duration-300 cursor-pointer border-b pb-[2px] hover:scale-[1.02]  border-[#ff2020]"
                        >
                          {translations.cart}
                        </Link>
                        <Link
                          href="/element"
                          className="hover:text-[#ff2020] duration-300 cursor-pointer border-b pb-[2px] hover:scale-[1.02]  border-[#ff2020]"
                        >
                          {translations.element}
                        </Link>
                        <Link
                          href="/confirmation"
                          className="hover:text-[#ff2020] duration-300 cursor-pointer border-b pb-[2px] hover:scale-[1.02]  border-[#ff2020]"
                        >
                          {translations.confirmation}
                        </Link>
                        <Link
                          href="/productCheckout"
                          className="hover:text-[#ff2020] duration-300 cursor-pointer border-b pb-[2px] hover:scale-[1.02]  border-[#ff2020]"
                        >
                          {translations.productCheckout}
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div
                  className=" cursor-pointer p-1   [transition:all_ease_0.2s]  hover:duration-300"
                  onClick={() => setActive(false)}
                >
                  {translations.pages}
                </div>
                <div
                  className=" cursor-pointer p-1   [transition:all_ease_0.2s] hover:text-[#ff2020] hover:duration-300"
                  onClick={() => setActive(false)}
                >
                  <Link href="/contact">{translations.contact}</Link>
                </div>
              </div>
            </nav>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default BurgerManue;
