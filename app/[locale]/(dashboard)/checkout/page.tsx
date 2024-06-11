import RemoveAllCheckout from "../../../../components/checkout/RemoveAllCeckout";
import { CheckoutProduct } from "../../../../types/types";
import { getAllCartProduct } from "../../../../actions";
import CheckoutProductList from "../../../../components/checkout/CheckoutProductList";

export default async function CheckOut() {
  let products: CheckoutProduct[] = [];

  try {
    const product = await getAllCartProduct();
    products = product.rows;
  } catch (error) {
    console.error("Error fetching cart products:", error);
  }

  return (
    <div className="w-full mx-auto text-[#8e8bb2] flex flex-col items-center">
      <div className="w-full h-auto">
        <div className="px-16 w-full mb-8">
          <div className="flex justify-between mt-24 items-center relative">
            <div className="absolute border-b w-full mt-8"></div>
            <p className="mb-4 pl-8">Product</p>
            <div className="flex gap-[150px] mb-4 pr-8">
              <p>Price</p>
              <p>Quantity</p>
              <p className="ml-20">Total</p>
            </div>
          </div>
        </div>
        {products && products.length > 0 ? (
          products.map((product: CheckoutProduct, idx: number) => (
            <CheckoutProductList
              key={idx}
              product={product}
              initialQuantity={product.quantity}
              productId={product.id}
            />
          ))
        ) : (
          <p className="h-screen w-full text-[52px] tracking-widest font-black flex justify-center items-center">
            No Products
          </p>
        )}
      </div>
      {products?.length > 0 && <RemoveAllCheckout />}
    </div>
  );
}
