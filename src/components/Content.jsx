import { useState } from "react";
import box1 from "../Assets/product-images/springl-1.jpg";
import box2 from "../Assets/product-images/springl-2.jpg";
import box3 from "../Assets/product-images/springl-3.jpg";
import box4 from "../Assets/product-images/springl-4.jpg";
import box5 from "../Assets/product-images/springl-5.jpg";
import box6 from "../Assets/product-images/springl-6.jpg";
import DebounceSearchComponent from "./DebounceSearchComponent";

export const productList = [
  {
    Title: "ORIGINAL CRISPS",
    description:
      "When you're an original, you set the standard for how it's done. And with the tantalizing taste of potato.",
    img: box1,
    userRating: 4.5,
    color: "#de2e38",
  },
  {
    Title: "SOUR CREAM AND ONION CRISPS",
    description:
      "The awesomeness of sour cream, onion and potato together can't be measured by modern science.",
    img: box2,
    userRating: 4.4,
    color: "#60b958",
  },
  {
    Title: "BBQ CRISPS",
    description:
      "Snacking gets awesomer when you add the taste of BBQ to the mix. It's the flavor that brings an outdoorsy vibe.",
    img: box3,
    userRating: 4.3,
    color: "#933565",
  },
  {
    Title: "CHEDDAR CHEESE CRISPS",
    description:
      "We didn't use just any cheese flavor in Pringles® Cheddar Cheese crisps. We went with cheddar - the king of cheeses.",
    img: box4,
    userRating: 4.1,
    color: "#f6af52",
  },
  {
    Title: "CHEDDAR & SOUR CREAM CRISPS",
    description:
      "Imagine a baked potato smothered in cheddar cheese. Then imagine sticking that potato under the broiler.",
    img: box5,
    userRating: 4.4,
    color: "#35c9e7",
  },
  {
    Title: "PIZZA CRISPS",
    description:
      "Pizza makes people happy. Combine the two and your will be known as the happiest place on earth.",
    img: box6,
    userRating: 4.2,
    color: "#fdfdfd",
  },
];

export default function Content() {
  const [product, setProduct] = useState([...productList]);
  // const [search, setSearch] = useState("");

  function handleSort() {
    if (
      JSON.stringify(product.map((e) => e.userRating)) !==
      JSON.stringify(productList.map((e) => e.userRating))
    ) {
      setProduct([...productList]);
    } else {
      setProduct(
        (product) =>
          (product = product.toSorted((a, b) => b.userRating - a.userRating)),
      );
    }
  }

  // useEffect(
  //   function () {
  //     const searchedProduct = productList.filter((product) => {
  //       return product.Title.toLowerCase().startsWith(search);
  //     });

  //     if (search !== "") {
  //       setProduct((product) => (product = [...searchedProduct]));
  //       console.log([...searchedProduct]);
  //       console.log(search);
  //       return;
  //     } else {
  //       setProduct((product) => (product = [...productList]));
  //     }
  //   },
  //   [search],
  // );

  return (
    <section className="flex flex-col justify-around gap-8">
      <div className="flex w-full items-center justify-center gap-1 p-2">
        {/* <Search search={search} setSearch={setSearch} /> */}
        <DebounceSearchComponent setProduct={setProduct} />
        <button
          className="my-2 [transition:all_ease_0.2s] "
          onClick={handleSort}
        >
          Sort
          <span className="ml-1 text-lg font-semibold">&uarr;&darr;</span>
        </button>
      </div>
      <div className=" grid  grid-cols-1  items-center justify-items-center gap-y-[8px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6">
        {product.map((product, i) => (
          <div
            key={i}
            className=" border-stale-800 relative flex h-[430px] w-[240px]  flex-col items-center overflow-hidden rounded-lg  border-2  text-[#333]"
          >
            <h1 className="h-16 p-2 text-center text-[14px]">
              {product.Title}
            </h1>
            <img
              src={product.img}
              alt="product"
              className="h-[225px] w-[80px]"
            />
            <p className="mb-6 p-2 text-[12px]">{product.description}</p>
            <button
              className={` group absolute bottom-0 mb-2 rounded-md bg-[#0ea5e9] p-2 text-[#fff] transition-all duration-300 hover:bg-[#0369a1] focus:ring `}
            >
              Add to Chart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

// function Search({ search, setSearch }) {
//   return (
//     <input
//       className="w-[40rem] justify-self-center rounded-[0.7rem] bg-[#e2e2e2]  px-2 py-2 [transition:all_0.3s] focus:bg-[#fff]"
//       type="text "
//       placeholder="Search Product..."
//       value={search}
//       onChange={(e) => setSearch(e.target.value.toLowerCase())}
//     />
//   );
// }
