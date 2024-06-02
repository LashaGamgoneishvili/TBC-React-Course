import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(
  _: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  try {
    const lastFiveCharacters = id.slice(-5);
    const result = await sql`
    SELECT cart.quantity ,  products.id AS id,
    products.title ,
    products.description,
    products.price,
    products.discount,
    products.image
    FROM cart 
    JOIN products ON cart.product_id = products.id
    WHERE cart.user_id = ${lastFiveCharacters};
    `;

    const rows = result.rows;
    if (!rows) {
      return NextResponse.json({}, { status: 200 });
    }

    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
