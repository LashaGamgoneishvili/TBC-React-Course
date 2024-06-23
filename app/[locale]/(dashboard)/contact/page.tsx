"use client";

export default function Contact() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("user_email") as HTMLInputElement)
      .value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const mailtoLink = `mailto:someone@example.com?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-around text-black dark:text-white dark:bg-[#21252b] bg-gray-100">
      <div className="flex h-auto  w-full flex-col items-center justify-center gap-12 pt-4">
        <h1>SEND US A MESSAGE</h1>
        <form
          onSubmit={(event) => handleSubmit(event)}
          className="flex h-auto flex-col items-center justify-center gap-4 text-[#333]"
        >
          <div className="flex gap-16">
            <div className="flex flex-col gap-1">
              <label className="text-black dark:text-white">Name</label>
              <input
                className="justify-self-center rounded-[0.7rem] border-[2px] border-[#dedede] bg-[#ffffff] p-3.5 transition-all duration-300"
                type="text"
                placeholder="Your Name..."
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-black dark:text-white">Email</label>
              <input
                type="email"
                name="user_email"
                className="justify-self-center rounded-[0.7rem] border-[2px] border-[#dedede] bg-[#ffffff] p-3.5 transition-all duration-300"
                placeholder="Your Email..."
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-black dark:text-white">Phone</label>
              <input
                type="tel"
                placeholder="Your Phone Number..."
                className="justify-self-center rounded-[0.7rem] border-[2px] border-[#dedede] bg-[#ffffff] p-3.5 transition-all duration-300"
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-4">
            <label className="text-black dark:text-white">Message</label>
            <textarea
              name="message"
              placeholder="Message"
              className="h-[180px] w-full justify-self-center rounded-[0.7rem] border-[2px] border-[#dedede] bg-[#ffffff] p-4"
            />
            <p className="w-28 rounded-lg bg-[#111111] p-2 text-white transition-all duration-300 hover:bg-[#ec1d25]">
              <a href="mailto:someone@example.com">Send email</a>
            </p>
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
