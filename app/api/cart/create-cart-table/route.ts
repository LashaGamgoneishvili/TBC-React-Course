import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function POST() {
  try {
    const result =
      await sql`CREATE TABLE cart (userId varchar(255), productId INT, quantity INT);`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// Remove table from DB
// export async function DELETE() {
//   try {
//     const result = await sql`DROP TABLE IF EXISTS cart;`;
//     return NextResponse.json({ result }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }
