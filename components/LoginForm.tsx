"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { t } = useTranslation();
  return (
    <div>
      <form
        action="/api/login"
        method="POST"
        className="flex flex-col w-full relative rounded-md justify-center items-start  gap-8"
      >
        <div className="flex flex-col gap-2  ">
          {/* <label className="">{t("username")}</label> */}
          <input
            type="username"
            id="username"
            name="username"
            placeholder={t("username")}
            className="p-2  dark:rounded-md outline-0 bg-white	border-b border-black w-96"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          {/* <label className="">{t("Password")}</label> */}
          <input
            type="password"
            id="password"
            name="password"
            placeholder={t("Password")}
            className="p-2   dark:rounded-md   border-b border-black w-96  bg-white outline-0"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex gap-2 ">
          <input type="checkbox" id="checkbox" />
          <span>{t("Remember me")}</span>
        </div>
        <button className="px-24 w-96 rounded-md py-4 border  hover:bg-[#2577fd] duration-500  border-[#2577fd]">
          {t("login-btn")}
        </button>
        <p className="cursor-pointer absolute bottom-[-35px] right-0">
          {t("Forget-Pass")}
        </p>
      </form>
    </div>
  );
}
