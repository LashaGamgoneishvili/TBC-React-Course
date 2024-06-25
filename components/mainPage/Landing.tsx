import Image from "next/image";
import Link from "next/link";

function Landing() {
  return (
    <div className="xl:h-[1000px] w-full flex  h-full py-24 xl:py-0 px-12 xl:lp-0  bg-[#f0f0f2]  dark:z-0 dark:bg-[#282c34] justify-center items-center  overflow-hidden">
      <div className="flex flex-col gap-12 overflow-hidden">
        <div className="animate-slideInBigText animate-reloadBigText">
          <p className="xl:text-[100px] text-[44px]">Select Your New</p>
          <p className="xl:text-[100px] text-[44px]">Perfect Style</p>
        </div>
        <p className="animate-slideInSmallText leading-8 text-xl md:w-[70%] lg:w-[60%] ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dolor
          quam molestiae reiciendis eum nostrum.
        </p>
        <div className="flex relative">
          <div className="translate-x-0 bg-[#4a4a4b] w-auto before:duration-300 before:w-0 before:left-0 before:absolute before:h-[100%] before:bg-[#ff2020] before:transition-all before:ease-in hover:before:w-full  before:-z-10">
            <button className="text-white  py-3  px-8 lg:text-2xl text-xl">
              <Link href="/shop">Shop Now</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-48 xl:w-56 animate-blinkingBg md:pr-4 lg:pr-8 ">
        <Image
          src="https://ajy8khmx9vtvyckn.public.blob.vercel-storage.com/watch-yfAHm8BMsGl1Un4JMBErhh0gCxOjwv.webp"
          width={185}
          height={185}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          priority
          alt="watch-image"
        />
      </div>
    </div>
  );
}

export default Landing;
