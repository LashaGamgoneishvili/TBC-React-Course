"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function NewArrivals() {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col gap-16">
      <h1 className="text-[52px] ml-[9%]"> {t("MainPage:newArrivals")}</h1>
      <div className="flex flex-wrap justify-center items-center  px-8 text-xl gap-6 xl:gap-12 w-full ">
        <div className="flex flex-col gap-2 items-center  overflow-hidden ">
          <div className="overflow-hidden">
            <Image
              src="https://ajy8khmx9vtvyckn.public.blob.vercel-storage.com/New_Arrivals-1-VhkHZcBq4nMtWSjInDTjowrLpBxDjb.webp"
              width={150}
              height={150}
              className="h-[500px] w-96 hover:scale-105 duration-500"
              priority
              // loading="lazy"
              alt="Product-picture"
            />
          </div>
          <p>Thermo Ball Etip Gloves</p>
          <p className="text-center text-[#ff2020]">$ 45,743</p>
        </div>
        <div className="flex flex-col gap-2 items-center overflow-hidden ">
          <div className="overflow-hidden">
            <Image
              src="https://ajy8khmx9vtvyckn.public.blob.vercel-storage.com/New_Arrivals-2-LETnb20IDkh7Al3JJEQcqUy19kPYzr.webp"
              width={150}
              height={150}
              className=" h-[500px] w-96 hover:scale-105 duration-500"
              priority
              // loading="lazy"
              alt="Product-picture"
            />
          </div>
          <p> {t("MainPage:newArrivalsDesc")}</p>
          <p className="text-center text-[#ff2020]">$ 45,743</p>
        </div>
        <div className="flex flex-col gap-2 items-center overflow-hidden ">
          <div className="overflow-hidden">
            <Image
              src="https://ajy8khmx9vtvyckn.public.blob.vercel-storage.com/New_Arrivals-3-wOGzYZYntH4GvfiBiFcmVD5I3rTlp4.png"
              width={150}
              height={150}
              className=" h-[500px] w-96 hover:scale-105 duration-500"
              priority
              // loading="lazy"
              alt="Product-picture"
            />
          </div>
          <p>{t("MainPage:newArrivalsDesc")}</p>
          <p className="text-center text-[#ff2020]">$ 45,743</p>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
