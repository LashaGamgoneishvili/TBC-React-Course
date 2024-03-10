import React from "react";
import logo from "./Assets/logo.jpeg";
import computer from "./Assets/tech-computer-logo-template_23-2149204144.avif";

export default function App() {
  return (
    <div className=" font-body ">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header() {
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

function Content() {
  return (
    <div className="flex h-screen w-full items-center justify-between  bg-slate-800	px-10">
      <div className=" text-blue-500">
        <p>welcome to ALLSAFE</p>
        <h1 className="mb-7 mt-9 text-5xl">Future Syber Tecnology</h1>
        <h6 className="flex h-full items-center justify-center font-body text-3xl text-[#9dc59e]">
          We are professional group of people who creates secure systems and
          trus for our customers
        </h6>
      </div>
      <div className="">
        <img
          src={computer}
          alt="computer"
          className="h-[350px] w-[350px] rounded-xl [box-shadow:10px_5px_5px_#2222] "
        />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="mx-7 my-7 flex items-start justify-between">
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
          <div className="flex flex-col items-center gap-4">
            <h2 className="mb-2">Sign Up</h2>
            <input
              type="email"
              placeholder="Email..."
              className="rounde-[4px] border-[0.5px] bg-[#2222] p-2"
            />
            <button className="w-full rounded-[4px] bg-[#3b82f6] p-2">
              SEND
            </button>
          </div>
        </FooterBox>
      </div>
      <div className=" bg-[#2222] p-3">
        <p className="text-center">
          Copyright ©2024 All rights reserved | This template is made by Lasha
          Gamgoneishvili
        </p>
      </div>
    </footer>
  );
}

function FooterBox({ children }) {
  return <div className=" flex flex-col items-center gap-3">{children}</div>;
}
