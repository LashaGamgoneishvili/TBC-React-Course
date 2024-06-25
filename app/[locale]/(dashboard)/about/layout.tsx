import ExtraDetails from "@/components/mainPage/ExtraDetails";
import Video from "@/components/mainPage/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "About" },
  description: "Learn more about Rolex",
};
function GoogleFontLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className=" w-full flex justify-center  bg-[url('https://preview.colorlib.com/theme/timezone/assets/img/hero/about_hero.png')]">
        <h1 className="mt-52 dark:text-black text-[52px] mb-52 font-black tracking-widest">
          About
        </h1>
      </div>
      {children}
      <Video />
      <ExtraDetails />
    </div>
  );
}

export default GoogleFontLayout;
