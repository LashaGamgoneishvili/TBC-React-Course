import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, lastName, email, image, id } = body;

  try {
    if (!name || !email || !lastName || !id) {
      throw new Error("id, name, lastName, and email are required");
    }
    const user = await sql`SELECT * FROM users WHERE user_id = ${id}`;

    if (!user.rows.length) {
      await sql`INSERT INTO users (user_id, name, lastname, email, image) VALUES (${id}, ${name}, ${lastName}, ${email}, ${image});`;
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }

  let users;
  try {
    users = await sql`SELECT * FROM users;`;
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Error fetching users" },
      { status: 500 }
    );
  }

  return NextResponse.json({ users }, { status: 200 });
}
