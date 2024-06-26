import { getCommentsByProduct, getProductComment } from "@/app/api/api";
import { getProductAction, getUserAction } from "../../../../../actions";
import ProductDetails from "../../../../../components/productDetails/ProductDetails";
import { Metadata } from "next";
import Comment from "../../../../../components/productDetails/Comment";

export const metadata: Metadata = {
  title: { absolute: "Product Details" },
  description: "See All information about Product",
};
export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const response = await getProductAction(id);
  const userData = await getUserAction();
  const userImage = userData?.image;
  const userId = userData?.user_id;
  const ProductComment = await getProductComment(userId, id);
  const allUsersComment = await getCommentsByProduct(id);
  const userComment = ProductComment.comment;
  console.log("userData", userData);
  const data = response.result;
  return (
    <div className="flex flex-col gap-8 items-center h-screen w-full justify-center mt-8   ">
      {data && userData && (
        <ProductDetails
          data={data}
          id={id}
          userImage={userImage}
          userComment={userComment}
        />
      )}
      {allUsersComment && userData ? (
        <Comment allUsersComment={allUsersComment} />
      ) : (
        <h1>Sin in to see the comments</h1>
      )}
    </div>
  );
}
