import { NextResponse } from "next/server";
import { genSalt, hash } from "bcrypt";
// compare
// genSaltSync
export async function GET() {
  try {
    const password1 = "test";
    const password2 = "test";

    const salt1 = await genSalt(10);
    const salt2 = await genSalt(10);
    // const salt = await genSaltSync(10);

    const hashedPassword1 = await hash(password1, salt1);
    const hashedPassword2 = await hash(password2, salt2);
    console.log(hashedPassword2);
    const salt = hashedPassword1.slice(0, 17);

    const NewPassword = "test";

    const newHash = await hash(NewPassword, salt);

    // const isMatch = await compare(NewPassword, hashedPassword);

    return NextResponse.json({ hashedPassword1, newHash }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
