export default function loading() {
  return (
    <div className=" bg-[#f7f7f7] dark:bg-[#282c34] w-full h-screen  flex justify-center items-start md:items-center overflow-hidden">
      <div className="before:h-52  mt-52 md:mt-0   after:dark:bg-[#282c34] before:bottom-24 before:left-[-10%]  before:origin-bottom-right  before:w-28 before:inset-22 before:absolute before:bg-[#fd5050] after:dark:shadow-[#dc2626] after:dark:shadow-xl after:dark:animate-spin   dark:before:bg-transparent  relative before:animate-spin rounded-full  overflow-hidden h-52 w-52  flex items-center justify-center  after:bg-white after:absolute   after:inset-0.5 after:rounded-full">
        <div className=" bg-white  rounded-full h-32 w-32 flex items-center justify-center ">
          <div className="z-10">
            <span className="text-[24px] text-black dark:text-blue-500">T</span>
            <span className="text-xl text-black dark:text-blue-500">ime</span>
            <span className="text-[24px] text-red-600"> Z</span>
            <span className="text-xl text-red-600">one</span>
          </div>
        </div>
      </div>
    </div>
  );
}
