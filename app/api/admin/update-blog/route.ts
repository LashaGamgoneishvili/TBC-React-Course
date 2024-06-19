import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, detaildDescription, description, time, blogId } = body;

  try {
    if (!title && !detaildDescription && !description && !time && !blogId) {
      throw new Error(
        "At least one of title, detailedDescription, description, time, or blogId is required"
      );
    }

    await sql`UPDATE blogs SET title=${title}, detailed_description=${detaildDescription}, description=${description}, time=${time} WHERE blog_id=${blogId} `;
  } catch (error) {
    console.log("Error update blog", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }

  let blog;

  try {
    blog = await sql`SELECT * FROM blogs WHERE blog_id=${blogId}`;
  } catch (error) {
    console.log("Error fatching blogs");
    return NextResponse.json(
      { error: "Error fetching blogs" },
      { status: 500 }
    );
  }

  return NextResponse.json({ blog }, { status: 200 });
}
