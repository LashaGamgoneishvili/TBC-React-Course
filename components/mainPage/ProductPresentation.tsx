import Image from "next/image";
import image from "../../public/Assets/watches/popular6.png.webp";
import AnimatedButton from "./AnimatedButton";
function ProductPresentation() {
  return (
    <div className="mx-[12%] grid grid-flow-col gap-24 items-center overflow-hidden">
      <div className="flex flex-col w-full gap-12">
        <h1 className="text-[52px]">Watch of Choice</h1>
        <p className=" text-xl w-full">
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
      <div className="flex justify-start items-center">
        <Image
          src={image}
          width={500}
          height={500}
          priority
          alt="watch-image"
        />
      </div>
    </div>
  );
}

export default ProductPresentation;
