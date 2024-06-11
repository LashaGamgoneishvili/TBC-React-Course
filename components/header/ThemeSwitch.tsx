"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className="flex justify-center items-center px-5 py-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <circle cx="4" cy="12" r="3" fill="currentColor">
            <animate
              id="svgSpinners3DotsFade0"
              fill="freeze"
              attributeName="opacity"
              begin="0;svgSpinners3DotsFade1.end-0.25s"
              dur="0.75s"
              values="1;0.2"
            />
          </circle>
          <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.4">
            <animate
              fill="freeze"
              attributeName="opacity"
              begin="svgSpinners3DotsFade0.begin+0.15s"
              dur="0.75s"
              values="1;0.2"
            />
          </circle>
          <circle cx="20" cy="12" r="3" fill="currentColor" opacity="0.3">
            <animate
              id="svgSpinners3DotsFade1"
              fill="freeze"
              attributeName="opacity"
              begin="svgSpinners3DotsFade0.begin+0.3s"
              dur="0.75s"
              values="1;0.2"
            />
          </circle>
        </svg>
      </div>
    );

  if (resolvedTheme === "dark") {
    return (
      <div
        onClick={() => {
          setTheme("light");
        }}
        className=" flex justify-center items-center"
      >
        <FiSun />
      </div>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <div
        onClick={() => {
          setTheme("dark");
        }}
        className=" flex justify-center items-center"
      >
        <FiMoon />
      </div>
    );
  }

  return null;
}
