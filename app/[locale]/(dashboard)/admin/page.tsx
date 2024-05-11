import { getUsers } from "../../../../api";
import { User } from "../../../../types/types";
import Button from "../../../../components/Button";
import AddUser from "../../../../components/AddUser";
import EditForm from "../../../../components/Edit";
export default async function UsersPage() {
  const users = await getUsers();
  return (
    <div className=" bg-slate-400 h-screen w-full flex justify-center  flex-col">
      <AddUser />
      <div className="px-5">
        {users.rows.map((user: User) => (
          <div className="flex justify-between border-b" key={user.id}>
            <div className="flex gap-4 border-b">
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              <p>{user.age}</p>
            </div>
            <div className="flex items-center gap-8 ">
              <EditForm user={user} />
              <Button id={user.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
