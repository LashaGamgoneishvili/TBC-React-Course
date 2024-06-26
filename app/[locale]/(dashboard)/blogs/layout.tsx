import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Blogs" },
  description: "Read interesting blogs about our product",
};
function GoogleFontLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className=" w-full flex justify-center bg-[url('https://preview.colorlib.com/theme/timezone/assets/img/hero/about_hero.png')]">
        <h1 className="mt-52 text-[52px] dark:text-black mb-52 font-black tracking-widest">
          Blogs
        </h1>
      </div>
      {children}
    </div>
  );
}

export default GoogleFontLayout;
