import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  const body: { userId: number; productId: number } = await request.json();
  const { userId, productId } = body;
  console.log("userId, productId", userId, productId);
  try {
    await sql`
      DELETE FROM shipping
      WHERE user_Id = ${userId} AND product_Id = ${productId};
    `;
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Failed to delete shipping record:", error);
    return NextResponse.json(
      { error: "Failed to remove item from cart" },
      { status: 500 }
    );
  }
}
