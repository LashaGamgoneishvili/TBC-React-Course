import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { comment, userId, blogId } = body;
  console.log(" comment, userId, blogId", comment, userId, blogId);
  try {
    // Ensure all required fields are provided
    if (!comment || !userId || !blogId) {
      throw new Error("comment, userId, and blogId are required");
    }

    // Fetch the current comment JSONB data from the database
    const result =
      await sql`SELECT comment FROM blogs WHERE blog_id = ${blogId}`;
    let currentComment: any = {};
    if (result.rows.length > 0) {
      currentComment = result.rows[0].comment || {};
    }

    // Update or merge the current comment object with the new key-value pair
    currentComment[userId] = comment;
    // Update the comment field in the database with the merged JSONB object
    await sql`
      UPDATE blogs
      SET comment = ${currentComment}
      WHERE blog_id = ${blogId}
    `;

    console.log("currentComment", currentComment);
  } catch (error) {
    console.log("Error updating blog comment", error);
    return NextResponse.json(
      { error: "Error updating blog comment" },
      { status: 500 }
    );
  }

  // Fetch the updated comment for response
  let updatedComment;
  try {
    const result =
      await sql`SELECT comment FROM blogs WHERE blog_id = ${blogId}`;
    updatedComment = result.rows[0].comment;
  } catch (error) {
    console.log("Error fetching updated comment", error);
    return NextResponse.json(
      { error: "Error fetching updated comment" },
      { status: 500 }
    );
  }

  return NextResponse.json({ comment: updatedComment }, { status: 200 });
}
