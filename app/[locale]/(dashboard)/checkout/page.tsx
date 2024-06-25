import { getAllCartProduct } from "../../../../actions";
import ProductListContainer from "../../../../components/checkout/ProductListContainer";

export default async function CheckOut() {
  const product = await getAllCartProduct();
  const products = product.rows;

  return (
    <div
      className={`${
        products
          ? "w-full xl:px-40 md:items-end items-center text-[#8e8bb2] flex flex-col"
          : "w-full sm:px-40 items-center justify-center text-[#8e8bb2] flex flex-col"
      } `}
    >
      <div className="w-full  mb-8">
        <div className="flex justify-between mt-24 items-center relative">
          <div className="absolute border-b w-full mt-8"></div>
          <p className="mb-4 pl-8">Product</p>
          <div className="hidden sm:flex gap-8 sm:gap-16 md:gap-24 lg:gap-[150px] mb-4 pr-8">
            <p>Price</p>
            <p>Quantity</p>
            <p className="ml-20">Total</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {products && products.length > 0 ? (
          <ProductListContainer products={products} />
        ) : (
          <div className="h-screen w-full">
            <p className="h-screen w-full text-[52px] tracking-widest font-black flex justify-center items-center">
              No Products
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
