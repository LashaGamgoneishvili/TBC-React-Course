import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: Request) {
  const body: { userId: number; productId: number } = await request.json();
  const { userId, productId } = body;
  const lastFiveCharacters = `${userId}`.slice(-5);

  try {
    const existingCartItem = await sql`
            SELECT * FROM cart
            WHERE user_id = ${lastFiveCharacters} AND product_id = ${productId};
        `;

    if (existingCartItem?.rows.length > 0) {
      var res = await sql`
                UPDATE cart
                SET quantity = quantity + 1
                WHERE user_id = ${lastFiveCharacters} AND product_id = ${productId};
            `;
    } else {
      var res = await sql`
                INSERT INTO cart (user_id, product_id, quantity) 
                VALUES (${lastFiveCharacters}, ${productId},  ${1})
            `;
    }
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to add item to cart" },
      { status: 500 }
    );
  }
}
