import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function DELETE(request: NextRequest) {
  const body = await request.json();
  const { id } = body;

  console.log("delete-user-id", id);
  try {
    if (!id) throw new Error("ID is required");
    await sql`DELETE FROM users WHERE user_id = ${id};`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ result: "ok" }, { status: 200 });
}
