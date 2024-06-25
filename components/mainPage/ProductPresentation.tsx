import Image from "next/image";
import AnimatedButton from "./AnimatedButton";
function ProductPresentation() {
  return (
    <>
      <div className="mx-6 md:mx-12 lg:mx-[12%] grid md:grid-flow-col gap-12 xl:gap-24 items-center overflow-hidden">
        <div className="flex flex-col w-full gap-6 md:gap-12">
          <h1 className="md:text-[52px] text-3xl">Watch of Choice</h1>
          <p className="text-lg md:text-xl w-full text-[#919aa0]">
            Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
          <div className=" flex justify-start relative">
            <AnimatedButton mainColor={"#ff2020"} hoverColor={"#4a4a4b"}>
              Show Watches
            </AnimatedButton>
          </div>
        </div>
        <div className="flex justify-center md:justify-start items-center">
          <Image
            src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch1.png.webp"
            width={500}
            height={500}
            // priority
            alt="watch-image"
            loading="lazy"
          />
        </div>
      </div>
      <div className="mx-6 md:mx-12 md:hidden grid md:grid-flow-col gap-12 xl:gap-24 items-center overflow-hidden">
        <div className="flex flex-col w-full gap-6 md:gap-12">
          <h1 className="md:text-[52px] text-3xl">Watch of Choice</h1>
          <p className="text-lg md:text-xl w-full text-[#919aa0]">
            Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
          <div className=" flex justify-start relative">
            <AnimatedButton mainColor={"#ff2020"} hoverColor={"#4a4a4b"}>
              Show Watches
            </AnimatedButton>
          </div>
        </div>
        <div className="flex justify-center md:justify-start items-center">
          <Image
            src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch2.png.webp"
            width={500}
            height={500}
            // priority
            alt="watch-image"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}

export default ProductPresentation;
