"use client";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

export default function SectionPage() {
  const primary = useMotionValue("102 65 169");
  const background = useMotionTemplate`linear-gradient(to bottom right, rgb(${primary}), rgb(59 7 100))`;

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const color = e.currentTarget.getAttribute("data-color") as string;
    const root = document.documentElement;
    root.style.setProperty("--primary", color);

    animate(primary, color, { duration: 0.7 });
  }
  return (
    <motion.section className="min-h-screen py-24" style={{ background }}>
      <div className="container  text-white">
        <h1 className="3xl font-bold">Background Bradiant Animation</h1>
        <div className="mt-4 flex gap-3">
          <button
            onClick={(e) => handleClick(e)}
            data-color="88 202 155"
            className="rounded-lg border px-3 py-1"
          >
            Green
          </button>
          <button
            onClick={(e) => handleClick(e)}
            data-color="196 26 105"
            className="rounded-lg border px-3 py-1"
          >
            Pink
          </button>
          <button
            onClick={(e) => handleClick(e)}
            data-color="102 65 169"
            className="rounded-lg border px-3 py-1 "
          >
            Purple
          </button>
        </div>
      </div>
    </motion.section>
  );
}
