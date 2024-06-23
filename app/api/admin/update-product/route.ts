import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, price, description, discount, productId } = body;

  try {
    if (!title || !price || !description || !discount || !productId) {
      throw new Error(
        "title, price, description, discount, and productId are required"
      );
    }

    await sql`UPDATE products SET title=${title}, price=${price}, description=${description}, discount=${discount} Where product_id=${productId} `;
  } catch (error) {
    console.log("Error update product", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }

  let product;

  try {
    product = await sql`SELECT * FROM products WHERE product_id=${productId}`;
  } catch (error) {
    console.log("Error fatching products");
    return NextResponse.json(
      { error: "Error fetching products" },
      { status: 500 }
    );
  }

  return NextResponse.json({ product }, { status: 200 });
}
