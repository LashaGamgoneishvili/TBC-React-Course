import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { blobUrl, productId } = await request.json();

  if (blobUrl || productId) {
    try {
      await sql`UPDATE products SET image=${blobUrl} WHERE product_id = ${productId};`;
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }

  const product = await sql`SELECT * FROM products ORDER BY product_id ASC;`;

  return NextResponse.json({ product }, { status: 200 });
}
