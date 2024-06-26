import { getAllshippingProduct } from "@/app/api/api";
import { getSession } from "@auth0/nextjs-auth0";

import { Metadata } from "next";
import { ShippingTypes } from "@/typings";
import { DataTableDemo } from "@/components/ordersTable/DataTable";

export const metadata: Metadata = {
  title: { absolute: "Go Shopping" },
  description: "See All information about User",
};

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

export default async function DemoPage() {
  const session = await getSession();
  const user: User | undefined = session?.user as User | undefined;
  let adminData: Array<ShippingTypes> = [];

  if (user) {
    if (user.role[0] === "admin") {
      const shippingResponse = await getAllshippingProduct();
      adminData = shippingResponse.rows;
    }
  }
  const datas = await getAllshippingProduct();
  const data = datas?.rows;
  console.log("datac", data);

  // async function handleDelete(userid: string, productId: string) {
  //   "use server";

  //   await shippingProductDelete(userid, productId);
  // }

  return (
    <div className="container mx-auto pt-12 ">
      {Array.isArray(datas) || adminData ? (
        <>
          <h1 className="text-3xl font-bold mb-6 ">
            Information About Your order
          </h1>
          {/* <DataTableDemo data={product} /> */}
          {/* <TableDemo /> */}
          <DataTableDemo data={data} />

          {/* <ShippingList
            handleDelete={handleDelete}
            datas={product}
            adminData={adminData}
            user={user}
          /> */}
        </>
      ) : (
        <div className="flex justify-center items-start mt-36  h-screen w-full">
          <h1 className="text-xl md:text-[52px]">There is No Orders</h1>
        </div>
      )}
    </div>
  );
}
