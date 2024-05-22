import RemoveAllCheckout from "../../../../components/checkout/RemoveAllCeckout";
import { ProductQuantityMap } from "../../../../types/types";
import { CartItem } from "../../../../types/types";
import { Product } from "../../../../types/types";
import { getAllCartProduct } from "../../../../actions";
import CheckoutProductList from "../../../../components/checkout/CheckoutProductList";

async function productFetch() {
  const cartItems = await getAllCartProduct();
  const productQuantityMap: ProductQuantityMap = [];
  cartItems.rows.forEach((item: CartItem) => {
    productQuantityMap[item.productid] = item.quantity;
  });
  const productPromises = cartItems.rows.map((item: CartItem) =>
    fetch(`https://dummyjson.com/products/${item.productid}`, {
      cache: "force-cache",
    }).then((res) => res.json())
  );
  const products = (await Promise.all(productPromises)).sort(
    (a, b) => a.id - b.id
  );
  return {
    products,
    productQuantityMap,
  };
}

export default async function CheckOut() {
  const { productQuantityMap, products } = await productFetch();
  console.log(productQuantityMap);
  return (
    <div className="w-full mx-auto flex flex-col items-center ">
      <div className="w-full h-auto">
        <div className=" w-full flex justify-center bg-[url('https://preview.colorlib.com/theme/timezone/assets/img/hero/about_hero.png')]">
          <h1 className="mt-52 text-[52px] mb-52 font-black tracking-widest">
            Cart List
          </h1>
        </div>
        <div className=" px-16 w-full mb-8">
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
        {products.map((product: Product, idx) => (
          <CheckoutProductList
            key={idx}
            product={product}
            initialQuantity={productQuantityMap[product.id]}
            productId={product.id}
          />
        ))}
      </div>
      {products.length === 0 ? (
        <p className="h-screen w-full text-[52px] tracking-widest font-black flex justify-center items-center">
          No Products
        </p>
      ) : (
        <RemoveAllCheckout />
      )}
    </div>
  );
}
