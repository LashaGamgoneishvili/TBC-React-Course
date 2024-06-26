"use client";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { ShippingTypes } from "@/typings";

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
            <div key={item.id} className="mb-6">
              <div className="relative mb-4">
                <p
                  className="absolute top-2 hover:text-[#ff2020] duration-200 cursor-pointer right-4 text-lg"
                  onClick={() => handleDelete(item.user_id, item.product_id)}
                >
                  <MdDelete />
                </p>
                <p className="absolute top-2 hover:text-[#ff2020] duration-200 cursor-pointer left-4 text-base">
                  <FiEdit />
                </p>
              </div>
              <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-2 px-4">Product Image</th>
                    <th className="py-2 px-4">Title</th>
                    <th className="py-2 px-4">Description</th>
                    <th className="py-2 px-4">Price</th>
                    <th className="py-2 px-4">Discount</th>
                    <th className="py-2 px-4">Quantity</th>
                    <th className="py-2 px-4">User ID</th>
                    <th className="py-2 px-4">Product ID</th>
                    <th className="py-2 px-4">User Image</th>
                    <th className="py-2 px-4">User Name</th>
                    <th className="py-2 px-4">User Lastname</th>
                    <th className="py-2 px-4">User Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4">
                      <Image
                        src={item.product_image}
                        alt={item.title}
                        width={50}
                        height={50}
                        className="rounded"
                      />
                    </td>
                    <td className="py-2 px-4">{item.title}</td>
                    <td className="py-2 px-4">{item.description}</td>
                    <td className="py-2 px-4">${item.price}</td>
                    <td className="py-2 px-4">${item.discount}</td>
                    <td className="py-2 px-4">{item.quantity}</td>
                    <td className="py-2 px-4">{item.user_id}</td>
                    <td className="py-2 px-4">{item.product_id}</td>
                    <td className="py-2 px-4">
                      <Image
                        src={item.user_image}
                        alt={`${item.user_name} ${item.user_lastname}`}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </td>
                    <td className="py-2 px-4">{item.user_name}</td>
                    <td className="py-2 px-4">{item.user_lastname}</td>
                    <td className="py-2 px-4">{item.user_email}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
    </div>
  );
}

export default ShippingList;
