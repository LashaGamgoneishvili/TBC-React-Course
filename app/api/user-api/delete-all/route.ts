import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function DELETE(_: NextRequest) {
  try {
    await sql`DELETE * FROM users ;`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ result: "ok" }, { status: 200 });
}
