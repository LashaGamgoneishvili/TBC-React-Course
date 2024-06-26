import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: Request) {
  const body = await request.json();
  const { productId, quantity, userId } = body;
  const lastFiveCharacters = `${userId}`.slice(-5);
  console.log(
    "productId, quantity, lastFiveCharacters",
    productId,
    quantity,
    lastFiveCharacters
  );
  try {
    // Start a transaction
    await sql`BEGIN`;

    // Select the shipping item with a lock for update
    const existingShippingItem = await sql`
      SELECT * FROM shipping
      WHERE user_id = ${lastFiveCharacters} AND product_id = ${productId}
      FOR UPDATE;
    `;
    console.log("existingShippingItem", existingShippingItem);
    if (existingShippingItem?.rows.length > 0) {
      // If the item exists, update its quantity
      await sql`
        UPDATE shipping
        SET quantity = quantity + ${quantity}
        WHERE user_id = ${lastFiveCharacters} AND product_id = ${productId};
      `;
    } else {
      // If the item does not exist, insert a new row
      await sql`
        INSERT INTO shipping (user_id, product_id, quantity)
        VALUES (${lastFiveCharacters}, ${productId}, ${quantity});
      `;
    }

    // Commit the transaction
    await sql`COMMIT`;
    let result =
      await sql`SELECT * FROM shipping WHERE user_id=${lastFiveCharacters}`;
    console.log("result-response", result);
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.log(error);
    // Rollback the transaction in case of error
    await sql`ROLLBACK`;

    return NextResponse.json(
      { error: "Failed to add item to shipping" },
      { status: 500 }
    );
  }
}
