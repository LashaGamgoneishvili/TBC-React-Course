import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { product } = body;
  const { title, description, price, discount, image, id } = product;

  try {
    if (!title || !price || !description || !id) {
      throw new Error(
        "title, price, description, discount, image, and id are required"
      );
    }

    await sql`UPDATE products SET title = ${title}, price = ${price}, description = ${description}, discount = ${discount}, image = ${image} Where product_id = ${Number(
      id
    )} `;
  } catch (error) {
    console.log("Error update product", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }

  let products;

  try {
    products = await sql`SELECT * FROM products WHERE product_id=${id}`;
  } catch (error) {
    console.log("Error fatching products");
    return NextResponse.json(
      { error: "Error fetching products" },
      { status: 500 }
    );
  }

  return NextResponse.json({ products }, { status: 200 });
}
