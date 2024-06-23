import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Admin Panel" },
  description: "Accessing Control Panels",
};
function GoogleFontLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default GoogleFontLayout;
