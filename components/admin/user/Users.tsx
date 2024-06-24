import { getUsers } from "../../../app/api/api";

import AddUser from "./AddUser";
import DeleteUserButton from "./DeleteUserButton";
import EditForm from "./Edit";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export default async function Users() {
  const session = await getSession();
  const userSession = session?.user;
  const userId = userSession?.sub;
  const id = userId.slice(-5);
  console.log(id);
  const users = await getUsers();

  if (userSession && userSession?.role.length < 1) {
    redirect("/");
  }

  return (
    <div className=" bg-white w-full h-full flex flex-col py-8 ">
      <AddUser />
      <div className="px-5 flex flex-col gap-2 sm:gap-0">
        {users?.rows.map((user: DatabaseUser) => (
          <div
            className="flex justify-between flex-col sm:flex-row py-2 pr-2 sm:py-2 gap-2 sm:gap-0  sm:items-center border-b sm:h-10 h-full odd:bg-slate-50   even:bg-white "
            key={user.user_id}
          >
            <div className="flex sm:gap-4 gap-1 text-sm xm:text-lg flex-wrap">
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </div>
            <div className="flex items-center gap-8 text-sm sm:text-md pr-2 ">
              <p>{user.user_id}</p>
              <EditForm
                user={user}
                userid={user.user_id}
                userImage={user.image}
              />
              <DeleteUserButton id={user.user_id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
