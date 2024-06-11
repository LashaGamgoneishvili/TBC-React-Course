import Image from "next/image";
import image from "../../public/Assets/watch1.png.webp";

function Landing() {
  return (
    <div className="h-[1000px] w-full flex  bg-[#f0f0f2] -z-10 dark:z-0 dark:bg-[#282c34] justify-center items-center overflow-hidden">
      <div className="flex flex-col gap-12 overflow-hidden">
        <div className="animate-slideInBigText animate-reloadBigText">
          <p className="text-[100px]">Select Your New</p>
          <p className="text-[100px]">Perfect Style</p>
        </div>
        <p className="animate-slideInSmallText leading-8 text-xl w-[60%] ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dolor
          quam molestiae reiciendis eum nostrum.
        </p>
        <div className=" flex relative">
          <div className="animate-slideInButton bg-[#4a4a4b] ff2020 w-auto before:duration-200 before:w-0 before:left-0 before:absolute before:h-[100%] before:bg-[#ff2020] before:transition-all before:ease-in hover:before:w-full  before:-z-10 ">
            <button className="text-white  py-3  px-5 text-xl">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="animate-blinkingBg">
        <Image
          src={image}
          width={185}
          height={185}
          priority
          alt="watch-image"
        />
      </div>
    </div>
  );
}

export default Landing;
