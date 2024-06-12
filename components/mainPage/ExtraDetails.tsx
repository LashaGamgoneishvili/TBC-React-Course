import { BsBoxSeam } from "react-icons/bs";
import { CiUnlock } from "react-icons/ci";
import { GoSync } from "react-icons/go";

function ExtraDetails() {
  return (
    <div className="mx-[10%] mb-16">
      <div className="flex justify-between  h-60 px-8 gap-4 text-white items-center bg-[#ea0000]">
        <div className="flex flex-col gap-4 max-w-64 ">
          <div className="text-[44px]">
            <BsBoxSeam />
          </div>
          <h1 className="text-xl ">Free Shipping Method</h1>
          <p className="text-[#abb2bf]">
            aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
          </p>
        </div>
        <div className="flex flex-col gap-4 max-w-64">
          <div className="text-[44px]">
            <CiUnlock />
          </div>
          <h1 className="text-xl ">Secure Payment System</h1>
          <p className="text-[#abb2bf]">
            aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
          </p>
        </div>
        <div className="flex flex-col gap-4 max-w-64">
          <div className="text-[44px]">
            <GoSync />
          </div>
          <h1 className="text-xl ">Secure Payment System</h1>
          <p className="text-[#abb2bf]">
            aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExtraDetails;
