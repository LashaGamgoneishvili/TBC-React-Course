import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { blobUrl, blogId } = await request.json();

  if (blobUrl || blogId) {
    try {
      await sql`UPDATE blogs SET image=${blobUrl} WHERE blog_id = ${blogId};`;
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }

  const blogs = await sql`SELECT * FROM blogs ORDER BY blog_id ASC;`;

  return NextResponse.json({ blogs }, { status: 200 });
}
