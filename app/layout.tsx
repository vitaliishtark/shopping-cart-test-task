import "./globals.css";
import Image from "next/image";
import cart from "@/public/cart.svg";
import Link from "next/link";
import CartProvider from "@/redux/slices/CartProvider";
import { Toaster } from "react-hot-toast";
import CartCounts from "@/components/cartcounts/CartCounts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Toaster position="top-center" reverseOrder={false} />
          <div className="flex place-content-between mb-10">
            <Link href="/">
              <span className="ml-2 text-2xl font-bold">Magazin</span>
            </Link>
            <div className="mt-1.5"></div>
            <Link href="/cart">
              <button className="cursor-pointer flex flex-row hover: active:bg-gray-300 rounded-lg mx-1">
                <div className="flex flex-row text-xl  pl-1 mr-2">
                  <Image width={20} height={20} src={cart} alt="CartImg" />
                  <div>
                    (<CartCounts />)
                  </div>
                </div>
              </button>
            </Link>
          </div>

          {children}
        </CartProvider>
      </body>
    </html>
  );
}
