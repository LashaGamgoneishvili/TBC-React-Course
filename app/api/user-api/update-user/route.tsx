import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";
export const revalidate = 0;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, lastName, email, id } = body;
  console.log("id, name, lastName, email", id, name, lastName, email);

  try {
    if (!name || !email || !lastName || !id) {
      throw new Error("id, name, lastName, and email are required");
    }

    await sql`UPDATE users SET name = ${name}, lastName = ${lastName}, email = ${email} WHERE id = ${id};`;
  } catch (error) {
    console.error("Error updating user:", error);

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
