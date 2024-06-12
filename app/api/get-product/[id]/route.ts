import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  if (!id) {
    return NextResponse.json({ error: "Missing product id" }, { status: 400 });
  }

  try {
    const product = await sql`SELECT * FROM products WHERE product_id = ${id}`;

    return NextResponse.json({ result: product.rows[0] }, { status: 200 });
  } catch (err) {
    console.error("Database query error:", err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
