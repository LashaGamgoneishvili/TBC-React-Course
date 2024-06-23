import { BsBoxSeam } from "react-icons/bs";
import { CiUnlock } from "react-icons/ci";
import { GoSync } from "react-icons/go";

function ExtraDetails() {
  return (
    <div className="lg:mx-[10%] mx-4 mb-16">
      <div className="flex justify-between flex-col sm:flex-row h-auto py-12 sm:py-0  sm:h-60 px-8 gap-4 text-white items-center bg-[#ea0000]">
        <div className="flex flex-col gap-4 max-w-64 ">
          <div className="md:text-[44px] text-2xl">
            <BsBoxSeam />
          </div>
          <h1 className="md:text-xl text-lg">Free Shipping Method</h1>
          <p className="text-[#abb2bf] ">
            aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
          </p>
        </div>
        <div className="flex flex-col gap-4 max-w-64">
          <div className="md:text-[44px] text-2xl">
            <CiUnlock />
          </div>
          <h1 className="md:text-xl text-lg ">Secure Payment System</h1>
          <p className="text-[#abb2bf]">
            aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
          </p>
        </div>
        <div className="flex flex-col gap-4 max-w-64">
          <div className="md:text-[44px] text-2xl">
            <GoSync />
          </div>
          <h1 className="md:text-xl text-lg ">Secure Payment System</h1>
          <p className="text-[#abb2bf]">
            aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExtraDetails;
