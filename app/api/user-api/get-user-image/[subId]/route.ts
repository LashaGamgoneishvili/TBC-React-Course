import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(
  _: NextRequest,
  { params: { subId } }: { params: { subId: string } }
) {
  try {
    const lastFiveCharacters = subId.slice(-5);
    console.log("lastFiveCharacters-2", lastFiveCharacters);
    const userImage =
      await sql`SELECT image FROM users WHERE user_id = ${lastFiveCharacters}`;
    console.log("userImage-2", userImage);

    return NextResponse.json({ userImage }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
