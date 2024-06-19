import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function DELETE(
  _: NextRequest,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;
  const lastFiveCharacters = userId.slice(-5);
  try {
    const res =
      await sql`DELETE FROM cart WHERE user_Id = ${lastFiveCharacters};`;
    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
