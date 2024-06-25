import SuccessComponent from "@/components/SuccessComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Success ✅" },
  description: "Your order has been sent successfully",
};

export default function Success() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-24 p-24 text-4xl">
      <h1>Order Completed</h1>

      <SuccessComponent />
    </div>
  );
}
