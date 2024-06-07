import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(
  _: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  try {
    if (!id) {
      throw new Error("ID is required");
    }

    const user = await sql`SELECT * FROM users WHERE id=${id}`;
    if (user.rows.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ result: user.rows }, { status: 200 });
  } catch (err) {
    console.error("Error fetching user:", err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
