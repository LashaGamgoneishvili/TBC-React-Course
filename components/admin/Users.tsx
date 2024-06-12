import { getUsers } from "../../app/api/api";
import { DatabaseUser } from "../../types/types";
import DeleteUserButton from "../user/DeleteUserButton";
import AddUser from "../../components/user/AddUser";
import EditForm from "../../components/user/Edit";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Users() {
  const session = await getSession();
  const user = session?.user;
  const userId = user?.sub;
  const id = userId.slice(-5);
  const users = await getUsers();

  return (
    <div className=" bg-white w-full flex flex-col">
      <AddUser user={user} />
      <div className="px-5 ">
        {users?.rows.map((user: DatabaseUser) => (
          <div
            className="flex justify-between items-center border-b h-10 odd:bg-slate-50   even:bg-white "
            key={user.user_id}
          >
            <div className="flex gap-4 ">
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </div>
            <div className="flex items-center gap-8 ">
              <p>{user.user_id}</p>
              <EditForm user={user} userid={id} />
              <DeleteUserButton id={user.user_id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
