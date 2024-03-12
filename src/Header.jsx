import logo from "./Assets/logo.jpeg";

export default function Header() {
  return (
    <header>
      <div className="flex w-full justify-between bg-[#282c34] p-2 text-[#fff]">
        <h1>
          Our free Product are downloaded over 5 MILLION times. Get them now!
        </h1>
        <ul className="flex cursor-pointer gap-4">
          <li className="text-[24px]">
            <ion-icon name="logo-facebook" />
          </li>
          <li className="text-[24px]">
            <ion-icon name="logo-instagram" />
          </li>
          <li className="text-[24px]">
            <ion-icon name="logo-twitter" />
          </li>
          <li className="text-[24px]">
            <ion-icon name="logo-linkedin" />
          </li>
        </ul>
      </div>
      <div className=" flex h-20 justify-between p-4">
        <div className="">
          <img src={logo} alt="logo" className="  h-40 w-40 rounded-[8px] " />
        </div>
        <nav className="">
          <ul className="flex  items-start justify-start  gap-12">
            <li className=" cursor-pointer rounded-[4px] p-2 [transition:all_ease_0.5s] hover:bg-[#1e293b] hover:text-[white]">
              Home
            </li>
            <li className="cursor-pointer p-2 [transition:all_ease_0.5s] hover:rounded-[4px] hover:bg-[#1e293b] hover:text-[white]">
              About
            </li>
            <li className=" cursor-pointer rounded-[4px] p-2 [transition:all_ease_0.5s] hover:bg-[#1e293b] hover:text-[white]">
              Our Product
            </li>
            <li className=" cursor-pointer rounded-[4px] p-2 [transition:all_ease_0.5s] hover:bg-[#1e293b] hover:text-[#fff]">
              contact
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
