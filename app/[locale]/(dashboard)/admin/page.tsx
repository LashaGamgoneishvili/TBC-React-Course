import { getUsers } from "../../../api/api";
import { User } from "../../../../types/types";
import Button from "../../../../components/user/Button";
import AddUser from "../../../../components/user/AddUser";
import EditForm from "../../../../components/user/Edit";
import { getSession } from "@auth0/nextjs-auth0";

export default async function UsersPage() {
  const session = await getSession();
  const user = session?.user;
  const userId = user?.sub;
  const id = userId.slice(-5);
  const users = await getUsers();
  return (
    <div className=" bg-white w-full flex flex-col">
      <AddUser />
      <div className="px-5 ">
        {users?.rows.map((user: User) => (
          <div
            className="flex justify-between items-center border-b h-10 odd:bg-slate-50   even:bg-white "
            key={user.id}
          >
            <div className="flex gap-4 ">
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              <p>{user.age}</p>
            </div>
            <div className="flex items-center gap-8 ">
              <EditForm user={user} />
              <Button id={id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
