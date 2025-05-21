import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Profile Aggregator",
  description: "Higor Augusto Silvério - Developer - Profile Aggregator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
