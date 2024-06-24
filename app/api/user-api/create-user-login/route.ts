import { sql } from "@vercel/postgres";
import { NextRequest } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export const revalidate = 0;

export async function GET(_: NextRequest) {
  try {
    const session = await getSession();

    if (session?.user && session?.user?.email_verified) {
      const sessionUser = session?.user;
      const id = sessionUser?.sub;
      const name = sessionUser?.given_name;
      const lastName = sessionUser?.family_name;
      const email = sessionUser?.email;
      const image = sessionUser?.picture;

      const lastFiveCharacters = id.slice(-5);
      const user =
        await sql`SELECT * FROM users WHERE user_id = ${lastFiveCharacters}`;

      if (!user.rows.length) {
        await sql`INSERT INTO users (user_id, name, lastname, email, image) VALUES (${lastFiveCharacters}, ${name}, ${lastName}, ${email}, ${image});`;
      }
    } else {
      const sessionUser = session?.user;
      const id = sessionUser?.sub;
      const name = "There is no Name";
      const lastName = "There is no lastName";
      const email = sessionUser?.email;
      const image = sessionUser?.picture;

      const lastFiveCharacters = id.slice(-5);
      const user =
        await sql`SELECT * FROM users WHERE user_id = ${lastFiveCharacters}`;

      if (!user.rows.length) {
        await sql`INSERT INTO users (user_id, name, lastname, email, image) VALUES (${lastFiveCharacters}, ${name}, ${lastName}, ${email}, ${image});`;
      }
    }
  } catch (error) {
    console.error("Error during user processing:", error);
    return redirect("/api/auth/logout");
  }

  return redirect("/");
}
