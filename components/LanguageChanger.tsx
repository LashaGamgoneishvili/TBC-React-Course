"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../i18nConfig";

// type I18nConfig = {
//   locales: string[],
//   defaultLocale: string,
//   prefixDefault: boolean,
// };

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    console.log(
      currentLocale,
      i18nConfig.defaultLocale,
      newLocale,
      currentPathname,
      i18nConfig.prefixDefault
    );
    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      console.log(currentPathname, "lasha");
      router.push("/" + newLocale + currentPathname);
    } else {
      // console.log(currentLocale, newLocale, currentPathname);
      console.log(currentLocale, i18nConfig.defaultLocale, "else");
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <select
      title="langSelect"
      onChange={(e) => handleChange(e)}
      value={currentLocale}
      className="bg-white dark:bg-slate-700 w-16 py-2 rounded-md outline-none border border-gray-500"
    >
      <option value="en">EN</option>
      <option value="ka">GEO</option>
    </select>
  );
}
