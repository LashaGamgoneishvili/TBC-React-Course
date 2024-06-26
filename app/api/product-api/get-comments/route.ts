import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  let body;
  try {
    body = await request.json();
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { userId, productId } = body;

  console.log("userId, productId", userId, productId);

  // Fetch the latest comment for response
  let updatedComment;
  try {
    const result = await sql`
      SELECT comment_text 
      FROM comments 
      WHERE product_id = ${productId} AND user_id = ${userId}
      ORDER BY created_at DESC
      LIMIT 1
    `;
    updatedComment =
      result.rows.length > 0 ? result.rows[0].comment_text : null;
  } catch (error) {
    console.error("Error fetching updated comment", error);
    return NextResponse.json(
      { error: "Error fetching updated comment" },
      { status: 500 }
    );
  }

  return NextResponse.json({ comment: updatedComment }, { status: 200 });
}
