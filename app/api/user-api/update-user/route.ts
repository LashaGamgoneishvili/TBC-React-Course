import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";
export const revalidate = 0;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { user } = body;
  const { name, lastName, email, id, image } = user;

  console.log(
    " name, lastName, email, id, image ",
    name,
    lastName,
    email,
    id,
    image
  );
  try {
    if (!name && !email && !lastName && !id && !image) {
      throw new Error("id, name, lastName, and email are required");
    }
    await sql`UPDATE users SET name = ${name}, lastName = ${lastName}, email = ${email}, image = ${image} WHERE user_id = ${id};`;
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
