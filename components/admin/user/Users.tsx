import { deleteAllusers, getUsers } from "../../../app/api/api";
import AddUser from "./AddUser";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import { TableDemo } from "@/components/ordersTable/TableDemo";

export default async function Users() {
  const session = await getSession();
  const userSession = session?.user;
  const users = await getUsers();

  if (userSession && userSession?.role.length < 1) {
    redirect("/");
  }
  async function handleDelete() {
    "use server";
    await deleteAllusers();
  }
  return (
    <div className=" bg-white w-full h-full flex flex-col py-8 ">
      <AddUser />
      <div className="px-5 flex flex-col gap-2 sm:gap-0">
        {users && <TableDemo users={users.rows} handleDelete={handleDelete} />}
      </div>
    </div>
  );
}
