"use client";
import { addCartFunction } from "../../actions";
import { useAppContext } from "../../app/context/index";
import { BASE_URL } from "../../app/api/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck } from "react-icons/fa6";

export default function AddCartButton({
  productId,
  role,
}: {
  productId: number;
  role: string[] | unknown;
}) {
  const [isDisabled, setIsDisabled] = useState(false);
  const { state, setState } = useAppContext();
  const router = useRouter();

  let roleArr: string[] = [];
  if (Array.isArray(role)) {
    roleArr = [...role];
  }

  const handleClick = () => {
    setIsDisabled(true);

    console.log("productId", productId);
    // Your click handling logic here
    if (roleArr[0] !== "admin" && productId) {
      console.log("useAppContext-state", state);
      addCartFunction(productId);
      setState((prev: number) => Number(prev) + 1);
    }
    if (roleArr[0] === "admin") {
      alert("Admin cann't add product in cart");
    }
    if (roleArr[0] !== "admin" && !productId) {
      router.push(`${BASE_URL}/api/auth/login`);
    }
    // Re-enable the button after 1 second
    setTimeout(() => {
      setIsDisabled(false);
    }, 1000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
      >
        {!isDisabled ? (
          <button
            className="text-xl   dark:text-black text-white "
            onClick={handleClick}
            disabled={isDisabled}
          >
            Add to cart
          </button>
        ) : (
          <div className=" dark:bg-[#282c34] w-full flex justify-center items-center overflow-hidden">
            <div className="before:h-10   after:dark:bg-[#282c34] before:bottom-5 before:right-5 before:origin-bottom-right  before:w-28 before:inset-22 before:absolute before:bg-[#fff] after:dark:shadow-[#dc2626] after:dark:shadow-xl after:dark:animate-spin   dark:before:bg-transparent  relative before:animate-spin rounded-full  overflow-hidden h-10 w-10  flex items-center justify-center  after:bg-red-700 after:absolute   after:inset-0.5 after:rounded-full">
              <div className=" bg-[#ff2020]rounded-full h-32 w-32 flex items-center justify-center ">
                <button className="z-20 text-gray-200">
                  <FaCheck />
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
