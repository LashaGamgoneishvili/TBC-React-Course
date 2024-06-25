import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Shop" },
  description: "Start shopping",
};
function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-24 w-full  dark:bg-black">
      <div className="flex justify-center  w-full bg-[url('https://preview.colorlib.com/theme/timezone/assets/img/hero/about_hero.png')]">
        <h1 className="flex mt-52 dark:text-black sm:text-[52px] text-[44px] mb-52 font-black tracking-widest w-full justify-center">
          Profile
        </h1>
      </div>
      {children}
    </div>
  );
}

export default ProfileLayout;
