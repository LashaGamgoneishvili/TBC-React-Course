import Image from "next/image";
import first from "../../public/Assets/mainPage/first.jpg";
import second from "../../public/Assets/mainPage/second.jpeg";
import third from "../../public/Assets/mainPage/HTB1o0W5i9YTBKNjSZKbq6xJ8pXa6.webp";
import forth from "../../public/Assets/mainPage/212908125_FR.jpg";

const GridContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 h-[1000px] xl:h-96">
      <div className="h-auto xl:col-span-2 xl:row-span-2 relative overflow-hidden ">
        {/* <Image
          src={first}
          alt="Image 1"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="hover:scale-105 duration-500 h-auto"
        /> */}
        <Image
          src={first}
          alt="Image 1"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="hover:scale-105 duration-500 h-auto"
        />
      </div>
      <div className="row-span-2 relative overflow-hidden">
        <Image
          src={second}
          alt="Image 1"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="hover:scale-105 duration-500 h-auto"
        />

        {/* <Image
          src={second}
          alt="Image 2"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="hover:scale-105 duration-500"
        /> */}
      </div>
      <div className="relative overflow-hidden">
        <Image
          src={third}
          alt="Image 1"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="hover:scale-105 duration-500 h-auto"
        />
        {/* <Image
          src={third}
          alt="Image 3"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="hover:scale-105 duration-500"
        /> */}
      </div>
      <div className="relative overflow-hidden">
        <Image
          src={forth}
          alt="Image 1"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="hover:scale-105 duration-500 h-auto"
        />
        {/* <Image
          src={forth}
          alt="Image 4"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="hover:scale-105 duration-500"
        /> */}
      </div>
    </div>
  );
};

export default GridContainer;
