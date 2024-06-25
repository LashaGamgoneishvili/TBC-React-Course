"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const mailtoLink = `mailto:gamgoneishvili8@gmail.com?subject=${encodeURIComponent(
      "Contact Form Submission"
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    )}`;
    window.location.href = mailtoLink;
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-around text-black dark:text-white dark:bg-[#21252b] bg-gray-100">
      <div className="flex h-auto  w-full flex-col items-center justify-center gap-12 pt-4">
        <h1>SEND US A MESSAGE</h1>
        <form
          onSubmit={handleSubmit}
          className="flex h-auto flex-col items-center justify-center gap-4 text-[#333]"
        >
          <div className="flex gap-16">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-black dark:text-white">
                Name
              </label>
              <input
                id="name"
                className="justify-self-center rounded-[0.7rem] border-[2px] border-[#dedede] bg-[#ffffff] p-3.5 transition-all duration-300"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name..."
                name="name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-black dark:text-white">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="justify-self-center rounded-[0.7rem] border-[2px] border-[#dedede] bg-[#ffffff] p-3.5 transition-all duration-300"
                placeholder="Your Email..."
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-black dark:text-white">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Your Phone Number..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="justify-self-center rounded-[0.7rem] border-[2px] border-[#dedede] bg-[#ffffff] p-3.5 transition-all duration-300"
                name="phone"
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-4">
            <label htmlFor="message" className="text-black dark:text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-[180px] w-full justify-self-center rounded-[0.7rem] border-[2px] border-[#dedede] bg-[#ffffff] p-4"
            />
            <button
              type="submit"
              className="w-28 rounded-lg bg-[#111111] p-2 text-white transition-all duration-300 hover:bg-[#ec1d25]"
            >
              Send email
            </button>
          </div>
        </form>
      </div>

      <div className="flex w-full items-center justify-around ">
        <div className="flex flex-col justify-between gap-2">
          <h1 className=" text-lg font-medium">Location</h1>
          <div>
            <p>8th floor, 379 Hudson St, </p>
            <p>New York, NY 10018</p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <h1 className=" text-lg font-medium">CALL US</h1>
          <p>(+1) 96 716 6879</p>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <h1 className=" text-lg font-medium">Follow us on: </h1>
          <p className="flex  gap-4">
            <a href="/">facebook</a>
            <a href="/">instagram</a>
            <a href="/">twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}
