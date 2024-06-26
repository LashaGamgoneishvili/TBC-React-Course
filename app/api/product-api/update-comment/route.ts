import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { comment, userId, productId } = body;

  const lastFiveCharacters = userId.slice(-5) || "";

  console.log(
    "comment, userId, productId",
    comment,
    lastFiveCharacters,
    productId
  );

  try {
    // Ensure all required fields are provided
    if (!comment || !lastFiveCharacters || !productId) {
      throw new Error(
        "comment, lastFiveCharacters, and productId are required"
      );
    }

    // Check if the comment already exists for the given user and product
    const result = await sql`
      SELECT comment_id
      FROM comments
      WHERE user_id = ${lastFiveCharacters} AND product_id = ${productId}
    `;

    if (result.rows.length > 0) {
      // If the comment exists, update it
      const commentId = result.rows[0].comment_id;
      await sql`
        UPDATE comments
        SET comment_text = ${comment}, created_at = CURRENT_TIMESTAMP
        WHERE comment_id = ${commentId}
      `;
      console.log("Comment updated successfully");
    } else {
      // If the comment does not exist, insert a new one
      await sql`
        INSERT INTO comments (user_id, product_id, comment_text)
        VALUES (${lastFiveCharacters}, ${productId}, ${comment})
      `;
      console.log("Comment inserted successfully");
    }
  } catch (error) {
    console.log("Error inserting/updating comment", error);
    return NextResponse.json(
      { error: "Error inserting/updating comment" },
      { status: 500 }
    );
  }

  // Fetch the latest comment for response
  // let updatedComment;
  // try {
  //   const result = await sql`
  //     SELECT comment_text
  //     FROM comments
  //     WHERE product_id = ${productId} AND user_id = ${userId}
  //     ORDER BY created_at DESC
  //     LIMIT 1
  //   `;
  //   updatedComment = result.rows[0].comment_text;
  // } catch (error) {
  //   console.log("Error fetching updated comment", error);
  //   return NextResponse.json(
  //     { error: "Error fetching updated comment" },
  //     { status: 500 }
  //   );
  // }

  return NextResponse.json({ comment: "updatedComment" }, { status: 200 });
}
