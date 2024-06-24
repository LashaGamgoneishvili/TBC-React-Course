import { getAllBlogAction } from "../../../../actions";
import { getSession } from "@auth0/nextjs-auth0";
import MainBlogPage from "../../../../components/blog/MainBogPage";

// export async function generateStaticParams() {
//   try {
//     const response = await getAllBlogAction();

//     if (!response || typeof response.json !== "function") {
//       throw new Error("Response is not a valid JSON response");
//     }

//     const products: BlogObject = await response.json();

//     const paths = products.result.map((product) => ({
//       locale: "en",
//       product_id: product.product_id.toString(),
//     }));
//     const paths2 = products.result.map((product) => ({
//       locale: "ka",
//       product_id: product.product_id.toString(),
//     }));

//     return paths.concat(paths2);
//   } catch (error) {
//     console.error("Failed to generate static params:", error);
//     return [];
//   }
// }

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
