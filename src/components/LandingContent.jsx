import computer from "../Assets/section-img.jpg";

export default function Section() {
  return (
    <div className=" border-[#fff]-500 mt-[20px] flex flex-col items-center  gap-[20px] rounded-[12px]  border-2 border-solid  bg-[#000000] text-[#fff]">
      <div className="mt-[30px] flex flex-col items-center">
        <p>ENTERPRISE-LEVEL SECURITY SOFTWARE</p>
        <p className=" text-[35px]">THREATLOCKER PROTECT</p>
      </div>
      <div className="grid grid-cols-[repeat(3,_1fr)]  items-center gap-4">
        <div className=" ml-[20px] flex flex-col  gap-[30px]">
          <div className="flex flex-col gap-[15px] [&>*:nth-child(1)]:text-blue-600">
            <h2 className="text-[28px]">Block Untrusted Software</h2>
            <p className="text-[18px]">
              Deny all applications and scripts from running except those that
              are explicitly allowed, including ransomware. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col gap-[15px] [&>*:nth-child(1)]:text-blue-600 ">
            <h2 className="text-[28px]">Block Untrusted Software</h2>
            <p className="text-[18px]">
              A Host based firewall that dynamically allows access using
              automatic ACLs. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={computer}
            alt="computer"
            className="h-[450px] items-center self-center rounded-[8px] transition duration-500 ease-in hover:scale-[0.9]"
          />
        </div>
        <div className=" ml-[20px] flex flex-col  gap-[30px]">
          <div className="flex flex-col gap-[15px] [&>*:nth-child(1)]:text-blue-600">
            <h2 className="text-[28px]">Ringfencing™ Applications</h2>
            <p className="text-[18px]">
              Prevent exploits and attackers from weaponizing legitimate tools
              such as PowerShell by limiting what software can do. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col gap-[15px] [&>*:nth-child(1)]:text-blue-600 ">
            <h2 className="text-[28px]">24/7/365 Support</h2>
            <p className="text-[18px]">
              Best in industry support, with less than 60 seconds response time
              by our U.S. based Cyber Hero Team. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <p>Learn More About ThreatLocker Protect</p>
      <button className=" mb-[20px] rounded-[8px] bg-[#fff] p-[20px] text-[#333] transition duration-500 ease-out hover:-translate-y-1 hover:scale-110 hover:bg-[#2563eb] hover:text-[#fff]">
        See ThreatLocker Product
      </button>
    </div>
  );
}
