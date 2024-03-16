export default function Footer() {
  return (
    <footer>
      <div className="mx-7 my-2 flex items-start justify-between">
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
            <li>
              <ion-icon name="location-outline" /> 379 Hudson St, New York, NY
              10018
            </li>
            <li>
              <ion-icon name="call-outline" /> (+1) 96 716 6879
            </li>
            <li>
              <ion-icon name="call-outline" /> (+1) 94 957 7894
            </li>
            <li>
              <ion-icon name="mail-outline" /> contact@site.com
            </li>
          </ul>
        </FooterBox>
        <FooterBox>
          <div className="flex flex-col items-center gap-2">
            <h2 className="mb-2">Sign Up</h2>
            <input
              type="email"
              placeholder="Email..."
              className="rounde-[4px] rounded-md border-[0.5px] bg-[#2222] p-2 [transition:all_0.3s] focus:bg-[#fff]"
            />
            <button className="w-full rounded-[4px] bg-[#3b82f6] p-2 hover:text-[#fff]">
              SEND
            </button>
          </div>
        </FooterBox>
      </div>
    </footer>
  );
}

function FooterBox({ children }) {
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
