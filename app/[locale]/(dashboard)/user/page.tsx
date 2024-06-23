import Users from "../../../../components/admin/Users";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Edit Users" },
  description: "You can edit user info",
};
export default function UsersPage() {
  return <Users />;
}
