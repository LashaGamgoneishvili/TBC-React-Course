import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function DELETE(request: NextRequest) {
  const body = await request.json();
  const { id } = body;


  try {
    if (!id) throw new Error("ID is required");
    await sql`DELETE FROM products WHERE product_id =${Number(id)};`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ status: 200 });
}
