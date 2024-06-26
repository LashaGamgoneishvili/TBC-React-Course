import { getAllshippingProduct } from "@/app/api/api";
import { DataTableDemo } from "@/components/ordersTable/DataTable";

export default async function Orders() {
  const datas = await getAllshippingProduct();
  const data = datas?.rows;
  console.log("datac", data);
  return (
    <div className=" mx-auto py-10">
      {/* <DataTable columns={columns} data={data} /> */}
      <DataTableDemo data={data} />
    </div>
  );
}
