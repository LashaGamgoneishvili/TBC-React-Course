import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { name, email, age, id } = await request.json();
  try {
    if (!name || !email || !age || !id) {
      throw new Error("Name, email, and age are required");
    }
    await sql`UPDATE Users SET name = ${name}, email = ${email}, age = ${age} WHERE id = ${id};`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  const users = await sql`SELECT * FROM users;`;
  return NextResponse.json({ users }, { status: 200 });
}
