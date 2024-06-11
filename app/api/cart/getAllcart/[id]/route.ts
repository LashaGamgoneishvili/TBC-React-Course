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
    SELECT cart.quantity, products.product_id AS id,
    products.title,
    products.description,
    products.price,
    products.discount,
    products.image
    FROM cart
    JOIN products ON cart.product_id = products.product_id
    WHERE cart.user_id = ${lastFiveCharacters}
    ORDER BY products.product_id ASC;
`;

    const rows = result.rows;
    if (rows.length === 0) {
      return NextResponse.json(
        { message: "No products found for this user" },
        { status: 200 }
      );
    }

    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    console.error("Database query error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
