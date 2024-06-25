import { Metadata } from "next";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: { absolute: "Checkout" },
};

async function GoogleFontLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  const user = session?.user;

  if (user?.role[0] === "admin") {
    redirect("/");
    console.log(user);
  }

  return (
    <div>
      <div className=" w-full flex justify-center bg-[url('https://preview.colorlib.com/theme/timezone/assets/img/hero/about_hero.png')]">
        <h1 className="mt-52 text-[52px] dark:text-black mb-52 font-black tracking-widest">
          Cart List
        </h1>
      </div>
      {children}
    </div>
  );
}

export default GoogleFontLayout;
