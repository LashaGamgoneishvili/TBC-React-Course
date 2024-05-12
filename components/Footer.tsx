export default function Footer() {
  return (
    <footer>
      <div className="px-7 py-2  w-full flex items-start justify-between ">
        <FooterBox>
          <h1> Home</h1>
          <ul className="cursor-pointer">
            <li>About us</li>
            <li>Services</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </FooterBox>
        <FooterBox>
          <h1> Terms Conditions</h1>
          <ul className="cursor-pointer">
            <li>About us</li>
            <li>Services</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </FooterBox>
        <FooterBox>
          <h1>CONTACT US</h1>
          <ul className="cursor-pointer">
            <li>379 Hudson St, New York, NY 10018</li>
            <li>(+1) 96 716 6879</li>
            <li>(+1) 94 957 7894</li>
            <li>contact@site.com</li>
          </ul>
        </FooterBox>
        <FooterBox>
          <form className="flex flex-col items-center gap-2">
            <h2 className="mb-2">Sign Up</h2>
            <input
              type="email"
              placeholder="Email..."
              name="user_email"
              className="rounde-[4px] rounded-md border-[0.5px] p-2  bg-[#fff]]"
            />
            <button className="w-full rounded-[4px] p-2 bg-[#3b82f6]  hover:bg-sky-700  duration-500 text-[#fff] ">
              SEND
            </button>
          </form>
        </FooterBox>
      </div>
    </footer>
  );
}

function FooterBox({ children }: { children: React.ReactNode }) {
  return (
    <div className=" flex flex-col items-center gap-3 text-[14px]">
      {children}
    </div>
  );
}

// function Copyright() {
//   return (
//     <div className=" bg-[#2222] p-3">
//       <p className="text-center">
//         Copyright ©2024 All rights reserved | This template is made by Lasha
//         Gamgoneishvili
//       </p>
//     </div>
//   );
// }
