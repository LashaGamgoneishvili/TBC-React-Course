import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return <div className={righteous.className}>{children}</div>;
}
