"use client";
import { createProductActionAdmin } from "../../../actions";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import NewProductImageUpload from "./NewproductImageUpload";

export default function AddProduct() {
  const [modal, setModal] = useState(false);
  const [title, setTiTle] = useState("");
  const [description, setDescription] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [price, setPrice] = useState<number>();
  const [discount, setDiscount] = useState<number>();
  const [image, setImage] = useState("");

  useEffect(() => {
    setDisabled(false);
  }, [title, description, image, price, discount]);

  const clinetAction = async (formData: FormData) => {
    const CreateProduct = {
      title: formData.get("title"),
      description: formData.get("description"),
      price: formData.get("price"),
      discount: formData.get("discount"),
      image: formData.get("image"),
    };

    const response = await createProductActionAdmin(CreateProduct);

    if (response?.error) {
      toast.error(response.error);
      setDisabled(false);
      console.log("error", response?.error);
    } else {
      setDisabled(false);
      setModal(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setModal(true)}
        className={`bg-[#3b82f6]  hover:bg-sky-700 mt-5  duration-500 text-[#fff] p-2 rounded-md  mx-5  mb-3 px-4 `}
      >
        Create New Product
      </button>

      <div
        className={`${
          modal ? "flex" : "hidden"
        } absolute h-full  w-full opacity-70 bg-gray-200 blur-md top-32`}
        onClick={() => setModal(false)}
      ></div>
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className={`${
              modal ? "flex" : "hidden"
            }  absolute w-full top-28 justify-start items-center flex-col px-4  opacity-75 lg:px-32 sm:px-12  2xl:py-15 rounded-md`}
          >
            {/* "left-[36%] overflow-hidden top-[12%] flex  justify-center items-center gap-8 flex-col  z-20 bg-white px-32 py-10 rounded-md" */}
            <div className="relative   z-20 flex flex-col gap-3 items-center justify-start py-4 px-10 sm:py-8 sm:px-24 bg-white shadow-md rounded-md mt-8">
              <button
                onClick={() => setModal(false)}
                className="absolute  top-2 right-4  p-2 text-xl 2xl:text-2xl"
              >
                &#10005;
              </button>
              <div className="overflow-hidden ">
                <NewProductImageUpload
                  userImage={
                    "https://ajy8khmx9vtvyckn.public.blob.vercel-storage.com/favicon-87PjhGSGhmsmfwVO757pAOktOXn41P.png"
                  }
                  setImage={setImage}
                />
              </div>
              <form
                action={clinetAction}
                className="flex flex-col gap-4 items-center  text-black"
              >
                <div className="flex flex-col gap-2 ">
                  <label htmlFor="title" className="text-sm">
                    title
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTiTle(e.target.value)}
                    required
                    className="rounded-sm  py-1 px-4 border  border-gray w-64"
                  />
                </div>
                <div className="flex flex-col gap-2 ">
                  <label htmlFor="description" className="text-sm">
                    description
                  </label>
                  <input
                    id="description"
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="rounded-sm  py-1 px-4 border border-gray w-64"
                  />
                </div>
                <div className="flex flex-col gap-2 ">
                  <label htmlFor="price" className="text-sm">
                    price
                  </label>
                  <input
                    id="price"
                    type="number"
                    name="price"
                    placeholder="0"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    // required
                    className="rounded-sm  py-1 px-4 border border-gray w-64"
                  />
                </div>
                <div className="flex flex-col gap-2 ">
                  <label htmlFor="discount" className="text-sm">
                    Discount
                  </label>
                  <input
                    id="discount"
                    type="number"
                    name="discount"
                    placeholder="0"
                    value={discount}
                    onChange={(e) => setDiscount(Number(e.target.value))}
                    // required
                    className="rounded-sm  py-1 px-4 border border-gray w-64"
                  />
                </div>
                <div className="flex flex-col gap-2 ">
                  <input
                    id="image"
                    type="text"
                    name="image"
                    value={image}
                    required
                    className="rounded-sm hidden py-1 px-4 border border-gray w-64"
                  />
                </div>

                {/* <button
                  className="cursor-pointer  bg-[#3b82f6] text-white rounded-md gap-4 justify-center py-2 border border-[#fbf9ff] hover:border-[#ff2020] hover:bg-white disabled:bg-gray-500 disabled:border-none disabled:text-black hover:text-black duration-300 px-16"
                  type="submit"
                  disabled={disabled}
                  onClick={() => {
                    setTimeout(() => {
                      setDisabled(true);
                    }, 200);
                  }}
                >
                  Create User
                </button> */}

                <button
                  type="submit"
                  disabled={disabled}
                  onClick={() => {
                    setTimeout(() => {
                      setDisabled(true);
                    }, 200);
                  }}
                  className="bg-[#3b82f6] disabled:bg-gray-500  hover:bg-sky-700  duration-500 text-[#fff]  px-4 rounded-md leading-loose"
                >
                  Create New Product
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
