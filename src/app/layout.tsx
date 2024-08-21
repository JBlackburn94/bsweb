import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beauty School - Offical Website",
  description: "All the latest news, tickets and merch for Beauty School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          type="text/javascript"
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=VSenM8"
        ></script>
      </head>
      <body className={inter.className}>
        <Navbar />
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
