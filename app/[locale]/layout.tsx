import { Providers } from "./providers";
import { AppWrapper } from "../context/index";
import "./globals.css";
import { Poppins } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: { default: "Rolex", template: "%s | Rolex " },
  description: "Don't waste your time",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
  variable: "--poppins-font",
});

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <UserProvider>
        <body className={poppins.className}>
          <Providers>
            <AppWrapper>{children}</AppWrapper>
            <Toaster position="top-right" />
          </Providers>
        </body>
      </UserProvider>
    </html>
  );
}
