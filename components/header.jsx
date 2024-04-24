"use server";
import Image from "next/image";
import logo from "../public/Assets/logo.jpg";
import Link from "next/link";
import LogautButton from "./logoutbtn";
import ThemeSwitch from "./ThemeSwitch";
import TranslationsProvider from "./TranslationsProvider";
import LanguageChanger from "./LanguageChanger";

export default async function Header({
  translator,
  resources,
  locale,
  namespaces,
}) {
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={namespaces}
    >
      <header>
        <div className="flex h-14 items-center justify-between p-4">
          <a href="/">
            <Image
              src={logo}
              alt="Pringle's logo"
              priority={true}
              className="  mt-10 h-24 w-auto rounded-[8px]"
            />
          </a>
          <nav>
            <ul className="flex  items-center justify-center  gap-12 ">
              <li className=" cursor-pointer p-1   [transition:all_ease_0.2s] ">
                <Link href="/">{translator("header:header_home")}</Link>
              </li>
              <li className=" cursor-pointer p-1   [transition:all_ease_0.2s] ">
                <Link href="/profile">
                  {translator("header:header_Profile")}
                </Link>
              </li>

              <li className=" cursor-pointer p-1   [transition:all_ease_0.2s] ">
                <Link href="/blog">{translator("header:header_blog")}</Link>
              </li>

              <li className=" cursor-pointer p-1   [transition:all_ease_0.2s] ">
                <Link href="/contact">
                  {translator("header:header_contact")}
                </Link>
              </li>
              <LogautButton />
              <LanguageChanger />
              <ThemeSwitch />
            </ul>
          </nav>
        </div>
      </header>
    </TranslationsProvider>
  );
}
