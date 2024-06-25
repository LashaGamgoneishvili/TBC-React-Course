"use client";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useRouter } from "next/navigation";

interface User {
  role: string[];
  nickname: string;
  name: string;
  picture: string;
  updated_at: string;
  email: string;
  email_verified: false;
  sub: string;
  sid: string;
}

type Props = {
  handleDelete: (userId: string, productId: string) => void;
  datas: ShippingTypes | { message: string };
  adminData: ShippingTypes[];
  user: User | undefined;
};

function ShippingList({ handleDelete, datas, adminData, user }: Props) {
  const router = useRouter();

  console.log("adminData", adminData);

  return (
    <div className=" grid gap-4 ">
      {Array.isArray(datas) && user?.role[0] !== "admin"
        ? datas.map((item: ShippingTypes) => (
            <div
              key={item.id}
              className="max-w-sm py-6 px-16 flex justify-center items-center flex-col  mx-auto bg-white shadow-lg rounded-lg overflow-hidden  mb-6"
            >
              <div
                className="relative cursor-pointer "
                onClick={() => router.push(`/product${item.product_id}`)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={250}
                  height={250}
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <p className="text-xl font-semibold">Price: ${item.price}</p>
                <p className="text-red-500">Discount: ${item.discount}</p>
                <p className="text-gray-700">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))
        : adminData &&
          adminData.map((item: ShippingTypes) => (
            <div
              key={item.id}
              className="max-w-sm relative py-6 px-16 flex justify-center items-center flex-col  mx-auto bg-white shadow-lg rounded-lg overflow-hidden  mb-6"
            >
              <p
                className="absolute top-2 hover:text-[#ff2020] duration-200 cursor-pointer right-4 text-lg"
                onClick={() => handleDelete(item.user_id, item.product_id)}
              >
                <MdDelete />
              </p>
              <p className="absolute top-2 hover:text-[#ff2020] duration-200 cursor-pointer left-4 text-base">
                <FiEdit />
              </p>
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={250}
                  height={250}
                />
              </div>
              <div className="p-4 flex flex-col gap-1">
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <p className="text-xl font-semibold">Price: ${item.price}</p>
                <p className="text-red-500">Discount: ${item.discount}</p>
                <p className="text-gray-700">Quantity: {item.quantity}</p>
                <div className="flex gap-2  justify-around">
                  <p className="text-gray-400">User ID: {item.user_id}</p>
                  <p className="text-gray-400">Product ID: {item.product_id}</p>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}

export default ShippingList;
