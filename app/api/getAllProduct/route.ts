import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export const revalidate = 0;

export async function GET(_: NextRequest) {
  try {
    const products = await sql`SELECT * FROM products ORDER BY product_id ASC`;

    return NextResponse.json({ result: products.rows }, { status: 200 });
  } catch (err) {
    console.error("Database query error:", err);

    return NextResponse.json({ error: err }, { status: 500 });
  }
}
