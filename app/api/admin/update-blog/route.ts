import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { blog } = body;
  const { title, description, detaildDescription, time, blogId } = blog;
  console.log(
    "title, detaildDescription, description, image, time, blogId",
    title,
    detaildDescription,
    description,
    time
  );
  try {
    if (!title && !detaildDescription && !description && !time && !blogId) {
      throw new Error(
        "At least one of title, detailedDescription, description, time, or blogId is required"
      );
    }

    await sql`UPDATE blogs SET title = ${title}, detailed_description = ${detaildDescription}, description = ${description},  time=${time} WHERE blog_id=${blogId}`;
  } catch (error) {
    console.log("Error update blog", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }

  let blogs;

  try {
    blogs = await sql`SELECT * FROM blogs WHERE blog_id=${blogId}`;
  } catch (error) {
    console.log("Error fatching blogs");
    return NextResponse.json(
      { error: "Error fetching blogs" },
      { status: 500 }
    );
  }

  return NextResponse.json({ blogs }, { status: 200 });
}
