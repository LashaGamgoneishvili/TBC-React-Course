export default function Contact() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-around   bg-[#efefef]">
      <div className="flex h-auto  w-full flex-col items-center justify-center gap-12 pt-4">
        <h1>SEND US A MESSAGE</h1>
        <form className="flex h-auto flex-col items-center justify-center gap-4 text-[#333]">
          <div className="flex gap-16">
            <div className="flex flex-col gap-1">
              <label>Name</label>
              <input
                className=" justify-self-center rounded-[0.7rem] border-[2px] border-[#dedede] bg-[#ffffff] p-3.5 [transition:all_0.3s] "
                type="text "
                placeholder="Your Name..."
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                className=" justify-self-center rounded-[0.7rem] border-[2px] border-[#dedede] bg-[#ffffff]  p-3.5 [transition:all_0.3s]"
                placeholder="Your Email..."
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Phone</label>
              <input
                type="phone"
                placeholder="Your Phone Number..."
                className=" justify-self-center rounded-[0.7rem] border-[2px] border-[#dedede] bg-[#ffffff] p-3.5 [transition:all_0.3s] "
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-4">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Message"
              className="h-[180px] w-full justify-self-center rounded-[0.7rem] border-[2px] border-[#dedede] bg-[#ffffff] p-4 "
            />
            <input
              type="submit"
              value="Submit"
              className="w-28 rounded-lg bg-[#111111] p-2 text-white [transition:all_0.3s] hover:bg-[#ec1d25]"
            />
          </div>
        </form>
      </div>

      <div className="flex w-full items-center justify-around ">
        <div className="flex flex-col justify-between gap-2">
          <h1 className=" text-lg font-medium">
            <ion-icon name="location-outline"></ion-icon> Location
          </h1>
          <div>
            <p>8th floor, 379 Hudson St, </p>
            <p>New York, NY 10018</p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <h1 className=" text-lg font-medium">
            <ion-icon name="call-outline"></ion-icon> CALL US
          </h1>
          <p>(+1) 96 716 6879</p>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <h1 className=" text-lg font-medium">Follow us on: </h1>
          <p className="flex  gap-4">
            <a href="/">
              <ion-icon name="logo-facebook" size="large"></ion-icon>
            </a>
            <a href="/">
              <ion-icon name="logo-instagram" size="large"></ion-icon>
            </a>
            <a href="/">
              <ion-icon name="logo-twitter" size="large"></ion-icon>
            </a>
          </p>
        </div>
      </div>

      <button className=" rounded-md bg-[#0ea5e9] p-2 text-[#fff] transition-all duration-300 hover:bg-[#0369a1] focus:ring">
        <a href="/">Back to Home</a>
      </button>
    </div>
  );
}
