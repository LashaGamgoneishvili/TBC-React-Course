import logo from "../Assets/Pringles-logo.png";

export default function Header({ Link }) {
  return (
    <header>
      <div className="flex h-14 items-center justify-between p-4">
        <div className="">
          <img
            src={logo}
            alt="logo"
            className="  mt-10 h-16 w-auto rounded-[8px]"
          />
        </div>
        <nav className="">
          <ul className="flex  items-start justify-start  gap-12 ">
            <li className=" cursor-pointer p-1 text-[#333]  [transition:all_ease_0.2s] 	hover:border-b  hover:border-[#333]">
              <a href="/">Home</a>
            </li>
            <li className=" cursor-pointer p-1 text-[#333]  [transition:all_ease_0.2s] 	hover:border-b  hover:border-[#333]">
              <a href="/">About</a>
            </li>

            <li className=" cursor-pointer p-1 text-[#333]  [transition:all_ease_0.2s] 	hover:border-b  hover:border-[#333]">
              <a href="/">Our Product</a>
            </li>

            <li className=" cursor-pointer p-1 text-[#333]  [transition:all_ease_0.2s] 	hover:border-b  hover:border-[#333]">
              <a href="../Pages/Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// function SocialNet() {
//   return (
//     <div className="flex w-full justify-between bg-[#282c34] p-2 text-[#fff]">
//       <h1>
//         Our free Product are downloaded over 5 MILLION times. Get them now!
//       </h1>
//       <ul className="flex cursor-pointer gap-4">
//         <li className="text-[24px]">
//           <ion-icon name="logo-facebook" />
//         </li>
//         <li className="text-[24px]">
//           <ion-icon name="logo-instagram" />
//         </li>
//         <li className="text-[24px]">
//           <ion-icon name="logo-twitter" />
//         </li>
//         <li className="text-[24px]">
//           <ion-icon name="logo-linkedin" />
//         </li>
//       </ul>
//     </div>
//   );
// }
