import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function DELETE() {
  try {
    // Correct SQL query to delete all rows from the blogs table
    const res = await sql`DELETE FROM blogs;`;
    // Logging the result for debugging purposes
    console.log("Deletion result:", res);
    // Returning a success response
    return NextResponse.json(
      { message: "All blogs deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    // Logging the error for debugging purposes
    console.error("Error deleting blogs:", error);
    // Returning an error response
    return NextResponse.json(
      { error: "Failed to delete all blogs" },
      { status: 500 }
    );
  }
}
