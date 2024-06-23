import { getBlogAction } from "../../../../../actions";
import { getSession } from "@auth0/nextjs-auth0";
import MainBlogDetails from "../../../../../components/blog/MainBlogDetails";
import { getUsers } from "../../../../api/api";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Blog Details" },
};

export default async function Blog({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: BlogPageObject = await getBlogAction(id);
  const response = await getUsers();
  const users = response.rows;

  const session = await getSession();
  const user = session?.user as GetSessionUser | undefined;
  const lastFiveCharacters = user?.sub.slice(-5) || "";

  return (
    <MainBlogDetails
      data={data}
      lastFiveCharacters={lastFiveCharacters}
      user={user}
      id={id}
      users={users}
    />
  );
}
