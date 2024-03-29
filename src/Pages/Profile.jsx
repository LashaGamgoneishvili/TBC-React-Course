import logo from "../Assets/2815428.png";

const person = [
  {
    name: "Lasha",
    surname: "Gamgoneishvili",
    mail: "Gamgoneishvili@gmail.com",
  },
];

export default function Profile() {
  return (
    <>
      <div className="mb-5 mt-10 flex items-center justify-center gap-6">
        <div className="rounded-[50%] bg-[#f5f5dc] p-8">
          <img src={logo} alt="Person-logo" className="w h-[150px] w-[150px]" />
        </div>
        {person.map((person, index) => {
          return (
            <ul key={index} className="p-5">
              <li>{person.name}</li>
              <li>{person.surname}</li>
              <li>{person.mail}</li>
            </ul>
          );
        })}
        <form className="flex flex-col items-center justify-start gap-4 p-5">
          <input
            type="password"
            placeholder="New Password"
            className="rounded-lg border-2  px-5 py-2"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className=" rounded-lg border-2 px-5 py-2 "
          />
          <button className=" rounded-lg border-2  px-10 py-1  text-black transition-all duration-300 ease-in-out hover:border-black  ">
            Save
          </button>
        </form>
      </div>
    </>
  );
}
