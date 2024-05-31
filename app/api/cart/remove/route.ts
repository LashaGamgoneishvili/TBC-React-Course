import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: Request) {
  const body: { userId: number; productId: number } = await request.json();
  const { userId, productId } = body;
  const lastFiveCharacters = `${userId}`.slice(-5);

  try {
    const res = await sql`
                    DELETE FROM cart
                    WHERE user_Id = ${lastFiveCharacters} AND product_Id = ${productId};
                `;
    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to remove item from cart" },
      { status: 500 }
    );
  }
}
