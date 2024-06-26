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
            WHERE user_Id = ${lastFiveCharacters} AND product_id = ${productId};
        `;
    if (existingCartItem.rows.length > 0) {
      const currentQuantity = existingCartItem.rows[0].quantity;
      if (currentQuantity > 1) {
        await sql`
                    UPDATE cart
                    SET quantity = quantity - 1
                    WHERE user_Id = ${lastFiveCharacters} AND product_id = ${productId};
                `;
      } else {
        await sql`
                    DELETE FROM cart
                    WHERE use_Id = ${userId} AND product_id = ${productId};
                `;
      }
    } else {
      return NextResponse.json(
        { error: "Item not found in cart" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Item removed from cart" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to remove item from cart" },
      { status: 500 }
    );
  }
}
