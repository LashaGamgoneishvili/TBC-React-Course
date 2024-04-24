"use client";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const { t } = useTranslation("header");

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div>Loading...</div>;

  if (resolvedTheme === "dark") {
    return (
      <li
        className="cursor-pointer p-1 flex items-center justify-center px-5 py-2 rounded-md  [transition:all_ease_0.2s] "
        onClick={() => {
          setTheme("light");
        }}
      >
        {t("header_light")}
      </li>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <li
        className="cursor-pointer p-1 flex items-center px-5 py-2 rounded-md justify-center [transition:all_ease_0.2s] "
        onClick={() => {
          setTheme("dark");
        }}
      >
        {t("header:header_dark")}
      </li>
    );
  }
}
