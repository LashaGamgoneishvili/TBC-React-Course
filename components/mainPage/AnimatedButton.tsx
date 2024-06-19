import React from "react";

function AnimatedButton({
  children,
}: {
  children: string;
  mainColor: string;
  hoverColor: string;
}) {
  return (
    <div className=" flex justify-center relative">
      <div
        className={`translate-x-0 bg-[#ff2020]  w-auto before:duration-300 before:w-0 before:left-0 before:absolute before:h-[100%] before:bg-[#4a4a4b] before:transition-all before:ease-in hover:before:w-full  before:-z-10 `}
      >
        <button className="text-white  py-4  px-7 text-xl">{children}</button>
      </div>
    </div>
  );
}

export default AnimatedButton;
