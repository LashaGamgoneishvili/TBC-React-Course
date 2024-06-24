import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { blog } = body;
  const { title, description, detaildDescription, image, time, userId } = blog;

  try {
    if (
      !title ||
      !description ||
      !detaildDescription ||
      !image ||
      !time ||
      !userId
    ) {
      throw new Error("title, description, price, image and id are required");
    }

    // const products = await sql`SELECT * FROM products WHERE product_id = ${id}`;
    await sql`INSERT INTO blogs (title, description, detailed_description, comment, image, time) 
    VALUES (${title}, ${description}, ${detaildDescription}, ${JSON.stringify({
      userId: "comment",
    })}, ${image}, ${time})`;
  } catch (error) {
    console.log("Error creating new blogs", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }

  return NextResponse.json({ status: 200 });
}
