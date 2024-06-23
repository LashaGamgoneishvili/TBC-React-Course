import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Cancellation of Order" },
  description: "Your odrer is canceled",
};

export default function Cancel() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 text-4xl">
      Order Canceled
    </div>
  );
}
