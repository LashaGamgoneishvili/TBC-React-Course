"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
const georgia =
  "https://ajy8khmx9vtvyckn.public.blob.vercel-storage.com/Flag_of_Georgia.svg-6OR8I1uIZq2Z6PcmbvQsSfAbvgFjiA.png";
const kingdom =
  "https://ajy8khmx9vtvyckn.public.blob.vercel-storage.com/Flag-United-Kingdom-f0cmSt2B2YdfdMUrH3D8nhPoCaoidb.webp";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const [language, setLanguage] = useState(currentLocale);
  const router = useRouter();

  // e: React.ChangeEvent<HTMLSelectElement>
  const handleClick = () => {
    if (language === "ka") {
      setLanguage("en");
    } else {
      setLanguage("ka");
    }
  };

  useEffect(() => {
    const newLocale = language;
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    router.refresh();
  }, [language, router]);

  return (
    <div className="flex  items-center" onClick={handleClick}>
      {language === "ka" ? (
        <div className="flex justify-center gap-2 items-center">
          <Image
            src={georgia}
            priority={true}
            alt="Person-logo"
            className="h-auto w-8"
            width={150}
            height={150}
          />
          <p className="hidden sm:block">GE</p>
        </div>
      ) : (
        <div className="flex gap-2 justify-center items-center">
          <Image
            src={kingdom}
            priority={true}
            alt="Person-logo"
            className="h-auto w-8"
            width={250}
            height={250}
          />
          <p className="hidden sm:block">EN</p>
        </div>
      )}
    </div>
  );
}
