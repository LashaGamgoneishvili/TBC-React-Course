import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  try {
    const { productId } = await request.json();
    if (!productId) {
      return NextResponse.json(
        { error: "productId is required" },
        { status: 400 }
      );
    }

    const result = await sql`
      SELECT 
        comments.comment_id,
        comments.comment_text,
        comments.created_at,
        users.user_id,
        users.name,
        users.lastname,
        users.image
      FROM 
        comments
      JOIN 
        users ON comments.user_id = users.user_id
      WHERE 
        comments.product_id = ${productId}
      ORDER BY 
        comments.created_at DESC
    `;

    const comments = result.rows;

    return NextResponse.json({ comments }, { status: 200 });
  } catch (error) {
    console.error("Error fetching comments", error);
    return NextResponse.json(
      { error: "Error fetching comments" },
      { status: 500 }
    );
  }
}
