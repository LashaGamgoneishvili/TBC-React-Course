import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
export const revalidate = 0;

export async function POST() {
  try {
    const result =
      await sql`CREATE TABLE Users (id varchar(255), name varchar(255), lastname varchar(255), email varchar(255), image varchar(255));`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// Remove table from DB
// export async function DELETE() {
//   try {
//     const result = await sql`DROP TABLE IF EXISTS users;`;
//     return NextResponse.json({ result }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }
