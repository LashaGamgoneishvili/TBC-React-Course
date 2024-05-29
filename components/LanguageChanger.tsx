"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import georgia from "../public/Assets/Flag_of_Georgia.svg.png";
import kingdom from "../public/Assets/Flag-United-Kingdom.webp";

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
    <div
      className="bg-white dark:bg-slate-700 py-2 rounded-md outline-none "
      onClick={handleClick}
    >
      {language === "ka" ? (
        <div className="flex justify-center items-center">
          <Image
            src={georgia}
            priority={true}
            alt="Person-logo"
            className="h-auto w-8"
            width={150}
            height={150}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <Image
            src={kingdom}
            priority={true}
            alt="Person-logo"
            className="h-auto w-8"
            width={250}
            height={250}
          />
        </div>
      )}
    </div>
  );
}
