import { NextResponse } from "next/server";
import { BASE_URL } from "../api";
export const revalidate = 0;

const stripe = require("stripe")(process.env.STRIPE_SECRET);

const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list();
  const availableProducts = checkProducts.data.filter(
    (product: any) => product.active === true
  );

  return availableProducts;
};

export async function POST(request: any) {
  const { products } = await request.json();
  const data = products;
  let activeProducts = await getActiveProducts();

  try {
    for (const product of data) {
      const stripeProduct = activeProducts?.find((stripeProduct: any) => {
        stripeProduct?.name?.toLowerCase() === product?.title?.toLowerCase();
      });

      if (stripeProduct == undefined) {
        const prod = await stripe.products.create({
          name: product.title,
          default_price_data: {
            unit_amount: product.price * 100,
            currency: "usd",
          },
        });
        console.log("prod-123", prod);
      }
    }
  } catch (error) {
    console.log("Error in creating a new product", error);
    throw error;
  }

  activeProducts = await getActiveProducts();
  let stripeItems = [];

  for (const product of data) {
    const stripeProduct = activeProducts?.find(
      (prod: any) => prod?.name?.toLowerCase() === product?.title?.toLowerCase()
    );

    if (stripeProduct) {
      stripeItems.push({
        price: stripeProduct?.default_price,
        quantity: product?.quantity,
      });
    }
  }

  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    mode: "payment",
    success_url: `${BASE_URL}/success`,
    cancel_url: `${BASE_URL}/cancel`,
  });
  return NextResponse.json({ url: session.url });
}
