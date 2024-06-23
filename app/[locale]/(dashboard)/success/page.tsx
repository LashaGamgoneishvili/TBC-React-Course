import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Success ✅" },
  description: "Your order has been sent successfully",
};
export default function Success() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 text-4xl">
      Order Completed
    </div>
  );
}
