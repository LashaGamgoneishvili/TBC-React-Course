import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DatabaseUser } from "@/typings";
import DeleteUserButton from "../admin/user/DeleteUserButton";
import EditForm from "../admin/user/Edit";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function TableDemo({
  users,
  handleDelete,
}: {
  users: DatabaseUser;
  handleDelete: () => void;
}) {
  return (
    <Table>
      <TableCaption>A list of your recent users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.isArray(users) &&
          users.map((user: DatabaseUser) => (
            <TableRow key={user.user_id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.lastname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="flex justify-end text-right">
                <EditForm
                  user={user}
                  userid={user.user_id}
                  userImage={user.image}
                />
              </TableCell>
              <TableCell className="text-right">
                <DeleteUserButton id={user.user_id} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
      <TableFooter className="relative">
        <TableRow>
          <TableCell colSpan={3}></TableCell>
          <TableCell className="absolute right-0 ">
            <AlertDialog>
              <AlertDialogTrigger>Delete all</AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to delete all users?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    all users and remove their data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
