import RemoveAllCheckout from "../../../../components/checkout/RemoveAllCeckout";
import { ProductQuantityMap, CartItem, Product } from "../../../../types/types";
import { getAllCartProduct } from "../../../../actions";
import CheckoutProductList from "../../../../components/checkout/CheckoutProductList";

async function productFetch() {
  const cartItems = await getAllCartProduct();

  // Initialize an empty object for productQuantityMap
  const productQuantityMap: ProductQuantityMap = {};

  // Ensure cartItems.rows is defined before proceeding
  if (cartItems?.rows) {
    cartItems.rows.forEach((item: CartItem) => {
      productQuantityMap[item.productid] = item.quantity;
    });

    const productPromises = cartItems.rows.map((item: CartItem) =>
      fetch(`https://dummyjson.com/products/${item.productid}`, {
        cache: "force-cache",
      }).then((res) => res.json() as Promise<Product>)
    );

    const products: Product[] = (await Promise.all(productPromises)).sort(
      (a, b) => a.id - b.id
    );

    return {
      products,
      productQuantityMap,
    };
  }

  // Return empty values if cartItems.rows is undefined
  return {
    products: [],
    productQuantityMap,
  };
}

export default async function CheckOut() {
  const { productQuantityMap, products } = await productFetch();
  return (
    <div className="w-full mx-auto flex flex-col items-center ">
      <div className="w-full h-auto">
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
