"use client";
import { useTranslation } from "react-i18next";

export default function LogoutButton() {
  const { t } = useTranslation();

  return (
    <form action="/api/logout" method="GET">
      <button className="cursor-pointer px-4 py-2 border-2 rounded-md hover:border-red-500 transition-all ease-in-out duration-200">
        {t("header:header_logout")}
      </button>
    </form>
  );
}
