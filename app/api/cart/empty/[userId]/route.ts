import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function DELETE(
  request: Request,
  { params }: { params: { userId: string } }
) {
  console.log(request);
  const userId = params.userId;

  try {
    const res = await sql`DELETE FROM cart WHERE userId = ${Number(userId)};`;
    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
