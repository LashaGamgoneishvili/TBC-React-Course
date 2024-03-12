import computer from "./Assets/tech-computer-logo-template_23-2149204144.avif";

export default function Content() {
  return (
    <div className="flex h-screen w-full items-center justify-between  bg-slate-800	px-10">
      <div className=" text-blue-500">
        <p>welcome to ALLSAFE</p>
        <h1 className="mb-7 mt-9 text-5xl">Future Syber Tecnology</h1>
        <h6 className="flex h-full items-center justify-center text-3xl text-[#9dc59e]">
          We are professional group of people who creates secure systems and
          trus for our customers
        </h6>
      </div>
      <div className="">
        <img
          src={computer}
          alt="computer"
          className=" h-[350px] w-[350px] rounded-xl [box-shadow:10px_5px_5px_#2222]"
        />
      </div>
    </div>
  );
}
