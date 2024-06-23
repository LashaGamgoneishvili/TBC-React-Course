import Image from "next/image";
import image1 from "../../public/Assets/new_product1.png.webp";
import image2 from "../../public/Assets/new_product2.png.webp";
import image3 from "../../public/Assets/new_product3.png";

function NewArrivals() {
  return (
    <div className="w-full flex flex-col gap-16">
      <h1 className="text-[52px] ml-[9%]">New Arrivals</h1>
      <div className="flex flex-wrap justify-center items-center  px-8 text-xl gap-6 xl:gap-12 w-full ">
        <div className="flex flex-col gap-2 items-center  overflow-hidden ">
          <div className="overflow-hidden">
            <Image
              src={image1}
              width={150}
              height={150}
              className="h-[500px] w-96 hover:scale-105 duration-500"
              priority
              alt="Product-picture"
            />
          </div>
          <p>Thermo Ball Etip Gloves</p>
          <p className="text-center text-[#ff2020]">$ 45,743</p>
        </div>
        <div className="flex flex-col gap-2 items-center overflow-hidden ">
          <div className="overflow-hidden">
            <Image
              src={image2}
              width={150}
              height={150}
              className=" h-[500px] w-96 hover:scale-105 duration-500"
              priority
              alt="Product-picture"
            />
          </div>
          <p>Thermo Ball Etip Gloves</p>
          <p className="text-center text-[#ff2020]">$ 45,743</p>
        </div>
        <div className="flex flex-col gap-2 items-center overflow-hidden ">
          <div className="overflow-hidden">
            <Image
              src={image3}
              width={150}
              height={150}
              className=" h-[500px] w-96 hover:scale-105 duration-500"
              priority
              alt="Product-picture"
            />
          </div>
          <p>Thermo Ball Etip Gloves</p>
          <p className="text-center text-[#ff2020]">$ 45,743</p>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
