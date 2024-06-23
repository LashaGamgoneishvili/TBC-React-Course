import { getAllBlogAction } from "../../../../actions";
import { getSession } from "@auth0/nextjs-auth0";
import MainBlogPage from "../../../../components/blog/MainBogPage";

export default async function Blog() {
  const data: BlogPageObject = await getAllBlogAction();

  const session = await getSession();
  const user = session?.user as GetSessionUser | undefined;
  const lastFiveCharacters = user?.sub.slice(-5) || "";

  return (
    <MainBlogPage
      data={data}
      lastFiveCharacters={lastFiveCharacters}
      user={user}
    />
  );
}
