"use client";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";

export default function About() {
  const [mission, setMission] = useState(true);
  const [vision, setVision] = useState(false);
  const [plans, setPlans] = useState(false);

  const primary = useMotionValue("102 65 169");
  const background = useMotionTemplate`linear-gradient(to bottom right, rgb(${primary}), rgb(149, 17, 252))`;
  // const background = useMotionTemplate`linear-gradient(to bottom right, rgb(${primary}), rgb(59 7 100))`;

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const color = e.currentTarget.getAttribute("data-color") as string;
    const root = document.documentElement;
    root.style.setProperty("--primary", color);

    animate(primary, color, { duration: 0.7 });
  }
  return (
    <div>
      <motion.section className="min-h-screen py-24" style={{ background }}>
        <div className="container  text-white ">
          <h1 className="3xl font-bold">About Our Produc</h1>
          <div className="mt-4 flex gap-3">
            <button
              onClick={(e) => {
                setVision(false);
                setPlans(false);
                setMission(true);
                handleClick(e);
              }}
              data-color="88 202 155"
              className="rounded-lg border px-3 py-1"
            >
              Our Mission
            </button>
            <button
              onClick={(e) => {
                setMission(false);
                setPlans(false);
                setVision(true);
                handleClick(e);
              }}
              data-color="196 26 105"
              className="rounded-lg border px-3 py-1"
            >
              Our Vision
            </button>
            <button
              onClick={(e) => {
                setMission(false);
                setVision(false);
                setPlans(true);
                handleClick(e);
              }}
              data-color="102 65 169"
              className="rounded-lg border px-3 py-1 "
            >
              Plans
            </button>
          </div>

          <div className="w-full h-screen flex justify-center mx- items-start mt-36">
            {mission && (
              <div className="sm:px-[5%] lg:px-[10%] ">
                <h1 className="flex justify-start items-center gap-2 text-2xl w-auto">
                  <span className="bg-[#ff2020] flex items-end h-[1px] sm:w-20 w-12"></span>
                  <span>Our Mission</span>
                </h1>
                <AnimatePresence>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    At our core, we strive to innovate and excel, creating
                    exceptional solutions that make a positive impact on the
                    world. Our mission is to deliver unparalleled value to our
                    customers, empowering them to achieve their goals with
                    efficiency and excellence. We are dedicated to fostering a
                    culture of continuous improvement, integrity, and respect.
                    <br /> Risus commodo viverra sebfd dho eiusmod tempor
                    maecenas accumsan lacus. Risus commodo viverra sebfd dho
                    eiusmod tempor maecenas accumsan lacus. Risus commodo
                    viverra sebfd dho eiusmod tempor maecenas accumsan.
                  </motion.p>
                </AnimatePresence>
              </div>
            )}
            {vision && (
              <div className="sm:px-[5%] lg:px-[10%] ">
                <div className="flex justify-start items-center gap-2 text-2xl w-auto">
                  <span className="bg-[#ff2020] flex items-end h-[1px] sm:w-20 w-12"></span>
                  <h1>Our Vision</h1>
                </div>
                <AnimatePresence>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    We envision a future where innovation and sustainability go
                    hand in hand, creating a world where technology enhances the
                    quality of life for all. Our vision is to be at the
                    forefront of this change, leading by example and driving
                    progress through responsible and ethical practices. We aim
                    to inspire and empower individuals and communities to build
                    a brighter, more inclusive future.
                    <br /> Consectetur adipiscing elit, sued do eiusmod tempor
                    ididunt udfgt labore et dolore magna aliqua. Quis ipsum
                    suspendisces gravida. Risus commodo viverra sebfd dho
                    eiusmod tempor maecenas accumsan lacus.
                  </motion.p>
                </AnimatePresence>
              </div>
            )}
            {plans && (
              <div className="sm:px-[5%] lg:px-[10%] ">
                <div className="flex justify-start items-center gap-2 text-2xl w-auto">
                  <span className="bg-[#ff2020] flex items-end h-[1px] sm:w-20 w-12"></span>
                  <h1>Plans</h1>
                </div>
                <AnimatePresence>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    Our future plans include expanding our reach globally while
                    staying true to our values of innovation and sustainability.
                    We plan to invest in cutting-edge technologies, build
                    strategic partnerships, and continuously enhance our product
                    offerings. <br /> By staying agile and responsive to market
                    trends, we aim to meet the evolving needs of our customers
                    and drive long-term growth. magna aliqua. Quis ipsum
                    suspendisces gravida. Risus commodo viverra sebfd dho
                    eiusmod tempor maecenas accumsan lacus.Consectetur
                    adipiscing elit, sued do eiusmod tempor ididunt udfgt labore
                    et dolore
                  </motion.p>
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </motion.section>
      
    </div>
  );
}
