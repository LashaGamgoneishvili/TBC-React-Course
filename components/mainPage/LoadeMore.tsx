import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import AddCartButton from "./AddChartButton";
import { useUser } from "@auth0/nextjs-auth0/client";
import { motion, AnimatePresence } from "framer-motion";

export type AnimeCard = JSX.Element;

function LoadMore({
  data,
  moreContent,
  page,
}: {
  data: BlogObject;
  moreContent: boolean;
  page: number;
}) {
  const [datas, setData] = useState<Product[]>();
  const { user } = useUser();
  const role = user?.role;

  useEffect(() => {
    setData([...data.result.slice(6, page * 3 + 6)]);
  }, [data.result, page]);
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <AnimatePresence>
        {moreContent &&
          datas?.map((item) => (
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{
                delay: page * 0.25,
                ease: "easeInOut",
                duration: 0.5,
              }}
              viewport={{ amount: 0 }}
              key={item.product_id}
              className="flex flex-col  gap-2 justify-center  w-full relative overflow-hidden items-center "
            >
              <div className="flex relative group overflow-hidden ">
                <Link
                  href={`product/${item.product_id}`}
                  className="flex justify-center w-full h-full   "
                >
                  <Image
                    alt="watch-images"
                    src={`${item.image}`}
                    priority={true}
                    width={350}
                    height={100}
                  />
                </Link>
                <div className="bg-[#f81f1f] h-[2px] w-full absolute bottom-0"></div>

                <div className="absolute  flex items-center  justify-center h-[60px] group-hover:bg-[#f81f1f] -bottom-[58px] bg-transparent group-hover:bottom-0  w-full duration-500">
                  <AddCartButton productId={item.product_id} role={role} />
                </div>
              </div>
              <p className=" text-xl w-full text-center ">{item.description}</p>
              <p className="text-center ">Price - {item.price}$</p>
            </motion.div>
          ))}
      </AnimatePresence>
    </>
  );
}

export default LoadMore;
