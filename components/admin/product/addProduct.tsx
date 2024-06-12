"use client";
import { createProductActionAdmin } from "../../../actions";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AddProduct() {
  const [modal, setModal] = useState(false);
  const [title, setTiTle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [image, setImage] = useState("");
  // const [id, setId] = useState("");

  function handleClick() {
    setModal(true);
  }

  function handleSubmit() {
    setModal(false);
  }

  return (
    <>
      <button
        onClick={handleClick}
        className={`bg-[#3b82f6]  hover:bg-sky-700  duration-500 text-[#fff] p-2 rounded-md  mx-5  mb-3 px-4 `}
      >
        Create New Product
      </button>

      <div
        className={`${
          modal ? "block" : "hidden"
        } absolute h-screen w-full opacity-70 bg-gray-200 blur-md left-0 top-0`}
        onClick={() => setModal(false)}
      ></div>
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className={`${
              modal ? "block" : "hidden"
            }  absolute left-[36%] top-[15%] flex  justify-center items-center gap-8 flex-col  z-20 bg-white px-32 py-20 rounded-md `}
          >
            <button
              onClick={() => setModal(false)}
              className="absolute right-5 top-0 mt-4 p-2 text-xl"
            >
              &#10005;
            </button>
            <h1 className="text-xl">Add User</h1>
            <form
              action={createProductActionAdmin}
              className="flex flex-col gap-4 items-center  text-black"
            >
              <div className="flex flex-col gap-2 ">
                <label htmlFor="title">title</label>
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
                <label htmlFor="description">description</label>
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
                <label htmlFor="price">price</label>
                <input
                  id="price"
                  type="text"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  className="rounded-sm  py-1 px-4 border border-gray w-64"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label htmlFor="discount">Discount</label>
                <input
                  id="discount"
                  type="text"
                  name="discount"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  required
                  className="rounded-sm  py-1 px-4 border border-gray w-64"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label htmlFor="image">Image-Url</label>
                <input
                  id="image"
                  type="text"
                  name="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                  className="rounded-sm  py-1 px-4 border border-gray w-64"
                />
              </div>
              {/* <div className="flex flex-col gap-2 ">
                <label htmlFor="id">Product-Id</label>
                <input
                  id="id"
                  type="text"
                  name="id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  required
                  className="rounded-sm  py-1 px-4 border border-gray w-64"
                />
              </div> */}

              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-[#3b82f6]  hover:bg-sky-700  duration-500 text-[#fff]  px-4 rounded-md leading-loose"
              >
                Create New Product
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
