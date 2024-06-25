// import { NextRequest, NextResponse } from "next/server";
// import { sql } from "@vercel/postgres";

// export const revalidate = 0;

// export async function GET(_: NextRequest) {
//   try {
//     const products = await sql`SELECT * FROM shipping ORDER BY shipping_id ASC`;

//     return NextResponse.json({ result: products.rows }, { status: 200 });
//   } catch (err) {
//     console.error("Database query error:", err);

//     return NextResponse.json({ error: err }, { status: 500 });
//   }
// }
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(_: NextRequest) {
  try {
    const result = await sql`
  SELECT 
    shipping.user_id,
    shipping.quantity, 
    shipping.product_id,
    products.product_id AS id,
    products.title,
    products.description,
    products.price,
    products.discount,
    products.image
  FROM 
    shipping
  JOIN 
    products 
  ON 
    shipping.product_id = products.product_id
  ORDER BY 
    products.product_id ASC;
`;

    const rows = result.rows;
    if (rows.length === 0) {
      return NextResponse.json(
        { message: "No products found for this user" },
        { status: 200 }
      );
    }
    console.log("rows", rows);
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    console.error("Database query error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
