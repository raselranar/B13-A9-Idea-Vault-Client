import { Cabin } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { Toast } from "@heroui/react";
import { Providers } from "./providers";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});
// home page title and description
export const metadata = {
  title: "Idea Vault - Unleash Your Creativity",
  description:
    "Discover, share, and collaborate on innovative ideas with Idea Vault. Join our vibrant community of creators and turn your ideas into reality.",
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${cabin.className} h-full antialiased`}
      suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <Providers>
          <NavBar />
          <main>{children}</main>
          <Footer />
          <Toast.Provider placement="top" />
        </Providers>
      </body>
    </html>
  );
}
