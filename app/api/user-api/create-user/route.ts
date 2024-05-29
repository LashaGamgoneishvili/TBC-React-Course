import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
export const revalidate = 0;

// export async function POST(request: NextRequest) {
//   const { id, name, lastName, email, image } = await request.json();
//   try {
//     if (!id || !name || !lastName || !email || !image)
//       throw new Error("name, email and age are required");
//     await sql`INSERT INTO users (id, name, lastname, email, image) VALUES (${id},${name},${lastName}, ${email}, ${image});`;
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
//   const users = await sql`SELECT * FROM users;`;
//   return NextResponse.json({ users }, { status: 200 });
// }

export async function GET(_: NextRequest) {
  try {
    // const { id, name, lastName, email, image } = await request.json();
    // console.log(id, name, lastName, email, image);

    const session = await getSession();
    console.log("session-user", session?.user);

    console.log(session?.user, session?.user?.email_verified);

    if (session?.user && session?.user?.email_verified) {
      console.log("with Email");
      const sessionUser = session?.user;
      const id = sessionUser?.sub;
      const name = sessionUser?.given_name;
      const lastName = sessionUser?.family_name;
      const email = sessionUser?.email;
      const image = sessionUser?.picture;

      const user = await sql`SELECT * FROM users WHERE id = ${id}`;

      console.log(user.rows);
      if (!user.rows.length && user.rows[0].id !== id)
        await sql`INSERT INTO users (id ,name, lastname, email, image) VALUES ( ${id},${name}, ${lastName}, ${email}, ${image});`;

      // const users = await sql`SELECT id FROM users ORDER BY id DESC LIMIT 1;`;
      // const userId = users.rows[0].id;

      //   await sql`
      //   INSERT INTO cart (userid, products)
      //   VALUES (${userId}, '{}');
      // `;
    } else {
      console.log("without Email");
      const sessionUser = session?.user;
      const id = sessionUser?.sub;
      const name = "There is no Name";
      const lastName = "There is no lastName";
      const email = sessionUser?.email;
      const image = sessionUser?.picture;

      const user = await sql`SELECT * FROM users WHERE id = ${id}`;

      if (!user.rows.length)
        await sql`INSERT INTO users (id ,name, lastname, email, image) VALUES ( ${id},${name}, ${lastName}, ${email}, ${image});`;

      //   const users = await sql`SELECT id FROM users ORDER BY id DESC LIMIT 1;`;
      //   const userId = users.rows[0].id;

      //   await sql`
      //   INSERT INTO cart (userid, products)
      //   VALUES (${userId}, '{}');
      // `;
    }
  } catch (error) {
    return redirect("/api/auth/logout");
  }

  return redirect("/");
}
