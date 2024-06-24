import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export const revalidate = 0;

export async function GET(_: NextRequest) {
  try {
    const blogs = await sql`SELECT * FROM blogs ORDER BY blog_id ASC`;

    return NextResponse.json({ result: blogs.rows }, { status: 200 });
  } catch (err) {
    console.error("Database query error:", err);

    return NextResponse.json({ error: err }, { status: 500 });
  }
}
