import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, description, price, discount, image } = body;

  try {
    if (!title || !description || !price || !discount || !image) {
      throw new Error("title, description, price, image and id are required");
    }

    // const products = await sql`SELECT * FROM products WHERE product_id = ${id}`;
    await sql`INSERT INTO products (title, description, price, discount, image) VALUES (${title}, ${description}, ${price}, ${discount}, ${image})`;
  } catch (error) {
    console.log("Error creating new product", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }

  return NextResponse.json({ status: 200 });
}
