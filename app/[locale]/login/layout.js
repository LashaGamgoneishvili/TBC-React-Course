import { Inter } from "next/font/google";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

export default function RootLayout({ children }) {
  return <div className={righteous.className}>{children}</div>;
}
