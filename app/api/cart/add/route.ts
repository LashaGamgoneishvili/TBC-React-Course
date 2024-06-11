import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: Request) {
  const body = await request.json();
  const { userId, productId } = body;
  const lastFiveCharacters = `${userId}`.slice(-5);

  try {
    // Start a transaction
    await sql`BEGIN`;

    // Select the cart item with a lock for update
    const existingCartItem = await sql`
      SELECT * FROM cart
      WHERE user_id = ${lastFiveCharacters} AND product_id = ${productId}
      FOR UPDATE;
    `;

    let res;
    if (existingCartItem?.rows.length > 0) {
      // If the item exists, update its quantity
      res = await sql`
        UPDATE cart
        SET quantity = quantity + 1
        WHERE user_id = ${lastFiveCharacters} AND product_id = ${productId};
      `;
    } else {
      // If the item does not exist, insert a new row
      res = await sql`
        INSERT INTO cart (user_id, product_id, quantity)
        VALUES (${lastFiveCharacters}, ${productId}, ${1});
      `;
    }

    // Commit the transaction
    await sql`COMMIT`;

    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.log(error);
    // Rollback the transaction in case of error
    await sql`ROLLBACK`;

    return NextResponse.json(
      { error: "Failed to add item to cart" },
      { status: 500 }
    );
  }
}
