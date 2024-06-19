import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function DELETE(request: Request) {
  const body = await request.json();
  const { blogId } = body;
  console.log("Deleting blog with ID:", blogId);

  try {
    const res = await sql`
      DELETE FROM blogs
      WHERE blog_id = ${Number(blogId)};
    `;

    console.log("Deletion successful:", res); // Log the deletion result

    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}
