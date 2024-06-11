function GoogleFontLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-44">
      <div className=" w-full flex justify-center bg-[url('https://preview.colorlib.com/theme/timezone/assets/img/hero/about_hero.png')]">
        <h1 className="mt-52 text-[52px] mb-52 font-black tracking-widest">
          Watch Shop
        </h1>
      </div>
      {children}
    </div>
  );
}

export default GoogleFontLayout;
