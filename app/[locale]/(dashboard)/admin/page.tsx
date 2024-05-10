import { getUsers } from "../../../../api";
import { User } from "../../../../types/types";
import { createUserAction } from "../../../../actions";
import Button from "../../../../components/Button";

export default async function UsersPage() {
  const users = await getUsers();
  return (
    <div className="px-5 bg-slate-400 h-screen w-full flex justify-center  flex-col">
      <form
        action={createUserAction}
        className="flex flex-col gap-4 items-center  text-black"
      >
        <input type="text" name="name" required />
        <input type="text" name="email" required />
        <input type="number" name="age" required />
        <button type="submit" className="bg-red-300 text-white">
          Create User
        </button>
      </form>

      {users.map((user: User) => (
        <div className="flex justify-between border-b" key={user.id}>
          <div className="flex gap-4 border-b">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.age}</p>
          </div>

          <Button id={user.id} />
        </div>
      ))}
    </div>
  );
}
