import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export const revalidate = 0;

export async function GET(
  _: NextRequest,
  { params }: { params: { blogId: string } }
) {
  const blogId = params.blogId;

  console.log("blogId-params", blogId);
  try {
    const blogs = await sql`SELECT * FROM blogs WHERE blog_id = ${blogId}`;
    console.log("sql-blogs", blogs);
    return NextResponse.json({ result: blogs.rows }, { status: 200 });
  } catch (err) {
    console.error("Database query error:", err);

    return NextResponse.json({ error: err }, { status: 500 });
  }
}
