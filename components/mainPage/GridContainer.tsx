import Image from "next/image";
const first =
  "https://ajy8khmx9vtvyckn.public.blob.vercel-storage.com/grid-first-1-T7BrC3ll45YPsll8fjhFat2yVzOSBz.jpg";
const second =
  "https://ajy8khmx9vtvyckn.public.blob.vercel-storage.com/grid-second-2-2CpHsDk2QymxN99rfnV7EXAOX2PTb3.jpeg";
const third =
  "https://ajy8khmx9vtvyckn.public.blob.vercel-storage.com/grid-third-3-pm85c6jlbxDvK156RKJzmYHzQSjYsM.webp";
const fourth =
  "https://ajy8khmx9vtvyckn.public.blob.vercel-storage.com/grid-fourth-4-JORt6JTmLkMZ4ePzbp81DUQBumLmaK.jpg";

const GridContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 h-[1000px] xl:h-96">
      <div className="h-auto xl:col-span-2 xl:row-span-2 relative overflow-hidden ">
        <Image
          src={first}
          alt="Image 1"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          width={500}
          height={500}
          aria-label="First image"
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
          width={400}
          height={400}
          aria-label="second image"
          className="hover:scale-105 duration-500 h-auto"
        />


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
          width={300}
          height={300}
          aria-label="third image"
          className="hover:scale-105 duration-500 h-auto"
        />

      </div>
      <div className="relative overflow-hidden">
        <Image
          src={fourth}
          alt="Image 1"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          width={200}
          height={200}
          aria-label="fourth image"
          className="hover:scale-105 duration-500 h-auto"
        />

      </div>
    </div>
  );
};

export default GridContainer;
